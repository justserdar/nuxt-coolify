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
  baseUrl: string
  apiToken: string
  routeAlias: string
  routeVersionAlias: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-coolify',
    configKey: 'coolify',
  },
  defaults: {
    baseUrl: process.env.BASE_COOLIFY_API_URL || 'missing',
    apiToken: process.env.BASE_COOLIFY_API_TOKEN || 'missing',
    routeAlias: '_coolify',
    routeVersionAlias: '_v1',
  },
  async setup(_options, _nuxt) {
    const nuxtOptions = _nuxt.options
    const moduleOptions: ModuleOptions = defu(
      nuxtOptions.runtimeConfig.coolify || {},
      _options,
    )

    if (!moduleOptions.baseUrl || moduleOptions.baseUrl === 'missing') {
      console.warn('Please provide a base URL for the coolify API.')
    }

    if (!moduleOptions.apiToken || moduleOptions.baseUrl === 'missing') {
      console.warn('Please provide your API Token for the coolify API.')
    }

    _nuxt.hooks.hook('nitro:config', async (nitroConfig) => {
      nitroConfig.externals = nitroConfig.externals || {}
      nitroConfig.externals.inline = nitroConfig.externals.inline || []
      nitroConfig.externals.inline.push(resolver.resolve('./runtime'))
    })

    nuxtOptions.runtimeConfig.coolify = moduleOptions

    const resolver = createResolver(import.meta.url)
    const route = `/api/${moduleOptions.routeVersionAlias}/${moduleOptions.routeAlias}`

    const runtimeRoute = './runtime/server/api/_v1/_coolify'
    const serverHandlers = {
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
      // teams: {
      //   create: {
      //     route: `${route}/teams/create`,
      //     handler: `${runtimeRoute}/teams/create.post`,
      //   },
      //   list: {
      //     route: `${route}/teams/list`,
      //     handler: `${runtimeRoute}/teams/list.get`,
      //   },
      //   delete: {
      //     route: `${route}/teams/delete`,
      //     handler: `${runtimeRoute}/teams/delete.get`,
      //   },
      //   disable: {
      //     route: `${route}/teams/disable`,
      //     handler: `${runtimeRoute}/teams/disable.get`,
      //   },
      // },
      // resources: {
      //   list: {
      //     route: `${route}/resources/list`,
      //     handler: `${runtimeRoute}/resources/list.get`,
      //   },
      // },
    }

    addImportsDir(resolver.resolve('runtime/composables')),
    // addServerHandler({
    //   middleware: true,
    //   handler: resolver.resolve('./runtime/server/middleware/coolify'),
    // })

    await Promise.all([
      Object.entries(serverHandlers).flatMap(([key, value]) =>
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
