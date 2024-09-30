// The following nitropack import is from https://github.com/nuxt/module-builder/issues/141#issuecomment-2078248248
import type {} from 'nitropack'
import type { RuntimeConfig } from '@nuxt/schema'
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
export function useFetchCoolify<
  T = any,
  R extends ResponseType = 'json',
>(
  req: FetchRequest,
  options?: FetchOptions<R> & {
    coolifyInstance: keyof RuntimeConfig['coolify']['instances']
  },
): Promise<MappedResponseType<R, T>> {
  const { coolifyInstance, ...opts } = options || {}
  const { baseURL, apiToken } = useRuntimeConfig().coolify.instances[coolifyInstance || 'default']

  if (!baseURL) {
    createError({
      statusCode: 500,
      message: 'Missing Coolify baseURL',
    })
  }
  if (!apiToken) {
    createError({
      statusCode: 500,
      message: 'Missing Coolify apiToken',
    })
  }

  const coolify = ofetch.create({
    baseURL,
    onRequest({ options: { headers } }) {
      headers ||= {}
      headers = defu<Headers, HeadersInit[]>(headers, {
        'Authorization': `Bearer ${apiToken}`,
        'content-type': 'application/json',
        'Accept': 'application/json',
      })
    },
  })

  return coolify<T, R>(req, {
    ...opts,
  })
}
