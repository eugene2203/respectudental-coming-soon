'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'
import { submitContactForm } from '@/actions/contact'
import { useState } from 'react'
import { useRecaptcha } from '@/lib/hooks/useRecaptcha'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{
    type: 'success' | 'error'
    text: string
  } | null>(null)

  const { executeRecaptcha } = useRecaptcha()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      // Execute reCAPTCHA
      const recaptchaToken = await executeRecaptcha('contact_form')

      const result = await submitContactForm(data, recaptchaToken)

      if (result.success) {
        setSubmitMessage({ type: 'success', text: result.message })
        reset()
      } else {
        setSubmitMessage({
          type: 'error',
          text: result.error || 'Something went wrong',
        })
      }
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'Failed to submit form. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <div className="form-group">
        <label htmlFor="fullName">Full Name *</label>
        <input
          id="fullName"
          type="text"
          {...register('fullName')}
          className={errors.fullName ? 'error' : ''}
          disabled={isSubmitting}
        />
        {errors.fullName && (
          <span className="error-message">{errors.fullName.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={errors.email ? 'error' : ''}
          disabled={isSubmitting}
        />
        {errors.email && (
          <span className="error-message">{errors.email.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className={errors.message ? 'error' : ''}
          disabled={isSubmitting}
        />
        {errors.message && (
          <span className="error-message">{errors.message.message}</span>
        )}
      </div>

      {submitMessage && (
        <div className={`submit-message ${submitMessage.type}`}>
          {submitMessage.text}
        </div>
      )}

      <button type="submit" disabled={isSubmitting} className="submit-button">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}