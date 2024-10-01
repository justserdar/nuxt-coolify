import type { Instance } from 'nuxt-coolify'

import {
  useFetchCoolify,
  useRuntimeConfig,
} from '#imports'

export function useCoolify(coolifyInstance?: Instance) {
  function instances<T>(instance?: Instance) {
    if (instance || coolifyInstance) {
      return useFetchCoolify<T>('/api/v1/servers', { coolifyInstance: instance || coolifyInstance })
    }

    const { instances } = useRuntimeConfig().coolify
    return Promise.all(
      Object.entries(instances).map(async ([key, _]) => {
        return {
          [key]: (await useFetchCoolify<T>('/api/v1/servers', { coolifyInstance: (key as keyof typeof instances) })),
        }
      }),
    )
  }

  function healthcheck<T>(instance?: Instance) {
    if (instance || coolifyInstance) {
      return useFetchCoolify<T>('/api/v1/healthcheck', { coolifyInstance: instance || coolifyInstance })
    }

    const { instances } = useRuntimeConfig().coolify
    return Promise.all(
      Object.entries(instances).map(async ([key, _]) => {
        return {
          [key]: (await useFetchCoolify<T>('/api/v1/healthcheck', { coolifyInstance: (key as keyof typeof instances) })),
        }
      }),
    )
  }

  function version<T>(instance?: Instance) {
    if (instance || coolifyInstance) {
      return useFetchCoolify<T>('/api/v1/version', { coolifyInstance: instance || coolifyInstance })
    }

    const { instances } = useRuntimeConfig().coolify
    return Promise.all(
      Object.entries(instances).map(async ([key, _]) => {
        return {
          [key]: (await useFetchCoolify<T>('/api/v1/version', { coolifyInstance: (key as keyof typeof instances) })),
        }
      }),
    )
  }

  return {
    instances,
    version,
    healthcheck,
    enableAPI:
      <T>(instance?: Instance) => useFetchCoolify<T>('/api/v1/enable', { coolifyInstance: instance || coolifyInstance }),
    disableAPI:
      <T>(instance?: Instance) => useFetchCoolify<T>('/api/v1/disable', { coolifyInstance: instance || coolifyInstance }),
  }
}
