// The following nitropack import is from https://github.com/nuxt/module-builder/issues/141#issuecomment-2078248248
import type {} from 'nitropack'
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
export function useFetchHetzner<
  T = any,
  R extends ResponseType = 'json',
>(
  req: FetchRequest,
  options?: FetchOptions<R>,
): Promise<MappedResponseType<R, T>> {
  const { baseURL, apiToken } = useRuntimeConfig().coolify.providers['hetzner']

  if (!baseURL) {
    consola.error('Missing Hetzner `baseURL`.')
  }
  else if (!baseURL.endsWith('/v1')) {
    consola.error('Invalid Hetzner baseURL, did you add `/v1`?', '\nCurrent baseURL:', baseURL)
  }
  if (!apiToken) {
    consola.error('Missing Hetzner `apiToken`.')
  }

  const hetzner = ofetch.create({
    baseURL,
    onRequest({ options }) {
      options.headers = defu<Headers, HeadersInit[]>(options.headers, {
        'Authorization': `Bearer ${apiToken}`,
        'content-type': 'application/json',
        'Accept': 'application/json',
      })
    },
  })

  return hetzner<T, R>(req, {
    ...options,
  })
}
