import type { RuntimeConfig } from '@nuxt/schema'
import { type Resolver, addServerImportsDir } from '@nuxt/kit'
import { consola } from 'consola'

import type {
  ServerProviders,
} from '../module'

export function addServerProviders(resolver: Resolver, moduleOptions: RuntimeConfig['coolify']) {
  const providerEntries = Object.entries(moduleOptions.providers)
  const allowedServerProviders: ServerProviders[] = ['hetzner']

  for (const [providerName] of providerEntries) {
    if (!allowedServerProviders.includes(providerName as ServerProviders)) {
      consola.warn(`Provider ${providerName} is not currently supported and will be skipped.`)
      continue
    }
  }

  addServerImportsDir([
    // Add Hetzner provider
    resolver.resolve('./runtime/server/utils/hetzner'),

    // Add additional providers
  ])
}
