import type { RuntimeConfig } from 'nuxt/schema'
import { addServerImportsDir } from '@nuxt/kit'
import { consola } from 'consola'
import { resolve } from 'pathe'

import type {
  ServerProviders,
} from 'nuxt-coolify'

export function addServerProviders(runtimeDir: string, moduleOptions: RuntimeConfig['coolify']) {
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
    resolve(runtimeDir, 'server', 'utils', 'hetzner'),

    // Add additional providers
  ])
}
