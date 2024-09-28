import type { RuntimeConfig } from '@nuxt/schema'
import {
  type Resolver,
  addServerHandler,
} from '@nuxt/kit'

export function addCoolifyServerHandlers(resolver: Resolver, moduleOptions: RuntimeConfig['coolify']) {
  const route = `/api/${moduleOptions.routeVersionAlias}/${moduleOptions.routeAlias}`
  const runtimeRoute = './runtime/server/api/_v1/_coolify'

  const coolifyServerHandlers = {
    authorisation: {
      healthcheck: {
        route: `${route}/authorisation/healthcheck`,
        handler: `${runtimeRoute}/authorisation/healthcheck.get`,
      },
      enable: {
        route: `${route}/authorisation/enable`,
        handler: `${runtimeRoute}/authorisation/enable.get`,
      },
      disable: {
        route: `${route}/authorisation/disable`,
        handler: `${runtimeRoute}/authorisation/disable.get`,
      },
      version: {
        route: `${route}/authorisation/version`,
        handler: `${runtimeRoute}/authorisation/version.get`,
      },
    },
    projects: {
      create: {
        route: `${route}/projects/create`,
        handler: `${runtimeRoute}/projects/create.post`,
      },
      list: {
        route: `${route}/projects/list`,
        handler: `${runtimeRoute}/projects/list.get`,
      },
      get: {
        route: `${route}/projects/:uuid`,
        handler: `${runtimeRoute}/projects/[uuid]/index.get`,
      },
      delete: {
        route: `${route}/projects/:uuid/delete`,
        handler: `${runtimeRoute}/projects/[uuid]/delete.get`,
      },
      update: {
        route: `${route}/projects/:uuid/update`,
        handler: `${runtimeRoute}/projects/[uuid]/update.post`,
      },
      project_environment: {
        route: `${route}/projects/:uuid/:environment_name`,
        handler: `${runtimeRoute}/projects/[uuid]/[environment_name]/index.get`,
      },
    },
    servers: {
      create: {
        route: `${route}/servers/create`,
        handler: `${runtimeRoute}/servers/create.post`,
      },
      list: {
        route: `${route}/servers/list`,
        handler: `${runtimeRoute}/servers/list.get`,
      },
      get: {
        route: `${route}/servers/:uuid`,
        handler: `${runtimeRoute}/servers/[uuid]/index.get`,
      },
      delete: {
        route: `${route}/servers/:uuid/delete`,
        handler: `${runtimeRoute}/projects/[uuid]/delete.get`,
      },
      update: {
        route: `${route}/servers/:uuid/update`,
        handler: `${runtimeRoute}/servers/[uuid]/update.post`,
      },
      domains: {
        route: `${route}/servers/:uuid/domains`,
        handler: `${runtimeRoute}/servers/[uuid]/domains.get`,
      },
      resources: {
        route: `${route}/servers/:uuid/resources`,
        handler: `${runtimeRoute}/servers/[uuid]/resources.get`,
      },
      validate: {
        route: `${route}/servers/:uuid/validate`,
        handler: `${runtimeRoute}/servers/[uuid]/validate.get`,
      },
    },
    deploy: {
      create: {
        route: `${route}/deploy`,
        handler: `${runtimeRoute}/deploy/index.post`,
      },
    },
    deployments: {
      get: {
        route: `${route}/deployments/:uuid`,
        handler: `${runtimeRoute}/deployments/[uuid]/index.get`,
      },
      list: {
        route: `${route}/deployments`,
        handler: `${runtimeRoute}/deployments/list.get`,
      },
    },
    services: {
      create: {
        route: `${route}/services/create`,
        handler: `${runtimeRoute}/servers/create.post`,
      },
      list: {
        route: `${route}/services/list`,
        handler: `${runtimeRoute}/servers/list.get`,
      },
      get: {
        route: `${route}/services/:uuid`,
        handler: `${runtimeRoute}/services/[uuid]/index.get`,
      },
      delete: {
        route: `${route}/services/:uuid/delete`,
        handler: `${runtimeRoute}/services/[uuid]/delete.get`,
      },
      start: {
        route: `${route}/services/:uuid/start`,
        handler: `${runtimeRoute}/services/[uuid]/start.get`,
      },
      stop: {
        route: `${route}/services/:uuid/stop`,
        handler: `${runtimeRoute}/services/[uuid]/stop.get`,
      },
      restart: {
        route: `${route}/services/:uuid/restart`,
        handler: `${runtimeRoute}/services/[uuid]/restart.get`,
      },
    },
    teams: {
      list: {
        route: `${route}/teams/list`,
        handler: `${runtimeRoute}/teams/list.get`,
      },
      get: {
        route: `${route}/teams/:id`,
        handler: `${runtimeRoute}/teams/[id]/index.get`,
      },
      members: {
        route: `${route}/teams/:id/members`,
        handler: `${runtimeRoute}/teams/[id]/members.get`,
      },
      activeTeam: {
        route: `${route}/teams/current`,
        handler: `${runtimeRoute}/teams/current/index.get`,
      },
      activeTeamMembers: {
        route: `${route}/teams/current/members`,
        handler: `${runtimeRoute}/teams/current/members.get`,
      },
    },
    instances: {
      list: {
        route: `${route}/instances`,
        handler: `${runtimeRoute}/instances/index.get`,
      },
    },
    resources: {
      list: {
        route: `${route}/resources/list`,
        handler: `${runtimeRoute}/resources/list.get`,
      },
    },
  }

  Object.entries(coolifyServerHandlers).flatMap(([_key, value]) =>
    Object.entries(value).map(([_subKey, subValue]) => {
      const { route, handler } = subValue
      return addServerHandler({
        route: route,
        handler: resolver.resolve(handler),
      })
    }),
  )
}

export default addCoolifyServerHandlers
