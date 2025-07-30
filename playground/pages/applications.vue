<template>
  <div>
    <h2>Applications</h2>
    <div v-if="pending">
      Loading Applications...
    </div>
    <div v-else-if="error">
      Error: {{ error }}
    </div>
    <div v-else>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 1rem; font-weight: bold;">
          Total Applications: {{ applications?.length || 0 }}
        </li>
        <li
          v-for="application in applications"
          :key="application.id"
          :style="{
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '1rem',
            marginBottom: '1rem',
            background: '#f9fafb',
          }"
        >
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.5rem; font-size: 0.875rem;">
            <div><strong>Name:</strong> {{ application.name || 'N/A' }}</div>
            <div><strong>Status:</strong> <span :style="{ color: application.status === 'running:healthy' ? '#059669' : '#dc2626' }">{{ application.status || 'N/A' }}</span></div>
            <div><strong>Type:</strong> {{ application.type || 'N/A' }}</div>
            <div><strong>Repository:</strong> {{ application.git_repository || 'N/A' }}</div>
            <div><strong>Branch:</strong> {{ application.git_branch || 'N/A' }}</div>
            <div><strong>FQDN:</strong> {{ application.fqdn || 'N/A' }}</div>
            <div><strong>Port:</strong> {{ application.ports_exposes || 'N/A' }}</div>
            <div><strong>Server:</strong> {{ application.destination?.name || 'N/A' }}</div>
            <div><strong>Server Network:</strong> {{ application.destination?.network || 'N/A' }}</div>
            <div><strong>Server ID:</strong> {{ application.destination?.server_id || 'N/A' }}</div>
            <div><strong>Description:</strong> {{ application.description || 'N/A' }}</div>
            <div><strong>UUID:</strong> {{ application.uuid || 'N/A' }}</div>
            <div><strong>Build Pack:</strong> {{ application.build_pack || 'N/A' }}</div>
            <div><strong>Start Command:</strong> {{ application.start_command || 'N/A' }}</div>
            <div><strong>Build Command:</strong> {{ application.build_command || 'N/A' }}</div>
            <div><strong>Install Command:</strong> {{ application.install_command || 'N/A' }}</div>
            <div><strong>Publish Directory:</strong> {{ application.publish_directory || 'N/A' }}</div>
            <div><strong>Base Directory:</strong> {{ application.base_directory || 'N/A' }}</div>
            <div><strong>Dockerfile Location:</strong> {{ application.dockerfile_location || 'N/A' }}</div>
            <div><strong>Compose Location:</strong> {{ application.docker_compose_location || 'N/A' }}</div>
            <div><strong>Static Image:</strong> {{ application.static_image || 'N/A' }}</div>
            <div><strong>Health Check:</strong> {{ application.health_check_enabled ? 'Enabled' : 'Disabled' }}</div>
            <div><strong>Health Check Path:</strong> {{ application.health_check_path || 'N/A' }}</div>
            <div><strong>Health Check Method:</strong> {{ application.health_check_method || 'N/A' }}</div>
            <div><strong>Health Check Return Code:</strong> {{ application.health_check_return_code || 'N/A' }}</div>
            <div><strong>Health Check Interval:</strong> {{ application.health_check_interval || 'N/A' }}s</div>
            <div><strong>Health Check Timeout:</strong> {{ application.health_check_timeout || 'N/A' }}s</div>
            <div><strong>Health Check Retries:</strong> {{ application.health_check_retries || 'N/A' }}</div>
            <div><strong>Limits CPU:</strong> {{ application.limits_cpus || 'Unlimited' }}</div>
            <div><strong>Limits Memory:</strong> {{ application.limits_memory || 'Unlimited' }}</div>
            <div><strong>Limits Memory Reservation:</strong> {{ application.limits_memory_reservation || 'Unlimited' }}</div>
            <div><strong>Swarm Replicas:</strong> {{ application.swarm_replicas || 'N/A' }}</div>
            <div><strong>Redirect:</strong> {{ application.redirect || 'N/A' }}</div>
            <div><strong>Preview URL Template:</strong> {{ application.preview_url_template || 'N/A' }}</div>
            <div><strong>Git Commit SHA:</strong> {{ application.git_commit_sha || 'N/A' }}</div>
            <div><strong>Repository Project ID:</strong> {{ application.repository_project_id || 'N/A' }}</div>
            <div><strong>Source Type:</strong> {{ application.source_type || 'N/A' }}</div>
            <div><strong>Destination Type:</strong> {{ application.destination_type || 'N/A' }}</div>
            <div><strong>Environment ID:</strong> {{ application.environment_id || 'N/A' }}</div>
            <div><strong>Config Hash:</strong> {{ application.config_hash || 'N/A' }}</div>
            <div><strong>Created:</strong> <ClientOnly>{{ formatDate(application.created_at) }}</ClientOnly></div>
            <div><strong>Updated:</strong> <ClientOnly>{{ formatDate(application.updated_at) }}</ClientOnly></div>
            <div><strong>Last Online:</strong> <ClientOnly>{{ formatDate(application.last_online_at) }}</ClientOnly></div>
            <div><strong>Deleted At:</strong> <ClientOnly>{{ formatDate(application.deleted_at) }}</ClientOnly></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: applications, pending, error } = useFetch('/api/v1/coolify/applications')

const formatDate = (dateString: string | null | undefined) => {
  if (!dateString) return 'N/A'
  try {
    return new Date(dateString).toLocaleDateString()
  }
  catch {
    return 'Invalid Date'
  }
}
</script>
