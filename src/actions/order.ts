'use server'

import { orderFormSchema, type OrderFormData } from '@/lib/validations'
import { prisma } from '@/lib/prisma'
import { checkRateLimit, orderFormLimiter } from '@/lib/rate-limiter'
import { mg, MAILGUN_DOMAIN, MAILGUN_FROM, ADMIN_EMAIL } from '@/lib/mailgun'
import { generateOrderPDF } from '@/lib/pdf-generator'
import { verifyRecaptcha } from '@/lib/recaptcha'
import { headers } from 'next/headers'
import { readFile } from 'fs/promises'
import type { FormResponse } from '@/types'

export async function submitOrderForm(
  data: OrderFormData,
  recaptchaToken: string | null
): Promise<FormResponse> {
  try {
    // Validate input
    const validatedData = orderFormSchema.parse(data)

    // Verify reCAPTCHA if token provided
    if (recaptchaToken) {
      const isValidRecaptcha = await verifyRecaptcha(recaptchaToken)
      if (!isValidRecaptcha) {
        return {
          success: false,
          message: '',
          error: 'reCAPTCHA verification failed. Please try again.',
        }
      }
    }

    // Get client IP for rate limiting
    const headersList = await headers()
    const ip = headersList.get('x-forwarded-for') || 'unknown'
    const userAgent = headersList.get('user-agent') || undefined

    // Check rate limit
    const rateLimitResult = await checkRateLimit(orderFormLimiter, ip)
    if (!rateLimitResult.success) {
      return {
        success: false,
        message: '',
        error: rateLimitResult.error,
      }
    }

    // Save to database
    const order = await prisma.orderSubmission.create({
      data: {
        clientName: validatedData.clientName,
        clientPhone: validatedData.clientPhone,
        clientEmail: validatedData.clientEmail,
        orderDescription: validatedData.orderDescription,
        ipAddress: ip,
        userAgent,
      },
    })

    // Generate PDF
    let pdfPath: string | undefined
    try {
      pdfPath = await generateOrderPDF({
        clientName: validatedData.clientName,
        clientPhone: validatedData.clientPhone,
        clientEmail: validatedData.clientEmail,
        orderDescription: validatedData.orderDescription,
        orderId: order.id,
        createdAt: order.createdAt,
      })

      // Update order with PDF path
      await prisma.orderSubmission.update({
        where: { id: order.id },
        data: { pdfPath },
      })
    } catch (pdfError) {
      console.error('Failed to generate PDF:', pdfError)
      // Continue without PDF
    }

    // Send email notification to admin with PDF attachment
    if (MAILGUN_API_KEY && MAILGUN_DOMAIN && ADMIN_EMAIL) {
      try {
        const messageData: any = {
          from: MAILGUN_FROM,
          to: [ADMIN_EMAIL],
          subject: `New Order from ${validatedData.clientName} - Order #${order.id}`,
          html: `
            <h2>New Order Submission</h2>
            <p><strong>Order ID:</strong> ${order.id}</p>
            <p><strong>Client Name:</strong> ${validatedData.clientName}</p>
            <p><strong>Phone:</strong> ${validatedData.clientPhone}</p>
            <p><strong>Email:</strong> ${validatedData.clientEmail}</p>
            <p><strong>Order Description:</strong></p>
            <p>${validatedData.orderDescription.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Submitted from IP: ${ip}</small></p>
          `,
        }

        // Attach PDF if generated
        if (pdfPath) {
          const pdfBuffer = await readFile(pdfPath)
          messageData.attachment = [
            {
              filename: `order-${order.id}.pdf`,
              data: pdfBuffer,
            },
          ]
        }

        await mg.messages.create(MAILGUN_DOMAIN, messageData)

        // Mark email as sent
        await prisma.orderSubmission.update({
          where: { id: order.id },
          data: { emailSent: true },
        })
      } catch (emailError) {
        console.error('Failed to send email:', emailError)
        // Don't fail the submission if email fails
      }
    }

    return {
      success: true,
      message:
        'Thank you for your order! We have received your request and will contact you shortly.',
    }
  } catch (error) {
    console.error('Order form submission error:', error)
    return {
      success: false,
      message: '',
      error: 'Failed to submit order. Please try again later.',
    }
  }
}

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY