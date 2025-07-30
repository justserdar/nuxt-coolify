<template>
  <div> 
    <h2>Projects</h2>
    <div v-if="pending === true">
      Loading Projects...
    </div>
    <div v-else-if="cError">
      Error: {{ cError?.message }}
    </div>
    <div v-else-if="pending === false">
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 1rem; font-weight: bold;">
          Total Projects: {{ projects?.length }}
        </li>
        <li v-for="project in projects" :key="project.id" style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem; margin-bottom: 1rem; background: #f9fafb;">
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.5rem; font-size: 0.875rem;">
            <div><strong>Name:</strong> {{ project.name }}</div>
            <div><strong>Description:</strong> {{ project.description }}</div>
            <div><strong>ID:</strong> {{ project.id }}</div>
            <div><strong>UUID:</strong> {{ project.uuid }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: projects, pending, error: cError, refresh: refreshProjectList } = await useFetch('/api/v1/coolify/projects')
</script>