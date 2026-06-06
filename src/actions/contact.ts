'use server'

import {contactFormSchema, type ContactFormData, type SubmitCaseFormData} from '@/lib/validations'
import { checkRateLimit, contactFormLimiter } from '@/lib/rate-limiter'
import { verifyRecaptcha } from '@/lib/recaptcha'
import { headers } from 'next/headers'
import type { FormResponse } from '@/types'
import {sendMail} from "@/lib/mailer";
import {join} from "path";
import {readFile} from "fs/promises";

interface ValidatedData {
  doctorName: string;
  clinicName: string;
  email: string;
  phone: string;
  message: string;
  department: string;
}


export async function submitContactForm(
  data: ContactFormData,
  recaptchaToken: string | null
): Promise<FormResponse> {
  try {
    // Validate input
    const validatedData:ValidatedData = contactFormSchema.parse(data)

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

    const html = await fillTemplate(validatedData);

    await sendMail({
      to: process.env.MAILGUN_TO_EMAIL!,
      subject: `Contact form submission from website respectudental.com`,
      html: html,
    });

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

async function fillTemplate(data:ValidatedData): Promise<string> {
  // Read template
  const templatePath = join(process.cwd(), 'src/templates/contact-form.html')
  let html = await readFile(templatePath, 'utf-8')

  // Replace placeholders
  html = html
      .replace('{{DOCTORS_NAME}}', data.doctorName)
      .replace('{{CLINIC_NAME}}', data.clinicName || '—')
      .replace('{{EMAIL_ADDRESS}}', data.email || '—')
      .replace('{{PHONE_NUMBER}}', data.phone || '—')
      .replace('{{TEXT_MESSAGE}}', data.message || '—')

  return html
}
