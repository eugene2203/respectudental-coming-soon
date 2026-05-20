'use server'

import { contactFormSchema, type ContactFormData } from '@/lib/validations'
import { prisma } from '@/lib/prisma'
import { checkRateLimit, contactFormLimiter } from '@/lib/rate-limiter'
import { mg, MAILGUN_DOMAIN, MAILGUN_FROM, ADMIN_EMAIL } from '@/lib/mailgun'
import { verifyRecaptcha } from '@/lib/recaptcha'
import { headers } from 'next/headers'
import type { FormResponse } from '@/types'

export async function submitContactForm(
  data: ContactFormData,
  recaptchaToken: string | null
): Promise<FormResponse> {
  try {
    // Validate input
    const validatedData = contactFormSchema.parse(data)

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
    const rateLimitResult = await checkRateLimit(contactFormLimiter, ip)
    if (!rateLimitResult.success) {
      return {
        success: false,
        message: '',
        error: rateLimitResult.error,
      }
    }

    // Save to database
    await prisma.contactSubmission.create({
      data: {
        doctorName: validatedData.doctorName,
        clinicName: validatedData.clinicName,
        email: validatedData.email,
        phone: validatedData.phone,
        department: validatedData.department,
        message: validatedData.message,
        ipAddress: ip,
        userAgent,
      },
    })

    // Send email notification to admin
    if (MAILGUN_API_KEY && MAILGUN_DOMAIN && ADMIN_EMAIL) {
      try {
        await mg.messages.create(MAILGUN_DOMAIN, {
          from: MAILGUN_FROM,
          to: [ADMIN_EMAIL],
          subject: `New Contact Form Submission from ${validatedData.doctorName}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>doctorName:</strong> ${validatedData.doctorName}</p>
            <p><strong>clinicName:</strong> ${validatedData.clinicName}</p>
            <p><strong>email:</strong> ${validatedData.email}</p>
            <p><strong>phone:</strong> ${validatedData.phone}</p>
            <p><strong>department:</strong> ${validatedData.department}</p>
            <p><strong>message:</strong> ${validatedData.message}</p>
            <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Submitted from IP: ${ip}</small></p>
          `,
        })
      } catch (emailError) {
        console.error('Failed to send email:', emailError)
        // Don't fail the submission if email fails
      }
    }

    return {
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
    }
  } catch (error) {
    console.error('Contact form submission error:', error)
    return {
      success: false,
      message: '',
      error: 'Failed to submit form. Please try again later.',
    }
  }
}

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY