// The following nitropack import is from https://github.com/nuxt/module-builder/issues/141#issuecomment-2078248248
import type {} from 'nitropack'
import { defu } from 'defu'
import type {
  FetchRequest,
  FetchOptions,
  MappedResponseType,
  ResponseType,
} from 'ofetch'
import {
  ofetch,
} from 'ofetch'

import { createError, useRuntimeConfig } from '#imports'

// TODO: map each api endpoint and method
export function useFetchHetzner<
  T = any,
  R extends ResponseType = 'json',
>(
  req: FetchRequest,
  options?: FetchOptions<R>,
): Promise<MappedResponseType<R, T>> {
  const { baseURL, apiToken } = useRuntimeConfig().coolify.providers['hetzner']

  if (!baseURL) {
    createError({
      statusCode: 500,
      message: 'Missing hetzner baseURL',
    })
  }
  if (!apiToken) {
    createError({
      statusCode: 500,
      message: 'Missing hetzner apiToken',
    })
  }

  console.info('hetzner info:', baseURL, apiToken)

  const hetzner = ofetch.create({
    baseURL,
    onRequest({ options }) {
      options.headers ||= {}
      options.headers = defu<Headers, HeadersInit[]>(options.headers, {
        'Authorization': `Bearer ${apiToken}`,
        'content-type': 'application/json',
        'Accept': 'application/json',
      })
      console.info('headers:', JSON.stringify(options.headers, null, 2))
    },
  })

  return hetzner<T, R>(req, {
    ...options,
  })
}
