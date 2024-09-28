import type { RuntimeConfig } from '@nuxt/schema'
import { consola } from 'consola'
import {
  type Resolver,
  addServerHandler,
  addImports,
} from '@nuxt/kit'

export function addHetznerServerHandlers(resolver: Resolver, moduleOptions: RuntimeConfig['coolify']) {
  if (!moduleOptions.providers['hetzner'].apiToken) {
    consola.warn(`Missing a valid API Token for Hetzner, skipping initialization.`)
    return
  }

  const providerRoute = `/api/${moduleOptions.routeVersionAlias}/_hetzner`
  const providerRuntimeRoute = `./runtime/server/api/${moduleOptions.routeVersionAlias}/_hetzner`

  const hetznerServerHandlers = {
    servers: {
      all: {
        route: `${providerRoute}/servers`,
        handler: `${providerRuntimeRoute}/servers/index.get`,
      },
      create: {
        route: `${providerRoute}/servers/:id`,
        handler: `${providerRuntimeRoute}/servers/create.post`,
      },
      delete: {
        route: `${providerRoute}/servers/:id/delete`,
        handler: `${providerRuntimeRoute}/servers/[id]/delete.get`,
      },
      get: {
        route: `${providerRoute}/servers/:id`,
        handler: `${providerRuntimeRoute}/servers/[id]/index.get`,
      },
      update: {
        route: `${providerRoute}/servers/:id/update`,
        handler: `${providerRuntimeRoute}/servers/[id]/update.post`,
      },
      metrics: {
        route: `${providerRoute}/servers/:id/metrics`,
        handler: `${providerRuntimeRoute}/servers/[id]/metrics.get`,
      },
      allServerActions: {
        route: `${providerRoute}/servers/actions`,
        handler: `${providerRuntimeRoute}/servers/actions/index.get`,
      },
      getServerAction: {
        route: `${providerRoute}/servers/actions/:id`,
        handler: `${providerRuntimeRoute}/servers/actions/[id]/index.get`,
      },
      getServerActionByActionId: {
        route: `${providerRoute}/servers/:id/actions/:actionId`,
        handler: `${providerRuntimeRoute}/servers/[id]/actions/[actionId]/index.get`,
      },
      commandServer: {
        route: `${providerRoute}/servers/:id/actions/commands/:action`,
        handler: `${providerRuntimeRoute}/servers/[id]/actions/commands/[action].post`,
      },
      requestServerConsole: {
        route: `${providerRoute}/servers/:id/actions/console`,
        handler: `${providerRuntimeRoute}/servers/[id]/actions/console.post`,
      },
      getLocations: {
        route: `${providerRoute}/locations`,
        handler: `${providerRuntimeRoute}/locations/index.get`,
      },
      getLocation: {
        route: `${providerRoute}/locations/:id`,
        handler: `${providerRuntimeRoute}/locations/[id]/index.get`,
      },
      getDatacenters: {
        route: `${providerRoute}/datacenters`,
        handler: `${providerRuntimeRoute}/datacenters/index.get`,
      },
      getDatacenter: {
        route: `${providerRoute}/datacenters/:id`,
        handler: `${providerRuntimeRoute}/datacenters/[id]/index.get`,
      },
      getServerTypes: {
        route: `${providerRoute}/servers/types`,
        handler: `${providerRuntimeRoute}/servers/index.get`,
      },
      getServerType: {
        route: `${providerRoute}/servers/types/:id`,
        handler: `${providerRuntimeRoute}/servers/types/[id]/index.get`,
      },
    },
  }

  addImports({
    name: 'useHetzner',
    as: 'useHetzner',
    from: resolver.resolve('./runtime/composables/useHetzner'),
  })
  addServerHandler({
    middleware: true,
    handler: resolver.resolve('./runtime/server/middleware/hetzner'),
  })

  Object.entries(hetznerServerHandlers).flatMap(([_key, value]) =>
    Object.entries(value).map(([_subKey, subValue]) => {
      const { route, handler } = subValue
      return addServerHandler({
        route: route,
        handler: resolver.resolve(handler),
      })
    }),
  )
}

export default addHetznerServerHandlers
