<template>
  <div>
    <h2>Index</h2>
    <div v-if="pending">
      Loading Version...
    </div>
    <div v-else-if="error">
      Error: {{ error.message }}
    </div>
    <div v-else>
      Version: {{ version }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCoolify } from '#imports'

const { getVersion } = useCoolify()
const { data: version, pending, error } = await getVersion()
</script>
