'use server'

import { orderFormSchema, type OrderFormData } from '@/lib/validations'
import { checkRateLimit, orderFormLimiter } from '@/lib/rate-limiter'
import { verifyRecaptcha } from '@/lib/recaptcha'
import { headers } from 'next/headers'
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

    // Check rate limit
    const rateLimitResult = await checkRateLimit(orderFormLimiter, ip)
    if (!rateLimitResult.success) {
      return {
        success: false,
        message: '',
        error: rateLimitResult.error,
      }
    }

    // Log submission (without database)
    console.log('Order form submission:', {
      clientName: validatedData.clientName,
      clientPhone: validatedData.clientPhone,
      clientEmail: validatedData.clientEmail,
      ip,
    })

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