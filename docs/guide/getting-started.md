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
The module is currently in alpha and only available over NPM.
:::


## Getting started

1. You'll need to add `nuxt-coolify` to your modules.

```ts
export default defineNuxtConfig({
  modules: ['nuxt-coolify'],
  coolify: {
    // options
  },
})

```

2. Add the required Coolify environment variables in your `.env` file.

```bash
COOLIFY_BASE_API_URL=<your-coolify-url>
COOLIFY_API_TOKEN=<your-coolify-api-token>
```

To get your Coolify API token, go to the API section in your Coolify Dashboard and create one there.


Then you can use it directly in your pages and components by importing the composable like so:

```vue
<script setup>
import { useCoolify } from 'nuxt-coolify'

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