import type {
  Instance,
  CoolifyPrivateKeysBody,
} from 'nuxt-coolify'

import {
  useFetchCoolify,
} from '#imports'

export function useCoolifyPrivateKeys(coolifyInstance: Instance) {
  return {
    list:
      <T>(instance?: Instance) => useFetchCoolify<T>('/api/v1/security/keys', {
        coolifyInstance: instance || coolifyInstance,
      }),
    create:
      <T>(body: CoolifyPrivateKeysBody, instance?: Instance) => useFetchCoolify<T>('/api/v1/security/keys', {
        coolifyInstance: instance || coolifyInstance,
        method: 'POST',
        body,
      }),
    update:
      <T>(body: CoolifyPrivateKeysBody, instance?: Instance) => useFetchCoolify<T>('/api/v1/security/keys', {
        coolifyInstance: instance || coolifyInstance,
        method: 'PATCH',
        body,
      }),
    get:
      <T>(id: string, instance?: Instance) => useFetchCoolify<T>(`/api/v1/security/keys/${id}`, {
        coolifyInstance: instance || coolifyInstance,
      }),
    delete:
      <T>(id: string, instance?: Instance) => useFetchCoolify<T>(`/api/v1/security/keys/${id}`, {
        coolifyInstance: instance || coolifyInstance,
        method: 'DELETE',
      }),
  }
}
