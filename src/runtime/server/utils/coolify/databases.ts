import type {
  Instance,
} from 'nuxt-coolify'

import {
  useFetchCoolify,
} from '#imports'

export function useCoolifyDatabases(coolifyInstance: Instance) {
  // overloads for create
  // function create (PostgreSQL)
  // function create (Clickhouse)
  // function create (DragonFly)
  // function create (Redis)
  // function create (KeyDB)
  // function create (MariaDB)
  // function create (MySQL)
  // function create (MongoDB)

  return {
    // list,
    // get,
    // delete,
    // update,
    // create,
    // start,
    // stop,
    // restart,
  }
}
