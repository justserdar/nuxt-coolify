import type { RuntimeConfig } from '@nuxt/schema'
import {
  defineNuxtModule,
  createResolver,
  addImports,
  addServerHandler,
} from '@nuxt/kit'
import { consola } from 'consola'
import { defu } from 'defu'

import {
  addCoolifyServerHandlers,
  addServerProviders,
} from './serverHandlers'

export type * from './runtime/types/index'

export type ServerProviders = 'hetzner'

// Module options TypeScript interface definition
export interface ModuleOptions {
  instances: {
    [key: string | 'default']: { apiToken: string, baseURL: string }
  }
  routeAlias?: string
  routeVersionAlias?: string
  providers?: {
    [key in ServerProviders]: { apiToken: string, baseURL: string }
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
        baseURL: '', // NUXT_COOLIFY_INSTANCES_DEFAULT_BASE_URL
        apiToken: '', // NUXT_COOLIFY_INSTANCES_DEFAULT_API_TOKEN
      },
    },
    routeAlias: '_coolify',
    routeVersionAlias: '_v1',
    providers: {
      hetzner: {
        baseURL: 'https://api.hetzner.cloud/v1', // NUXT_COOLIFY_PROVIDERS_HETZNER_BASE_URL
        apiToken: '', // NUXT_COOLIFY_PROVIDERS_HETZNER_API_TOKEN
      },
    },
  },
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    const moduleOptions = nuxt.options.runtimeConfig.coolify = defu<
      RuntimeConfig['coolify'],
      ModuleOptions[]
    >(
      nuxt.options.runtimeConfig.coolify,
      options,
    )

    if (moduleOptions.instances['default'].baseURL === 'missing') {
      consola.warn('Please provide the base URL for your Coolify API. Ex: https://api.coolify.io')
    }

    if (moduleOptions.instances['default'].apiToken === 'missing') {
      consola.warn('Please provide a valid API Token for your Coolify API.')
    }

    nuxt.hooks.hook('nitro:config', async (nitroConfig) => {
      nitroConfig.externals = nitroConfig.externals || {}
      nitroConfig.externals.inline = nitroConfig.externals.inline || []
      nitroConfig.externals.inline.push(resolver.resolve('./runtime'))
    })

    addImports({
      name: 'useCoolify',
      as: 'useCoolify',
      from: resolver.resolve('runtime/composables/useCoolify'),
    })
    addServerHandler({
      middleware: true,
      handler: resolver.resolve('./runtime/server/middleware/coolify'),
    })

    addCoolifyServerHandlers(resolver, moduleOptions)
    addServerProviders(resolver, moduleOptions)
  },
})

declare module '@nuxt/schema' {
  interface NuxtOptions {
    coolify: ModuleOptions
    runtimeConfig: {
      coolify: ModuleOptions
    }
  }
}
