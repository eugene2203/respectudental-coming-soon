'use server'

import { contactFormSchema, type ContactFormData } from '@/lib/validations'
import { checkRateLimit, contactFormLimiter } from '@/lib/rate-limiter'
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

    // Check rate limit
    const rateLimitResult = await checkRateLimit(contactFormLimiter, ip)
    if (!rateLimitResult.success) {
      return {
        success: false,
        message: '',
        error: rateLimitResult.error,
      }
    }

    // Log submission (without database)
    console.log('Contact form submission:', {
      doctorName: validatedData.doctorName,
      clinicName: validatedData.clinicName,
      email: validatedData.email,
      phone: validatedData.phone,
      department: validatedData.department,
      ip,
    })

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