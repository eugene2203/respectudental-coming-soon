'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { submitCaseFormSchema, type SubmitCaseFormData } from '@/lib/validations'
import { submitCaseForm } from '@/actions/submit-case'
import { generateSubmitCasePDF } from '@/actions/generate-pdf'
import { useRecaptcha } from '@/lib/hooks/useRecaptcha'
import FormField from '@/components/common/FormField'
import FormCheckbox from '@/components/common/FormCheckbox'
import {
    INVOLVED_TEETH_UPPER_OPTIONS,
    INVOLVED_TEETH_LOWER_OPTIONS,
    INCLUDED_OPTIONS,
} from '@/components/forms/submit-case-form-options'

export default function SubmitCaseForm() {
    const { executeRecaptcha } = useRecaptcha()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
    const [submitMessage, setSubmitMessage] = useState<{
        type: 'success' | 'error'
        text: string
    } | null>(null)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        getValues,
    } = useForm<SubmitCaseFormData>({
        resolver: zodResolver(submitCaseFormSchema),
        defaultValues: {
            involvedTeeth: [],
            included: [],
            todayDate: new Date().toISOString().slice(0, 10),
        },
    })

    const onSubmit = async (data: SubmitCaseFormData) => {
        setIsSubmitting(true)
        setSubmitMessage(null)

        try {
            const recaptchaToken = await executeRecaptcha('submit_case_form')
            const result = await submitCaseForm(data, recaptchaToken)

            if (result.success) {
                setSubmitMessage({ type: 'success', text: result.message })
                reset()
            } else {
                setSubmitMessage({
                    type: 'error',
                    text: result.error || 'Something went wrong',
                })
            }
        } catch {
            setSubmitMessage({
                type: 'error',
                text: 'Failed to submit form. Please try again.',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleDownloadPDF = async () => {
        setIsGeneratingPDF(true)
        setSubmitMessage(null)

        try {
            // Get current form data from react-hook-form
            const formData = getValues()

            // Generate PDF on server with form data
            const result = await generateSubmitCasePDF(formData)

            if (result.success && result.pdfPath) {
                // Trigger download
                const fileName = result.pdfPath.split('/').pop()
                window.location.href = `/api/download-pdf?file=${fileName}`
            } else {
                setSubmitMessage({
                    type: 'error',
                    text: result.error || 'Failed to generate PDF',
                })
            }
        } catch {
            setSubmitMessage({
                type: 'error',
                text: 'Failed to generate PDF. Please try again.',
            })
        } finally {
            setIsGeneratingPDF(false)
        }
    }

    return (
        <section className="section-padding-small">
            <div className="submit-case-form-section">
                <form onSubmit={handleSubmit(onSubmit)} className="submit-case-form">
                    <h2 className="section-title mb-5 xl:mb-12">Fixed Prosthetics Rx</h2>
                    <div className="form-border-bottom pb-4 mb-3">
                        <FormField<SubmitCaseFormData>
                            id="practiceName"
                            label="Practice name:"
                            register={register}
                            errors={errors}
                            isSubmitting={isSubmitting}
                        />
                        <FormField<SubmitCaseFormData>
                            id="patientName"
                            label="Patient name:"
                            register={register}
                            errors={errors}
                            isSubmitting={isSubmitting}
                        />
                    </div>
                    <div className="xl:flex gap-2 form-border-bottom pb-4 mb-3">
                        <div className="xl:w-1/4">
                            <FormField<SubmitCaseFormData>
                                id="rx"
                                label="Rx"
                                register={register}
                                errors={errors}
                                isSubmitting={isSubmitting}
                            />
                        </div>
                        <div className="xl:w-1/4">
                            <FormField<SubmitCaseFormData>
                                id="todayDate"
                                label="Today date:"
                                type="date"
                                register={register}
                                errors={errors}
                                isSubmitting={isSubmitting}
                            />
                        </div>
                        <div className="xl:w-1/4">
                            <FormField<SubmitCaseFormData>
                                id="returnDate"
                                label="Return date:"
                                type="date"
                                register={register}
                                errors={errors}
                                isSubmitting={isSubmitting}
                            />
                        </div>
                        <div className="xl:w-1/4">
                            <FormField<SubmitCaseFormData>
                                id="shade"
                                label="Shade:"
                                register={register}
                                errors={errors}
                                isSubmitting={isSubmitting}
                            />
                        </div>
                    </div>
                    <div className="form-group form-checkbox-group form-border-bottom pb-4 mb-3">
                        <p className="form-checkbox-group__title text-center mb-2">
                            Simple tooth selection (Circle involved teeth)
                        </p>
                        <div className="form-checkbox-grid-teeth">
                            <div className="form-checkbox-grid-teeth__row form-checkbox-grid-teeth__row--upper pb-2">
                                {INVOLVED_TEETH_UPPER_OPTIONS.map((tooth) => (
                                    <FormCheckbox<SubmitCaseFormData>
                                        key={tooth.value}
                                        id="involvedTeeth"
                                        value={tooth.value}
                                        label={tooth.label}
                                        labelPosition="top"
                                        register={register}
                                        errors={errors}
                                        isSubmitting={isSubmitting}
                                    />
                                ))}
                            </div>
                            <div className="form-checkbox-grid-teeth__row pt-2">
                                {INVOLVED_TEETH_LOWER_OPTIONS.map((tooth) => (
                                    <FormCheckbox<SubmitCaseFormData>
                                        key={tooth.value}
                                        id="involvedTeeth"
                                        value={tooth.value}
                                        label={tooth.label}
                                        labelPosition="bottom"
                                        register={register}
                                        errors={errors}
                                        isSubmitting={isSubmitting}
                                    />
                                ))}
                            </div>
                        </div>
                        {errors.involvedTeeth && (
                            <span className="error-message">
                                {errors.involvedTeeth.message as string}
                            </span>
                        )}
                    </div>
                    <div className="form-border-bottom pb-4 mb-3">
                        <FormField<SubmitCaseFormData>
                            id="fixedRestorationOptions"
                            label="Fixed restoration options"
                            as="textarea"
                            rows={5}
                            register={register}
                            errors={errors}
                            isSubmitting={isSubmitting}
                        />
                        <FormField<SubmitCaseFormData>
                            id="fixedSpecificInstructions"
                            label="Specific instructions:"
                            as="textarea"
                            rows={5}
                            register={register}
                            errors={errors}
                            isSubmitting={isSubmitting}
                        />
                    </div>
                    <div className="form-border-bottom pb-4 mb-3">
                        <FormField<SubmitCaseFormData>
                            id="removableRestoration"
                            label="Removable restoration"
                            as="textarea"
                            rows={5}
                            register={register}
                            errors={errors}
                            isSubmitting={isSubmitting}
                        />
                        <FormField<SubmitCaseFormData>
                            id="removableSpecificInstructions"
                            label="Specific instructions:"
                            as="textarea"
                            rows={5}
                            register={register}
                            errors={errors}
                            isSubmitting={isSubmitting}
                        />
                    </div>
                    <div className="form-group form-checkbox-group form-border-bottom pb-4 mb-3">
                        <p className="form-checkbox-group__title">Included</p>
                        <div className="flex flex-wrap">
                            {INCLUDED_OPTIONS.map((item) => (
                                <div key={item.value} className="w-1/2">
                                    <FormCheckbox<SubmitCaseFormData>
                                        id="included"
                                        value={item.value}
                                        label={item.label}
                                        register={register}
                                        errors={errors}
                                        isSubmitting={isSubmitting}
                                    />
                                </div>
                            ))}
                        </div>
                        {errors.included && (
                            <span className="error-message">
                                {errors.included.message as string}
                            </span>
                        )}
                    </div>
                    <div>
                        <FormField<SubmitCaseFormData>
                            id="additionalInstructions"
                            label="Specific instructions:"
                            as="textarea"
                            rows={5}
                            register={register}
                            errors={errors}
                            isSubmitting={isSubmitting}
                        />
                    </div>
                    <div className="submit-case-quote mt-4">
                        **Laboratory liability** Respect U Dental Laboratory is not responsible for errors
                        resulting from clinical techniques, impressions, or improper models provided by the
                        clinician. All work is custom made and non-refundable.
                    </div>
                    {submitMessage && (
                        <div className={`submit-message ${submitMessage.type}`}>
                            {submitMessage.text}
                        </div>
                    )}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <button
                            type="button"
                            onClick={handleDownloadPDF}
                            disabled={isGeneratingPDF || isSubmitting}
                            className="btn-main submit-button w-full sm:w-1/2"
                        >
                            {isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting || isGeneratingPDF}
                            className="btn-main submit-button w-full sm:w-1/2"
                        >
                            {isSubmitting ? 'Sending...' : 'Submit Case'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
