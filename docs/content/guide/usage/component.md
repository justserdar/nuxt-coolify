---
outline: deep
---

# Component Usage

This page demonstrates how to make API calls to your Coolify instance using Nuxt's `useFetch` composable.

You can use any other method to make API calls to your Coolify instance, the endpoints are installed by default through the `nuxt-coolify` module.

```md
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

### Pending Data
<div v-if="status === 'pending'">
    Loading Version...
</div>

### API Response
<pre>Instances: {{ instances }}</pre>

https://coolify.io/docs/api-reference/healthcheck
```


## More

API Endpoints are being added as we go.

You can check out the full API documentation at Coolify's [API](https://coolify.io/docs/api-reference/healthcheck) page.

Join the Coolify Discord!
