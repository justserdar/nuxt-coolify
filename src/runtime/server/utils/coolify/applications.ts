import type {
  CoolifyPrivateGitHubAppBody,
  Instance,
} from 'nuxt-coolify'

import {
  useFetchCoolify,
} from '#imports'

export function useCoolifyApplications(coolifyInstance: Instance) {
  // overloads for create
  // function create (Public)
  // function create (Private - GH App)
  // function create (Private - Deploy Key)
  // function create (Dockerfile)
  // function create (Docker Image)
  // function create (Docker Compose)

  return {
    create:
    <T>(body, instance?: Instance, type: 'private-github-app' | 'dockerfile' | 'docker-image' = 'private-github-app') => useFetchCoolify<T>(`/applications/${type}`, {
      coolifyInstance: instance || coolifyInstance,
      method: 'POST',
      body,
    }),
    // list,
    // create,
    // get,
    // delete,
    // update,
    // listEnvs,
    // createEnv,
    // updateEnv,
    // updateEnvsBulk,
    // deleteEnv,
    // start,
    // stop,
    // restart,
    // executeCommand,
  }
}
