'use server'

import { submitCaseFormSchema, type SubmitCaseFormData } from '@/lib/validations'
import { checkRateLimit, submitCaseFormLimiter } from '@/lib/rate-limiter'
import { verifyRecaptcha } from '@/lib/recaptcha'
import { headers } from 'next/headers'
import type { FormResponse } from '@/types'

function formatCheckboxList(values: string[]): string {
  return values.length > 0 ? values.join(', ') : '—'
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

    const rateLimitResult = await checkRateLimit(submitCaseFormLimiter, ip)
    if (!rateLimitResult.success) {
      return {
        success: false,
        message: '',
        error: rateLimitResult.error,
      }
    }

    // Log submission (without database)
    console.log('Submit case form submission:', {
      practiceName: validatedData.practiceName,
      patientName: validatedData.patientName,
      involvedTeeth: formatCheckboxList(validatedData.involvedTeeth),
      included: formatCheckboxList(validatedData.included),
      ip,
    })

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
