import type {
  CoolifyPrivateGitHubAppBody,
  CoolifyApplicationsBody,
  CoolifyApplicationsEnvsBody,
  CoolifyApplicationType,
  CoolifyPrivateDeployKeyBody,
  CoolifyDockerfileBody,
  CoolifyDockerImageBody,
  CoolifyDockerComposeBody,
  Instance,
} from 'nuxt-coolify'

import {
  useFetchCoolify,
} from '#imports'

export function useCoolifyApplications(coolifyInstance: Instance) {
  return {
    // list,
    list: () => useFetchCoolify<T>(`/applications`, {
      coolifyInstance: coolifyInstance,
      method: 'GET',
    }),
    // create,
    create: (type: CoolifyApplicationType, body: CoolifyPrivateGitHubAppBody | CoolifyPrivateDeployKeyBody | CoolifyDockerfileBody | CoolifyDockerImageBody | CoolifyDockerComposeBody, instance?: Instance) => useFetchCoolify<T>(`/applications/${type}`, {
      coolifyInstance: instance || coolifyInstance,
      method: 'POST',
      body,
    }),
    // get,
    get: (uuid: string) => useFetchCoolify<T>(`/applications/${uuid}`, {
      coolifyInstance: coolifyInstance,
      method: 'GET',
    }),
    // delete,
    delete: (uuid: string) => useFetchCoolify<T>(`/applications/${uuid}`, {
      coolifyInstance: coolifyInstance,
      method: 'DELETE',
    }),
    // update,
    update: (uuid: string, body: CoolifyApplicationsBody) => useFetchCoolify<T>(`/applications/${uuid}`, {
      coolifyInstance: coolifyInstance,
      method: 'PATCH',
      body,
    }),
    // logs,
    logs: (uuid: string, lines: number) => useFetchCoolify<T>(`/applications/${uuid}/logs`, {
      coolifyInstance: coolifyInstance,
      method: 'GET',
      query: {
        lines,
      },
    }),
    // listEnvs,
    listEnvs: (uuid: string) => useFetchCoolify<T>(`/applications/${uuid}/envs`, {
      coolifyInstance: coolifyInstance,
      method: 'GET',
    }),
    // createEnv,
    createEnv: (uuid: string, body: CoolifyApplicationsEnvsBody) => useFetchCoolify<T>(`/applications/${uuid}/envs`, {
      coolifyInstance: coolifyInstance,
      method: 'POST',
      body,
    }),
    // updateEnv,
    updateEnv: (uuid: string, body: CoolifyApplicationsEnvsBody) => useFetchCoolify<T>(`/applications/${uuid}/envs`, {
      coolifyInstance: coolifyInstance,
      method: 'PATCH',
      body,
    }),
    // updateEnvsBulk,
    updateEnvsBulk: (uuid: string, body: CoolifyApplicationsEnvsBody[]) => useFetchCoolify<T>(`/applications/${uuid}/envs/bulk`, {
      coolifyInstance: coolifyInstance,
      method: 'PATCH',
      body,
    }),
    // deleteEnv,
    deleteEnv: (uuid: string, env_uuid: string) => useFetchCoolify<T>(`/applications/${uuid}/envs/${env_uuid}`, {
      coolifyInstance: coolifyInstance,
      method: 'DELETE',
    }),
    // start,
    start: (uuid: string, force: boolean, instant_deploy: boolean) => useFetchCoolify<T>(`/applications/${uuid}/start`, {
      coolifyInstance: coolifyInstance,
      method: 'GET',
      query: {
        force,
        instant_deploy,
      },
    }),
    // stop,
    stop: (uuid: string) => useFetchCoolify<T>(`/applications/${uuid}/stop`, {
      coolifyInstance: coolifyInstance,
      method: 'GET'
    }),
    // restart,
    restart: (uuid: string) => useFetchCoolify<T>(`/applications/${uuid}/restart`, {
      coolifyInstance: coolifyInstance,
      method: 'GET',
    })
  }
}
