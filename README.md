# Nuxt Coolify

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Integrate Nuxt with Coolify to simplify your deployments and create custom dashboards for your self-hosted infrastructure.

- [✨ Release Notes](/CHANGELOG.md)
- [📖 Documentation](https://nuxt-coolify.justserdar.dev)

## Features

- 🎯 **Easy Dashboard Creation**
  - Build custom dashboards with your preferred CSS framework
  - Manage self-hosted Coolify servers effortlessly

- 🔄 **Built-in API Routes**
  - Ready-to-use API endpoints for Coolify integration
  - Support for Hetzner and Vultr (Coming Soon)
  - Type-safe API responses

- 🚀 **Simple Deployments**
  - Seamless DevOps and AppDev workflow
  - Self-hosting and cloud hosting support
  - Full Nuxt templating and Nitro backend support

- 🔐 **Flexible Authentication**
  - Bring your own authentication system
  - Agnostic and utility-first approach

## Quick Setup

1. Install the module:

```bash
# Using npm
npm install nuxt-coolify

# Using pnpm
pnpm add nuxt-coolify

# Using yarn
yarn add nuxt-coolify
```

2. Add the module to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['nuxt-coolify'],
})
```

3. Add your Coolify credentials to `.env`:

```bash
NUXT_COOLIFY_INSTANCES_DEFAULT_BASE_URL=<your-coolify-url>
NUXT_COOLIFY_INSTANCES_DEFAULT_API_TOKEN=<your-coolify-api-token>
```

## Basic Usage

```vue
<script setup lang="ts">
const { data: instances, refresh } = useFetch('/api/_v1/_coolify/instances')
</script>

<template>
  <div>
    <h2>Coolify Instances</h2>
    <pre>{{ instances }}</pre>
    <button @click="refresh">Refresh</button>
  </div>
</template>
```

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

## Credits

- [nuxt/nuxt](https://github.com/nuxt/nuxt)
- [coollabsio/coolify](https://github.com/coollabsio/coolify)

## License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-coolify/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-coolify

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-coolify.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/nuxt-coolify

[license-src]: https://img.shields.io/npm/l/nuxt-coolify.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-coolify

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
