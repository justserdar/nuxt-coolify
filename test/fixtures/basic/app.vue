<template>
  <div>{{ version }}</div>
</template>

<script setup>
import { useCoolify } from '#imports'

const { data: version } = useCoolify().getVersion()
</script>
