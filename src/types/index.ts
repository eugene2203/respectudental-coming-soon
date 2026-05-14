export interface ContactSubmission {
  id: string
  fullName: string
  email: string
  message: string
  ipAddress?: string | null
  userAgent?: string | null
  createdAt: Date
}

export interface OrderSubmission {
  id: string
  clientName: string
  clientPhone: string
  clientEmail: string
  orderDescription: string
  pdfPath?: string | null
  ipAddress?: string | null
  userAgent?: string | null
  emailSent: boolean
  createdAt: Date
}

export interface FormResponse {
  success: boolean
  message: string
  error?: string
}