import { RateLimiterMemory } from 'rate-limiter-flexible'

const maxRequests = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '1', 10)
const windowMs = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '1000', 10)

export const contactFormLimiter = new RateLimiterMemory({
  points: maxRequests,
  duration: Math.ceil(windowMs / 1000),
})

export const orderFormLimiter = new RateLimiterMemory({
  points: maxRequests,
  duration: Math.ceil(windowMs / 1000),
})

export async function checkRateLimit(
  limiter: RateLimiterMemory,
  key: string
): Promise<{ success: boolean; error?: string }> {
  try {
    await limiter.consume(key)
    return { success: true }
  } catch (error) {
    return {
      success: false,
      error: 'Too many requests. Please try again later.',
    }
  }
}
