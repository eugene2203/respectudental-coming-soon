'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { orderFormSchema, type OrderFormData } from '@/lib/validations'
import { submitOrderForm } from '@/actions/order'
import { useState } from 'react'
import { useRecaptcha } from '@/lib/hooks/useRecaptcha'

export default function OrderForm() {
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
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderFormSchema),
  })

  const onSubmit = async (data: OrderFormData) => {
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      // Execute reCAPTCHA
      const recaptchaToken = await executeRecaptcha('order_form')

      const result = await submitOrderForm(data, recaptchaToken)

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
        text: 'Failed to submit order. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="order-form">
      <div className="form-group">
        <label htmlFor="clientName">Your Name *</label>
        <input
          id="clientName"
          type="text"
          {...register('clientName')}
          className={errors.clientName ? 'error' : ''}
          disabled={isSubmitting}
        />
        {errors.clientName && (
          <span className="error-message">{errors.clientName.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="clientPhone">Phone Number *</label>
        <input
          id="clientPhone"
          type="tel"
          {...register('clientPhone')}
          className={errors.clientPhone ? 'error' : ''}
          disabled={isSubmitting}
          placeholder="+1 (555) 123-4567"
        />
        {errors.clientPhone && (
          <span className="error-message">{errors.clientPhone.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="clientEmail">Email *</label>
        <input
          id="clientEmail"
          type="email"
          {...register('clientEmail')}
          className={errors.clientEmail ? 'error' : ''}
          disabled={isSubmitting}
        />
        {errors.clientEmail && (
          <span className="error-message">{errors.clientEmail.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="orderDescription">Order Description *</label>
        <textarea
          id="orderDescription"
          rows={6}
          {...register('orderDescription')}
          className={errors.orderDescription ? 'error' : ''}
          disabled={isSubmitting}
          placeholder="Please describe your order requirements in detail..."
        />
        {errors.orderDescription && (
          <span className="error-message">
            {errors.orderDescription.message}
          </span>
        )}
      </div>

      {submitMessage && (
        <div className={`submit-message ${submitMessage.type}`}>
          {submitMessage.text}
        </div>
      )}

      <button type="submit" disabled={isSubmitting} className="submit-button">
        {isSubmitting ? 'Processing...' : 'Submit Order'}
      </button>
    </form>
  )
}