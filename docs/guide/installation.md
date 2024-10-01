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
  
})

```

2. Add the required Coolify environment variables in your `.env` file.

```bash
COOLIFY_BASE_API_URL=<your-coolify-url>
COOLIFY_API_TOKEN=<your-coolify-api-token>
HETZNER_BASE_API_URL=<hetzner-api-url>
HETZNER_API_TOKEN=<your-hetzner-api-token>
```
Note: To get your Coolify API token, go to the API section in your Coolify Dashboard and create one there.

```vue
<script setup>
const { data: instances, status: status, error: error, refresh: refreshInstanceList } = useFetch('/api/_v1/_coolify/instances')
</script>

<template>
  <div>
    <h2>Instances</h2>
    <div v-if="status === 'pending'">
      Loading Instances...
    </div>
    <div v-else-if="error">
      Error: {{ error.message }}
    </div>
    <div v-else>
      Instances: {{ instances }}
    </div>
  </div>
</template>
```