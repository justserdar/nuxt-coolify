import type {
  Instance,
} from 'nuxt-coolify'

import {
  useFetchCoolify,
} from '#imports'

export function useCoolifyTeams(coolifyInstance?: Instance) {
  return {
    list:
      <T>(instance?: Instance) => useFetchCoolify<T>('/api/v1/teams', {
        coolifyInstance: instance || coolifyInstance,
      }),
    get:
      <T>(id: string, instance?: Instance) => useFetchCoolify<T>(`/api/v1/teams/${id}`, {
        coolifyInstance: instance || coolifyInstance,
      }),
    members:
      <T>(id: string, instance?: Instance) => useFetchCoolify<T>(`/api/v1/teams/${id}/members`, {
        coolifyInstance: instance || coolifyInstance,
      }),
    authenticatedTeam:
      <T>(instance?: Instance) => useFetchCoolify<T>('/api/v1/teams/current', {
        coolifyInstance: instance || coolifyInstance,
      }),
    authenticatedTeamMembers:
      <T>(instance?: Instance) => useFetchCoolify<T>('/api/v1/teams/current/members', {
        coolifyInstance: instance || coolifyInstance,
      }),
  }
}
