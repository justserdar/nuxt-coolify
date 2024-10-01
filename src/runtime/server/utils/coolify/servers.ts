import type {
  CoolifyServersBody,
  Instance,
} from 'nuxt-coolify'

import {
  useFetchCoolify,
} from '#imports'

export function useCoolifyServers(coolifyInstance?: Instance) {
  return {
    list:
      <T>(instance?: Instance) => useFetchCoolify<T>('/api/v1/servers', {
        coolifyInstance: instance || coolifyInstance,
      }),
    create:
      <T>(body: CoolifyServersBody, instance?: Instance) => useFetchCoolify<T>('/api/v1/servers', {
        coolifyInstance: instance || coolifyInstance,
        method: 'POST',
        body,
      }),
    get:
      <T>(id: string, instance?: Instance) => useFetchCoolify<T>(`/api/v1/servers/${id}`, {
        coolifyInstance: instance || coolifyInstance,
      }),
    delete:
      <T>(id: string, instance?: Instance) => useFetchCoolify<T>(`/api/v1/servers/${id}`, {
        coolifyInstance: instance || coolifyInstance,
      }),
    update:
      <T>(id: string, body: Partial<CoolifyServersBody>, instance?: Instance) => useFetchCoolify<T>(`/api/v1/servers/${id}`, {
        coolifyInstance: instance || coolifyInstance,
        method: 'PATCH',
        body,
      }),
    resources:
      <T>(id: string, instance?: Instance) => useFetchCoolify<T>(`/api/v1/servers/${id}/resources`, {
        coolifyInstance: instance || coolifyInstance,
      }),
    domains:
      <T>(id: string, instance?: Instance) => useFetchCoolify<T>(`/api/v1/servers/${id}/domains`, {
        coolifyInstance: instance || coolifyInstance,
      }),
    validate:
      <T>(id: string, instance?: Instance) => useFetchCoolify<T>(`/api/v1/servers/${id}/validate`, {
        coolifyInstance: instance || coolifyInstance,
      }),
  }
}
