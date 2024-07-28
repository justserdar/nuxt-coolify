/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  defineNuxtModule,
  createResolver,
  addImportsDir,
  addImports,
  addServerHandler,
} from '@nuxt/kit'
import { defu } from 'defu'

// Module options TypeScript interface definition
export interface ModuleOptions {
  instances: {
    [key: string]: { apiToken: string, baseUrl: string }
  }
  routeAlias?: string
  routeVersionAlias?: string
  enableProviders?: boolean
  providers?: {
    [key: string]: { apiToken: string, baseUrl: string }
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-coolify',
    configKey: 'coolify',
  },
  defaults: {
    instances: {
      default: {
        baseUrl: process.env.COOLIFY_BASE_API_URL || 'missing',
        apiToken: process.env.COOLIFY_API_TOKEN || 'missing',
      },
    },
    routeAlias: '_coolify',
    routeVersionAlias: '_v1',
    enableProviders: false,
    providers: {
      hetzner: {
        apiToken: process.env.HETZNER_API_TOKEN || 'missing',
        baseUrl: process.env.HETZNER_BASE_API_URL || 'https://api.hetzner.cloud/v1',
      },
    },
  },
  async setup(_options, _nuxt) {
    const nuxtOptions = _nuxt.options
    const moduleOptions: ModuleOptions = defu(
      nuxtOptions.runtimeConfig.coolify || {},
      _options,
    )
    nuxtOptions.runtimeConfig.coolify = moduleOptions

    if (moduleOptions.instances['default'].baseUrl === 'missing') {
      console.warn('Please provide the base URL for your Coolify API. Ex: https://api.coolify.io')
    }

    if (moduleOptions.instances['default'].apiToken === 'missing') {
      console.warn('Please provide a valid API Token for your Coolify API.')
    }

    _nuxt.hooks.hook('nitro:config', async (nitroConfig) => {
      nitroConfig.externals = nitroConfig.externals || {}
      nitroConfig.externals.inline = nitroConfig.externals.inline || []
      nitroConfig.externals.inline.push(resolver.resolve('./runtime'))
    })

    const resolver = createResolver(import.meta.url)
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

    if (moduleOptions.enableProviders) {
      if (!moduleOptions.providers || Object.keys(moduleOptions.providers).length === 0) {
        throw new Error('Please provide at least one provider. Note: Hetzner only at the moment.')
      }

      const providerEntries = Object.entries(moduleOptions.providers)

      if (providerEntries.length === 0) {
        throw new Error('No supported providers found after parsing. Please check your configuration.')
      }

      let providerRoute, providerRuntimeRoute

      for (const [providerName, providerConfig] of providerEntries) {
        if (providerName !== 'hetzner') {
          console.warn(`Provider ${providerName} is not currently supported and will be skipped. Only Hetzner is supported at the moment.`)
          continue
        }

        if (!providerConfig.apiToken || providerConfig.apiToken === 'missing') {
          console.warn(`Please provide a valid API Token for the ${providerName} provider.`)
        }

        providerRoute = `/api/${moduleOptions.routeVersionAlias}/_${providerName}`
        providerRuntimeRoute = `./runtime/server/api/${moduleOptions.routeVersionAlias}/_${providerName}`
      }

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
        },
      }

      addImports({
        name: 'useHetzner',
        as: 'useHetzner',
        from: resolver.resolve('runtime/composables/useHetzner'),
      })
      addServerHandler({
        middleware: true,
        handler: resolver.resolve('./runtime/server/middleware/hetzner'),
      })

      await Promise.all([
        Object.entries(hetznerServerHandlers).flatMap(([key, value]) =>
          Object.entries(value).map(([subKey, subValue]) => {
            const { route, handler } = subValue
            return addServerHandler({
              route: route,
              handler: resolver.resolve(handler),
            })
          }),
        ),
      ])
    }

    addImports({
      name: 'useCoolify',
      as: 'useCoolify',
      from: resolver.resolve('runtime/composables/useCoolify'),
    })
    addServerHandler({
      middleware: true,
      handler: resolver.resolve('./runtime/server/middleware/coolify'),
    })

    await Promise.all([
      Object.entries(coolifyServerHandlers).flatMap(([key, value]) =>
        Object.entries(value).map(([subKey, subValue]) => {
          const { route, handler } = subValue
          return addServerHandler({
            route: route,
            handler: resolver.resolve(handler),
          })
        }),
      ),
    ])
  },
})
