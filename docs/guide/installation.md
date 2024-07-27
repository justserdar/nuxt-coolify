---
outline: deep
---


# Installation

Learn how to install `nuxt-coolify` in your Nuxt application.

::: code-group

```bash [pnpm]
pnpm add nuxt-coolify
```

```bash [npm]
npm install nuxt-coolify
```

```bash [yarn]
yarn add nuxt-coolify
```

:::

::: info
The module is currently in alpha and only available over NPM/PNPM/Yarn.
:::


## Getting started

1. You'll need to add `nuxt-coolify` to your modules.

```ts
export default defineNuxtConfig({
  modules: ['nuxt-coolify'],
  runtimeConfig: {
    coolify: {
      instances: {
        default: {
          baseUrl: process.env.COOLIFY_BASE_API_URL,
          apiToken: process.env.COOLIFY_API_TOKEN,
        },
      },
      enableProviders: true,
      providers: {
        hetzner: {
          baseUrl: process.env.HETZNER_BASE_API_URL,
          apiToken: process.env.HETZNER_API_TOKEN,
        },
      },
    },
  },
})

```

2. Add the required Coolify environment variables in your `.env` file.

```bash
COOLIFY_BASE_API_URL=<your-coolify-url>
COOLIFY_API_TOKEN=<your-coolify-api-token>
HETZNER_BASE_API_URL=<hetzner-api-url>
HETZNER_API_TOKEN=<your-coolify-api-token>
```
Note: To get your Coolify API token, go to the API section in your Coolify Dashboard and create one there.


You can directly import 'useCoolify()', Nuxt automagicly imports it:

```vue
<script setup lang="ts">
const { getVersion } = useCoolify()
const { data, pending, error } = await getVersion()

// or
const { data: version, pending, error } = await useCoolify().getVersion()
</script>

<template>
  <div>
    <h2>Index</h2>
    <div v-if="pending">
      Loading version...
    </div>
    <div v-else-if="error">
      Error: {{ error.message }}
    </div>
    <div v-else>
      Version: {{ data }}
    </div>
  </div>
</template>
```