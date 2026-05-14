'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

export function useRecaptcha() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  useEffect(() => {
    if (!siteKey) return

    // Load reCAPTCHA script
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
    script.async = true
    script.defer = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      document.head.removeChild(script)
    }
  }, [siteKey])

  const executeRecaptcha = async (action: string): Promise<string | null> => {
    if (!siteKey) {
      console.warn('reCAPTCHA site key not configured')
      return null
    }

    try {
      return await new Promise((resolve) => {
        window.grecaptcha.ready(async () => {
          const token = await window.grecaptcha.execute(siteKey, { action })
          resolve(token)
        })
      })
    } catch (error) {
      console.error('reCAPTCHA execution error:', error)
      return null
    }
  }

  return { executeRecaptcha }
}