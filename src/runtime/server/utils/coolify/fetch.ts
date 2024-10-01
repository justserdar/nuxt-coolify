// The following nitropack import is from https://github.com/nuxt/module-builder/issues/141#issuecomment-2078248248
import type {} from 'nitropack'
import type { RuntimeConfig } from 'nuxt/schema'
import { consola } from 'consola'
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

import { useRuntimeConfig } from '#imports'

// TODO: map each api endpoint and method
export function useFetchCoolify<
  T = any,
  R extends ResponseType = 'json',
>(
  req: FetchRequest,
  options?: FetchOptions<R> & {
    coolifyInstance?: keyof RuntimeConfig['coolify']['instances']
  },
): Promise<MappedResponseType<R, T>> {
  const { coolifyInstance, ...opts } = options || {}
  const { baseURL, apiToken } = useRuntimeConfig().coolify.instances[coolifyInstance || 'default']

  if (!baseURL) {
    consola.error('Missing Coolify `baseURL`.')
  }
  else if (!baseURL.endsWith('/api/v1')) {
    consola.error('Invalid Coolify baseURL, did you add `/api/v1`?', '\nCurrent baseURL:', baseURL)
  }
  if (!apiToken) {
    consola.error('Missing Coolify `apiToken`.')
  }

  const coolify = ofetch.create({
    baseURL,
    onRequest({ options }) {
      options.headers = defu<Headers, HeadersInit[]>(options.headers, {
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
