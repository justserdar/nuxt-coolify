// Default Error Handler for Hetzner API endpoints
import type { H3Event } from 'h3'
import { getMappedError } from '../ErrorMapper'
import { sendError, createError } from '#imports'

export default async function sendDefaultErrorResponse(event: H3Event, errorType: string, statusCode: number, error: string) {
  const parsedErrors = getMappedError(errorType, error)
  return sendError(event, createError({ statusCode: statusCode, statusMessage: 'Invalid Data Provided', data: parsedErrors }))
}
