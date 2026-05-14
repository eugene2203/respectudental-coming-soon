export async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  if (!secretKey) {
    console.warn('reCAPTCHA secret key not configured')
    return true // Allow if not configured
  }

  try {
    const response = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${secretKey}&response=${token}`,
      }
    )

    const data = await response.json()

    // Check if verification was successful and score is above threshold
    if (data.success && data.score >= 0.5) {
      return true
    }

    console.warn('reCAPTCHA verification failed:', {
      success: data.success,
      score: data.score,
      errors: data['error-codes'],
    })

    return false
  } catch (error) {
    console.error('reCAPTCHA verification error:', error)
    return false
  }
}
