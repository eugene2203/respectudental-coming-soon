export interface ContactSubmission {
  id: string
  doctorName: string
  clinicName: string
  email: string
  phone: string
  department: string
  message: string
  ipAddress?: string | null
  userAgent?: string | null
  createdAt: Date
}

export interface ContactFormValues {
  doctorName: string;
  clinicName: string;
  phone: string;
  department: string;
  email: string;
  message: string;
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

export interface ParentPage {
  link: string;
  cap: string;
}

export interface BreadCrumbsProps {
  parentPages?: ParentPage[];
  page: string;
}

export interface MenuItem {
  name: string;
  link: string;
}

export interface SocialItem {
  icon: string;
  link: string;
}