import type { Instance } from 'nuxt-coolify'

import {
  useFetchCoolify,
  useRuntimeConfig,
} from '#imports'

export function useCoolify(coolifyInstance?: Instance) {
  function instances<T>(instance?: Instance) {
    if (instance || coolifyInstance) {
      return useFetchCoolify<T>('/servers', { coolifyInstance: instance || coolifyInstance })
    }

    const { instances } = useRuntimeConfig().coolify
    return Promise.all(
      Object.entries(instances).map(async ([key, _]) => {
        return {
          [key]: (await useFetchCoolify<T>('/servers', { coolifyInstance: (key as keyof typeof instances) })),
        }
      }),
    )
  }

  function healthcheck<T>(instance?: Instance) {
    if (instance || coolifyInstance) {
      return useFetchCoolify<T>('/healthcheck', { coolifyInstance: instance || coolifyInstance })
    }

    const { instances } = useRuntimeConfig().coolify
    return Promise.all(
      Object.entries(instances).map(async ([key, _]) => {
        return {
          [key]: (await useFetchCoolify<T>('/healthcheck', { coolifyInstance: (key as keyof typeof instances) })),
        }
      }),
    )
  }

  function version<T>(instance?: Instance) {
    if (instance || coolifyInstance) {
      return useFetchCoolify<T>('/version', { coolifyInstance: instance || coolifyInstance })
    }

    const { instances } = useRuntimeConfig().coolify
    return Promise.all(
      Object.entries(instances).map(async ([key, _]) => {
        return {
          [key]: (await useFetchCoolify<T>('/version', { coolifyInstance: (key as keyof typeof instances) })),
        }
      }),
    )
  }

  return {
    instances,
    version,
    healthcheck,
    enableAPI:
      <T>(instance?: Instance) => useFetchCoolify<T>('/enable', { coolifyInstance: instance || coolifyInstance }),
    disableAPI:
      <T>(instance?: Instance) => useFetchCoolify<T>('/disable', { coolifyInstance: instance || coolifyInstance }),
  }
}
