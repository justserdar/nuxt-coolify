import type { RuntimeConfig } from '@nuxt/schema'
import {
  defineNuxtModule,
  createResolver,
  addServerImportsDir,
} from '@nuxt/kit'
import { consola } from 'consola'
import { defu } from 'defu'

import {
  addServerProviders,
} from './serverHandlers'

export type * from './runtime/types/index'

export type ServerProviders = 'hetzner'

// Module options TypeScript interface definition
export interface ModuleOptions {
  instances: {
    [key: string | 'default']: { apiToken: string, baseURL: string }
  }
  providers?: {
    [key in ServerProviders]: { apiToken: string, baseURL?: string }
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-coolify',
    configKey: 'coolify',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  defaults: {
    instances: {
      default: {
        baseURL: '', // NUXT_COOLIFY_INSTANCES_DEFAULT_BASE_URL
        apiToken: '', // NUXT_COOLIFY_INSTANCES_DEFAULT_API_TOKEN
      },
    },
    providers: {
      hetzner: {
        baseURL: 'https://api.hetzner.cloud/v1', // NUXT_COOLIFY_PROVIDERS_HETZNER_BASE_URL
        apiToken: '', // NUXT_COOLIFY_PROVIDERS_HETZNER_API_TOKEN
      },
    },
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // Transpile runtime
    const runtimeDir = resolve('./runtime')
    nuxt.options.build.transpile.push(runtimeDir)

    nuxt.options.alias['#coolify'] = runtimeDir

    const moduleOptions: ModuleOptions = nuxt.options.runtimeConfig.coolify = defu(
      nuxt.options.runtimeConfig.coolify,
      options,
    ) as ModuleOptions

    if (moduleOptions.instances['default'].baseURL === 'missing') {
      consola.warn('Please provide the base URL for your Coolify API. Ex: https://api.coolify.io/api/v1')
    }

    if (moduleOptions.instances['default'].apiToken === 'missing') {
      consola.warn('Please provide a valid API Token for your Coolify API.')
    }

    addServerImportsDir(resolve(runtimeDir, 'server', 'utils', 'coolify'))
    addServerProviders(runtimeDir, moduleOptions)
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
