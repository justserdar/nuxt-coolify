import type {
  Instance,
} from 'nuxt-coolify'

import {
  useFetchCoolify,
} from '#imports'

export function useCoolifyTeams(coolifyInstance?: Instance) {
  return {
    list:
      <T>(instance?: Instance) => useFetchCoolify<T>('/teams', {
        coolifyInstance: instance || coolifyInstance,
      }),
    get:
      <T>(id: string, instance?: Instance) => useFetchCoolify<T>(`/teams/${id}`, {
        coolifyInstance: instance || coolifyInstance,
      }),
    members:
      <T>(id: string, instance?: Instance) => useFetchCoolify<T>(`/teams/${id}/members`, {
        coolifyInstance: instance || coolifyInstance,
      }),
    authenticatedTeam:
      <T>(instance?: Instance) => useFetchCoolify<T>('/teams/current', {
        coolifyInstance: instance || coolifyInstance,
      }),
    authenticatedTeamMembers:
      <T>(instance?: Instance) => useFetchCoolify<T>('/teams/current/members', {
        coolifyInstance: instance || coolifyInstance,
      }),
  }
}
