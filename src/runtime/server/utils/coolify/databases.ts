import type {
  Instance,
  CoolifyDatabaseType,
  CoolifyCreatePostgressDatabaseBody,
  CoolifyCreateClickhouseDatabaseBody,
  CoolifyCreateDragonflyDatabaseBody,
  CoolifyCreateRedisDatabaseBody,
  CoolifyCreateKeydbDatabaseBody,
  CoolifyCreateMariaDBDatabaseBody,
  CoolifyCreateMySQLDatabaseBody,
  CoolifyCreateMongoDBDatabaseBody,
  CoolifyUpdateDatabaseBody,
} from 'nuxt-coolify'

import {
  useFetchCoolify,
} from '#imports'

export function useCoolifyDatabases(coolifyInstance: Instance) {
  return {
    // list,
    list: () => useFetchCoolify<T>(`/databases`, {
      coolifyInstance: coolifyInstance,
      method: 'GET',
    }),
    // get,
    get: (uuid: string) => useFetchCoolify<T>(`/databases/${uuid}`, {
      coolifyInstance: coolifyInstance,
      method: 'GET',
    }),
    // delete,  
    delete: (uuid: string, delete_configurations: boolean, delete_volumes: boolean, docker_cleanup: boolean, delete_connected_networks: boolean) => useFetchCoolify<T>(`/databases/${uuid}`, {
      coolifyInstance: coolifyInstance,
      method: 'DELETE',
      query: {
        delete_configurations,
        delete_volumes,
        docker_cleanup,
        delete_connected_networks,
      },
    }),
    // update,
    update: (db_uuid: string, body: CoolifyUpdateDatabaseBody) => useFetchCoolify<T>(`/databases/${db_uuid}`, {
      coolifyInstance: coolifyInstance,
      method: 'PATCH',
      body,
    }),
    // create,
    create: (type: CoolifyDatabaseType, body: CoolifyCreatePostgressDatabaseBody | CoolifyCreateClickhouseDatabaseBody | CoolifyCreateDragonflyDatabaseBody | CoolifyCreateRedisDatabaseBody | CoolifyCreateKeydbDatabaseBody | CoolifyCreateMariaDBDatabaseBody | CoolifyCreateMySQLDatabaseBody | CoolifyCreateMongoDBDatabaseBody) => useFetchCoolify<T>(`/databases/${type}`, {
      coolifyInstance: coolifyInstance,
      method: 'POST',
      body,
    }),
    // start,
    start: (db_uuid: string) => useFetchCoolify<T>(`/databases/${db_uuid}/start`, {
      coolifyInstance: coolifyInstance,
      method: 'GET',
    }),
    // stop,
    stop: (db_uuid: string) => useFetchCoolify<T>(`/databases/${db_uuid}/stop`, {
      coolifyInstance: coolifyInstance,
      method: 'GET',
    }),
    // restart,
    restart: (db_uuid: string) => useFetchCoolify<T>(`/databases/${db_uuid}/restart`, {
      coolifyInstance: coolifyInstance,
      method: 'GET',
    })
  }
}
