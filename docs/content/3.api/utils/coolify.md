---
icon: simple-icons:sqlite
title: Coolify API
description: Leverage the Coolify API to create, control and manage all your Coolify products over API.
---

## Coolify API Token Guide

> [Generating an Coolify API token](https://coolify.io/docs/api-reference/authorization)


## Usage

To reach the internal Coolify API endpoints within the module, you can create yor endpoint in Nitro and then simply use our built-in server utils. 

### Security Considerations

To tighten security we recommend you IP whitelist the IP address you are working from in your Coolify Dashboard.

### Back end Nitro Example

Create a new endpoint and name it e.g. `/server/api/v1/coolify/instances`:

#### List all instances
```ts
export default defineEventHandler(async (_event) => {
  // check auth permissions
  return useCoolify().instances()
})
```

#### List all for a specific Coolify instance

```ts [~/server/api/v1/coolify/instances/[name]/index.get.ts]
import type { Instance } from 'nuxt-coolify'

export default defineEventHandler(async (event) => {
  const name = getRouterParam(event, 'name')
  const { instances } = useRuntimeConfig().coolify

  // Do your query validation
  if (name && !Object.prototype.hasOwnProperty.call(instances, name)) {
    return createError({
      statusCode: 500,
      message: 'Provided Instance is not configured.',
    })
  }

  // Do additional auth check permissions

  return useCoolify().instances(name as Instance)
})
```

### Nuxt Example using `useFetch()`

```vue
<script setup lang="ts">
const { data: instances, pending, error, refresh } = useFetch('/api/v1/coolify/instances')
</script>
```

## Helper list

Coming soon, for now you can check the source code of the module to see all the available helpers.