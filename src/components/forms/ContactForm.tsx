'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'
import { submitContactForm } from '@/actions/contact'
import React, { useState } from 'react'
import { useRecaptcha } from '@/lib/hooks/useRecaptcha'
import FormField from "@/components/common/FormField";
import FormDropdown, { type FormDropdownOption } from "@/components/common/FormDropdown";
import {ContactFormValues} from "@/types";

const departmentOptions: FormDropdownOption[] = [
    { name: 'Crown & Bridge Department', value: 'crown-bridge' },
    { name: 'Removable Department', value: 'removable' },
    { name: 'Billing & Logistics Department', value: 'billing-logistics' },
]

export default function ContactForm() {
    const { executeRecaptcha } = useRecaptcha();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<{
        type: 'success' | 'error'
        text: string
    } | null>(null);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSubmitMessage(null);

        try {
            // Execute reCAPTCHA
            const recaptchaToken = await executeRecaptcha('contact_form');
            const result = await submitContactForm(data, recaptchaToken);

            if (result.success) {
                setSubmitMessage({ type: 'success', text: result.message });
                reset();
            } else {
                setSubmitMessage({
                    type: 'error',
                    text: result.error || 'Something went wrong',
                });
            }
        } catch (error) {
            setSubmitMessage({
                type: 'error',
                text: 'Failed to submit form. Please try again.',
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <div className="xl:flex gap-2 mb-4">
                <div className="xl:w-1/2">
                    <FormField<ContactFormValues>
                        id="doctorName"
                        label="Doctor's Name"
                        register={register}
                        errors={errors}
                        isSubmitting={isSubmitting}
                    />
                </div>
                <div className="xl:w-1/2 mb-4">
                    <FormField<ContactFormValues>
                        id="clinicName"
                        label="Clinic Name"
                        register={register}
                        errors={errors}
                        isSubmitting={isSubmitting}
                    />
                </div>
            </div>
            <div className="xl:flex gap-2 mb-4">
                <div className="xl:w-1/2">
                    <FormField<ContactFormValues>
                        id="email"
                        type="email"
                        label="Email Address"
                        register={register}
                        errors={errors}
                        isSubmitting={isSubmitting}
                    />
                </div>
                <div className="xl:w-1/2">
                    <FormField<ContactFormValues>
                        id="phone"
                        label="Phone Number"
                        register={register}
                        errors={errors}
                        isSubmitting={isSubmitting}
                    />
                </div>
            </div>
            <div className="mb-4">
                <FormDropdown items={departmentOptions}
                              onChange={(item) => {
                                  setValue('department', item.name, {shouldValidate: true})
                              }}
                >
                    <FormField<ContactFormValues>
                        id="department"
                        label="Select Department"
                        placeholder={`General Inquiries / New Partner`}
                        register={register}
                        errors={errors}
                        isSubmitting={isSubmitting}
                        readOnly
                    />
                </FormDropdown>
            </div>
            <FormField<ContactFormValues>
                id="message"
                label="Your Message"
                as="textarea"
                rows={5}
                register={register}
                errors={errors}
                isSubmitting={isSubmitting}
            />
            {submitMessage && (
                <div className={`submit-message ${submitMessage.type}`}>
                    {submitMessage.text}
                </div>
            )}
            <button type="submit" disabled={isSubmitting} className="btn-main submit-button w-full mt-4">
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    )
}