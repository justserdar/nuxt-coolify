---
outline: deep
---

# Component Usage

This page demonstrates  'the `useCoolify()` composable provided by 'nuxt-coolify'.

The main `useCoolify()` composable can be used to access your Coolify Instance or any other Coolify Instance you set have yourself access too.

```md
<script setup>
import { useCoolify } from 'nuxt-coolify'

const { getVersion } = useCoolify()
const { data: version, pending, error } = await getVersion()
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
      Version: {{ version }}
    </div>
  </div>
</template>

### Pending Data
<div v-if="pending">
    Loading Version...
</div>

### API Response
<pre>Version: {{ version }}</pre>

https://coolify.io/docs/api-reference/healthcheck
```


## More

API Endpoints are being added as we go.

You can check out the full API documentation at Coolify's [API](https://coolify.io/docs/api-reference/healthcheck) page.

Join the Coolify Discord!
