import type { RuntimeConfig } from 'nuxt/schema'

export type Instance = keyof RuntimeConfig['coolify']['instances']
