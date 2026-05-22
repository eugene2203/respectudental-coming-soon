'use server'

import { submitCaseFormSchema, type SubmitCaseFormData } from '@/lib/validations'
import { prisma } from '@/lib/prisma'
import { checkRateLimit, submitCaseFormLimiter } from '@/lib/rate-limiter'
import { mg, MAILGUN_DOMAIN, MAILGUN_FROM, ADMIN_EMAIL } from '@/lib/mailgun'
import { verifyRecaptcha } from '@/lib/recaptcha'
import { headers } from 'next/headers'
import type { FormResponse } from '@/types'

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY

function formatCheckboxList(values: string[]): string {
  return values.length > 0 ? values.join(', ') : '—'
}

function formatOptionalBlock(label: string, value?: string): string {
  if (!value) return ''
  return `<p><strong>${label}:</strong></p><p>${value.replace(/\n/g, '<br>')}</p>`
}

export async function submitCaseForm(
  data: SubmitCaseFormData,
  recaptchaToken: string | null
): Promise<FormResponse> {
  try {
    const validatedData = submitCaseFormSchema.parse(data)

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

    const headersList = await headers()
    const ip = headersList.get('x-forwarded-for') || 'unknown'
    const userAgent = headersList.get('user-agent') || undefined

    const rateLimitResult = await checkRateLimit(submitCaseFormLimiter, ip)
    if (!rateLimitResult.success) {
      return {
        success: false,
        message: '',
        error: rateLimitResult.error,
      }
    }

    await prisma.caseSubmission.create({
      data: {
        practiceName: validatedData.practiceName,
        patientName: validatedData.patientName,
        rx: validatedData.rx,
        todayDate: validatedData.todayDate,
        returnDate: validatedData.returnDate,
        shade: validatedData.shade,
        involvedTeeth: validatedData.involvedTeeth,
        fixedRestorationOptions: validatedData.fixedRestorationOptions,
        fixedSpecificInstructions: validatedData.fixedSpecificInstructions,
        removableRestoration: validatedData.removableRestoration,
        removableSpecificInstructions: validatedData.removableSpecificInstructions,
        included: validatedData.included,
        additionalInstructions: validatedData.additionalInstructions,
        ipAddress: ip,
        userAgent,
      },
    })

    if (MAILGUN_API_KEY && MAILGUN_DOMAIN && ADMIN_EMAIL) {
      try {
        await mg.messages.create(MAILGUN_DOMAIN, {
          from: MAILGUN_FROM,
          to: [ADMIN_EMAIL],
          subject: `New Case Rx from ${validatedData.practiceName} — ${validatedData.patientName}`,
          html: `
            <h2>New Submit Case Form</h2>
            <p><strong>Practice name:</strong> ${validatedData.practiceName}</p>
            <p><strong>Patient name:</strong> ${validatedData.patientName}</p>
            ${validatedData.rx ? `<p><strong>Rx:</strong> ${validatedData.rx}</p>` : ''}
            ${validatedData.todayDate ? `<p><strong>Today date:</strong> ${validatedData.todayDate}</p>` : ''}
            ${validatedData.returnDate ? `<p><strong>Return date:</strong> ${validatedData.returnDate}</p>` : ''}
            ${validatedData.shade ? `<p><strong>Shade:</strong> ${validatedData.shade}</p>` : ''}
            <p><strong>Involved teeth:</strong> ${formatCheckboxList(validatedData.involvedTeeth)}</p>
            ${formatOptionalBlock('Fixed restoration options', validatedData.fixedRestorationOptions)}
            ${formatOptionalBlock('Fixed specific instructions', validatedData.fixedSpecificInstructions)}
            ${formatOptionalBlock('Removable restoration', validatedData.removableRestoration)}
            ${formatOptionalBlock('Removable specific instructions', validatedData.removableSpecificInstructions)}
            <p><strong>Included:</strong> ${formatCheckboxList(validatedData.included)}</p>
            ${formatOptionalBlock('Additional instructions', validatedData.additionalInstructions)}
            <hr>
            <p><small>Submitted from IP: ${ip}</small></p>
          `,
        })
      } catch (emailError) {
        console.error('Failed to send email:', emailError)
      }
    }

    return {
      success: true,
      message: 'Thank you! Your case has been submitted successfully.',
    }
  } catch (error) {
    console.error('Submit case form error:', error)
    return {
      success: false,
      message: '',
      error: 'Failed to submit form. Please try again later.',
    }
  }
}
