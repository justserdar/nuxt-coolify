/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  defineNuxtModule,
  createResolver,
  addImportsDir,
  addServerHandler,
} from '@nuxt/kit'
// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-coolify',
    configKey: 'coolify',
    baseUrl: '',
    apiToken: '',
  },
  defaults: {
    baseUrl: process.env.BASE_COOLIFY_API_URL || 'not-set',
    apiToken: process.env.BASE_COOLIFY_API_TOKEN || 'not-set',
  },
  async setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)
    const route = '/api/_v1/_coolify'
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
          handler: `${runtimeRoute}/deployments/index.get`,
        },
        list: {
          route: `${route}/deployments`,
          handler: `${runtimeRoute}/deployments/list.get`,
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
      //   create: {
      //     route: `${route}/resources/create`,
      //     handler: `${runtimeRoute}/resources/create.post`,
      //   },
      //   list: {
      //     route: `${route}/resources/list`,
      //     handler: `${runtimeRoute}/resources/list.get`,
      //   },
      //   delete: {
      //     route: `${route}/resources/delete`,
      //     handler: `${runtimeRoute}/resources/delete.get`,
      //   },
      //   disable: {
      //     route: `${route}/resources/disable`,
      //     handler: `${runtimeRoute}/resources/disable.get`,
      //   },
      // },
    }

    _nuxt.hooks.hook('nitro:config', async (nitroConfig) => {
      nitroConfig.externals = nitroConfig.externals || {}
      nitroConfig.externals.inline = nitroConfig.externals.inline || []
      nitroConfig.externals.inline.push(resolver.resolve('./runtime'))
    })

    addImportsDir(resolver.resolve('runtime/composables')),
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
