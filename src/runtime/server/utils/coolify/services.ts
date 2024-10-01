import type {
  Instance,
  CoolifyServicesBody,
  CoolifyServicesEnvBody,
} from 'nuxt-coolify'

import {
  useFetchCoolify,
} from '#imports'

export function useCoolifyServices(coolifyInstance?: Instance) {
  return {
    list:
      <T>(instance?: Instance) => useFetchCoolify<T>('/api/v1/services', {
        coolifyInstance: instance || coolifyInstance,
      }),
    create:
      <T>(body: CoolifyServicesBody, instance?: Instance) => useFetchCoolify<T>('/api/v1/services', {
        coolifyInstance: instance || coolifyInstance,
        method: 'POST',
        body,
      }),
    get:
      <T>(id: string, instance?: Instance) => useFetchCoolify<T>(`/api/v1/services/${id}`, {
        coolifyInstance: instance || coolifyInstance,
      }),
    delete:
      <T>(id: string, instance?: Instance) => useFetchCoolify<T>(`/api/v1/services/${id}`, {
        coolifyInstance: instance || coolifyInstance,
        method: 'DELETE',
      }),
    listEnvs:
      <T>(id: string, instance?: Instance) => useFetchCoolify<T>(`/api/v1/services/${id}/envs`, {
        coolifyInstance: instance || coolifyInstance,
      }),
    createEnv:
      <T>(id: string, body: CoolifyServicesEnvBody, instance?: Instance) => useFetchCoolify<T>(`/api/v1/services/${id}/envs`, {
        coolifyInstance: instance || coolifyInstance,
        method: 'POST',
        body,
      }),
    updateEnv:
      <T>(id: string, body: CoolifyServicesEnvBody, instance?: Instance) => useFetchCoolify<T>(`/api/v1/services/${id}/envs`, {
        coolifyInstance: instance || coolifyInstance,
        method: 'PATCH',
        body,
      }),
    updateEnvsBulk:
      <T>(id: string, data: CoolifyServicesEnvBody[], instance?: Instance) => useFetchCoolify<T>(`/api/v1/services/${id}/envs`, {
        coolifyInstance: instance || coolifyInstance,
        method: 'PATCH',
        body: { data },
      }),
    deleteEnv:
      <T>(id: string, env_uuid: string, instance?: Instance) => useFetchCoolify<T>(`/api/v1/services/${id}/envs/${env_uuid}`, {
        coolifyInstance: instance || coolifyInstance,
      }),
    start:
      <T>(id: string, instance?: Instance) => useFetchCoolify<T>(`/api/v1/services/${id}/start`, {
        coolifyInstance: instance || coolifyInstance,
      }),
    stop:
      <T>(id: string, instance?: Instance) => useFetchCoolify<T>(`/api/v1/services/${id}/stop`, {
        coolifyInstance: instance || coolifyInstance,
      }),
    restart:
      <T>(id: string, instance?: Instance) => useFetchCoolify<T>(`/api/v1/services/${id}/restart`, {
        coolifyInstance: instance || coolifyInstance,
      }),
  }
}
