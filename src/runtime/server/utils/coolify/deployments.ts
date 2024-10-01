import type {
  Instance,
  CoolifyDeploymentsQuery,
} from 'nuxt-coolify'

import {
  useFetchCoolify,
} from '#imports'

export function useCoolifyDeployments(coolifyInstance?: Instance) {
  return {
    list:
      <T>(instance?: Instance) => useFetchCoolify<T>('/api/v1/deployments', {
        coolifyInstance: instance || coolifyInstance,
      }),
    get:
      <T>(id: string, instance?: Instance) => useFetchCoolify<T>(`/api/v1/deployments/${id}`, {
        coolifyInstance: instance || coolifyInstance,
      }),
    deploy:
      <T>(query: CoolifyDeploymentsQuery, instance?: Instance) => useFetchCoolify<T>('/api/v1/deploy', {
        coolifyInstance: instance || coolifyInstance,
        query,
      }),
  }
}
