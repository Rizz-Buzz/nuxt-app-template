import { type EventHandlerRequest, type H3Event } from 'h3'
import { FetchError } from 'ofetch'

interface FetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: any
}

interface APIError {
  detail: string | Array<{
    loc: string[]
    msg: string
    type?: string
  }>
}

export default async function (
  event: H3Event<EventHandlerRequest>, 
  path: string,
  options: FetchOptions = { method: 'GET' }
) {
  const runtimeConfig = useRuntimeConfig()
  const kinde = event.context.kinde!
  const token = await kinde.getToken()

  // Get query parameters from the event
  const query = getQuery(event)
  
  // Use options.body if provided, otherwise try to read from event
  let requestBody = options.body
  if (!requestBody && options.method !== 'GET') {
    try {
      requestBody = await readBody(event)
    } catch (e) {
      console.warn('No body found in request')
    }
  }

  try {
    const response = await $fetch(`${runtimeConfig.apiURL}${path}`, {
      method: options.method,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      query,
      body: requestBody
    })
    return response
  } catch (e) {
    const error = e as FetchError
    const apiError = error.data as APIError

    // Handle both string and validation array error formats
    if (apiError?.detail) {
      throw createError({
        statusCode: error.statusCode,
        statusMessage: error.statusMessage,
        message: typeof apiError.detail === 'string' 
          ? apiError.detail 
          : apiError.detail[0]?.msg || error.message,
        data: apiError
      })
    }

    // Fallback error
    throw createError({
      statusCode: error.statusCode,
      statusMessage: error.statusMessage,
      message: error.message,
      data: error.data
    })
  }
}
