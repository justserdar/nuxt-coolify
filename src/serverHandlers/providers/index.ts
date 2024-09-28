import type { RuntimeConfig } from '@nuxt/schema'
import { type Resolver } from '@nuxt/kit'
import { consola } from 'consola'

import type {
  ServerProviders,
} from '../../module'
import {
  addHetznerServerHandlers,
} from './hetzner'

export function addProvidersServerHandlers(resolver: Resolver, moduleOptions: RuntimeConfig['coolify']) {
  if (!moduleOptions.enableProviders) return

  const providerEntries = Object.entries(moduleOptions.providers)
  const allowedServerProviders: ServerProviders[] = ['hetzner']

  for (const [providerName] of providerEntries) {
    if (!allowedServerProviders.includes(providerName as ServerProviders)) {
      consola.warn(`Provider ${providerName} is not currently supported and will be skipped. Only Hetzner is supported at the moment.`)
      continue
    }
  }

  addHetznerServerHandlers(resolver, moduleOptions)
  // Add additional providers
}
