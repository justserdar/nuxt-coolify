<template>
  <div>
    <h2>Deployments</h2>
    <div v-if="pending">
      Loading Deployments...
    </div>
    <div v-else-if="error">
      Error: {{ error }}
    </div>
    <div v-else-if="!pending">
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 1rem; font-weight: bold;">
          Total Deployments: {{ deployments?.length }}
        </li>
        <li
          v-for="deployment in deployments"
          :key="deployment.id"
          :style="{
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '1rem',
            marginBottom: '1rem',
            background: '#f9fafb',
          }"
        >
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.5rem; font-size: 0.875rem;" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: deployments, pending, error } = await useFetch('/api/v1/coolify/deployments')
</script>
