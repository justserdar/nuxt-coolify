import type {
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
