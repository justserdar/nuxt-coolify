import type {
  Instance,
  CoolifyProjectsBody,
} from 'nuxt-coolify'

import {
  useFetchCoolify,
} from '#imports'

export function useCoolifyProjects(coolifyInstance: Instance) {
  return {
    list:
      <T>(instance?: Instance) => useFetchCoolify<T>('/api/v1/projects', {
        coolifyInstance: instance || coolifyInstance,
      }),
    create:
      <T>(body: CoolifyProjectsBody, instance?: Instance) => useFetchCoolify<T>('/api/v1/projects', {
        coolifyInstance: instance || coolifyInstance,
        method: 'POST',
        body,
      }),
    get:
      <T>(id: string, instance?: Instance) => useFetchCoolify<T>(`/api/v1/projects/${id}`, {
        coolifyInstance: instance || coolifyInstance,
      }),
    delete:
      <T>(id: string, instance?: Instance) => useFetchCoolify<T>(`/api/v1/projects/${id}`, {
        coolifyInstance: instance || coolifyInstance,
        method: 'DELETE',
      }),
    update:
      <T>(id: string, body: CoolifyProjectsBody, instance?: Instance) => useFetchCoolify<T>(`/api/v1/projects/${id}`, {
        coolifyInstance: instance || coolifyInstance,
        method: 'PATCH',
        body,
      }),
    environment:
      <T>(id: string, environment_name: string, instance?: Instance) => useFetchCoolify<T>(`/api/v1/projects/${id}/${environment_name}`, {
        coolifyInstance: instance || coolifyInstance,
      }),
  }
}
