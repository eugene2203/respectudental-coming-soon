import { z } from 'zod'

export const contactFormSchema = z.object({
  doctorName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  clinicName: z
      .string()
      .min(2, 'Name must be at least 2 characters')
      .max(100, 'Name must be less than 100 characters'),
  phone: z
      .string()
      .min(2, 'Name must be at least 2 characters')
      .max(100, 'Name must be less than 100 characters'),
  department: z
      .string()
      .min(2, 'Name must be at least 2 characters')
      .max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Invalid email address'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
})

export const orderFormSchema = z.object({
  clientName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  clientPhone: z
    .string()
    .min(10, 'Phone number must be at least 10 characters')
    .max(20, 'Phone number must be less than 20 characters')
    .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/, 'Invalid phone number'),
  clientEmail: z.string().email('Invalid email address'),
  orderDescription: z
    .string()
    .min(20, 'Order description must be at least 20 characters')
    .max(2000, 'Order description must be less than 2000 characters'),
})

export const submitCaseFormSchema = z.object({
  practiceName: z
    .string()
    .min(2, 'Practice name must be at least 2 characters')
    .max(100, 'Practice name must be less than 100 characters'),
  patientName: z
    .string()
    .min(2, 'Patient name must be at least 2 characters')
    .max(100, 'Patient name must be less than 100 characters'),
  rx: z.string().max(200, 'Rx must be less than 200 characters').optional(),
  todayDate: z.string().max(50).optional(),
  returnDate: z.string().max(50).optional(),
  shade: z.string().max(100, 'Shade must be less than 100 characters').optional(),
  involvedTeeth: z.array(z.string()),
  fixedRestorationOptions: z.string().max(2000).optional(),
  fixedSpecificInstructions: z.string().max(2000).optional(),
  removableRestoration: z.string().max(2000).optional(),
  removableSpecificInstructions: z.string().max(2000).optional(),
  included: z.array(z.string()),
  additionalInstructions: z.string().max(2000).optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
export type OrderFormData = z.infer<typeof orderFormSchema>
export type SubmitCaseFormData = z.infer<typeof submitCaseFormSchema>