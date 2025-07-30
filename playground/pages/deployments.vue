<template>
  <div> 
    <h2>Applications</h2>
    <div v-if="pending === true">
      Loading Applications...
    </div>
    <div v-else-if="cError">
      Error: {{ cError?.message }}
    </div>
    <div v-else-if="pending === false">
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 1rem; font-weight: bold;">
          Total Deployments: {{ deployments?.length }}
        </li>
        <li v-for="deployment in deployments" :key="deployment.id" style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem; margin-bottom: 1rem; background: #f9fafb;">
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.5rem; font-size: 0.875rem;">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: deployments, pending, error: cError, refresh: refreshDeploymentList } = await useFetch('/api/v1/coolify/deployments')
</script>