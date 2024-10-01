import type {
  Instance,
} from 'nuxt-coolify'

import {
  useFetchCoolify,
} from '#imports'

export function useCoolifyResources(coolifyInstance?: Instance) {
  return {
    list:
      <T>(instance?: Instance) => useFetchCoolify<T>('/resources', {
        coolifyInstance: instance || coolifyInstance,
      }),
    // createResource,
    // deleteResource,
    // disableResource,
  }
}
