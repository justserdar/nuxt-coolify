// composables/useCoolify
import { ref } from 'vue'
import { ofetch } from 'ofetch'

export function useCoolify() {
  const api = ofetch.create({
    baseURL: '/api/_v1/_coolify',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  })

  const useApi = (url: string, options = {}) => {
    const data = ref(null)
    const pending = ref(false)
    const error = ref('')

    const fetchData = async () => {
      pending.value = true
      try {
        const response = await api(url, {
          ...options, // Merge with any provided headers
          headers: {
            'Content-Type': 'application/json', // Set default content type header
            'Accept': 'application/json', // Ensure the response is expected to be JSON
            // We do not send any authorization headers here, as we are using the API token securely from within Nitro.
          },
        })
        data.value = response
      }
      catch (err: unknown) {
        if (err instanceof Error) {
          return (error.value = err.message)
        }
      }
      finally {
        pending.value = false
      }
    }

    fetchData()

    return { data, pending, error, refresh: fetchData }
  }

  const getHealthcheck = () => useApi('/authorisation/healthcheck')
  const enableAPI = (data: string) =>
    useApi('/authorisation/enable', { method: 'GET', body: data })
  const disableAPI = () => useApi('/authorisation/disable', { method: 'GET' })
  const getVersion = () => useApi('/authorisation/version')
  const listResources = () => useApi('/resources/list')
  // const createResource = (data: string) => useApi('/resources/create', { method: 'POST', body: data })
  // const deleteResource = (resourceId: string) => useApi(`/resources/delete/${resourceId}`, { method: 'DELETE' })
  // const disableResource = (resourceId: string) => useApi(`/resources/disable/${resourceId}`, { method: 'POST' })
  const listServers = () => useApi('/servers/list')
  const getServer = (uuid: string) =>
    useApi(`/servers/${uuid}`, { method: 'GET' })
  const createServer = (data: string) =>
    useApi('/servers/create', { method: 'POST', body: data })
  const updateServer = (uuid: string, data: string) =>
    useApi(`/servers/${uuid}`, { method: 'POST', body: data })
  const deleteServer = (uuid: string) =>
    useApi(`/servers/${uuid}`, { method: 'DELETE' })
  const getServerResources = (uuid: string) =>
    useApi(`/servers/${uuid}/resources`, { method: 'GET' })
  const getServerDomains = (uuid: string) =>
    useApi(`/servers/${uuid}/domains`, { method: 'GET' })
  const validateServer = (uuid: string) =>
    useApi(`/servers/${uuid}/validate`, { method: 'GET' })
  const listDeployments = () => useApi('/deployments/list')
  const getDeployment = (uuid: string) =>
    useApi(`/deployments/${uuid}`, { method: 'GET' })
  const deploy = (data: { tag: string, uuid: string, force: boolean }) =>
    useApi('/deployments/create', { method: 'POST', body: data })
  const listServices = () => useApi('/services/list')
  const getService = (uuid: string) =>
    useApi(`/services/${uuid}`, { method: 'GET' })
  const createService = (data: {
    type: string
    name: string
    description: string
    project_uuid: string
    environment_name: string
    server_uuid: string
    destination_uuid: string
    instant_deploy: boolean
  }) => useApi('/services/create', { method: 'POST', body: data })
  const deleteService = (uuid: string) =>
    useApi(`/services/${uuid}`, { method: 'GET' })
  const startService = (uuid: string) =>
    useApi(`/services/${uuid}/start`, { method: 'GET' })
  const stopService = (uuid: string) =>
    useApi(`/services/${uuid}/stop`, { method: 'GET' })
  const restartService = (uuid: string) =>
    useApi(`/services/${uuid}/restart`, { method: 'GET' })
  const listTeams = () => useApi('/teams/list')
  const getTeam = (uuid: string) => useApi(`/teams/${uuid}`, { method: 'GET' })
  const getMembers = (uuid: string) =>
    useApi(`/teams/${uuid}/members`, { method: 'GET' })
  const getActiveTeam = () => useApi('/teams/current', { method: 'GET' })
  const getActiveMembers = () =>
    useApi('/teams/current/members', { method: 'GET' })

  return {
    getHealthcheck,
    enableAPI,
    disableAPI,
    getVersion,
    listResources,
    // createResource,
    // deleteResource,
    // disableResource,
    getServer,
    listServers,
    createServer,
    updateServer,
    deleteServer,
    getServerResources,
    getServerDomains,
    validateServer,
    listDeployments,
    getDeployment,
    deploy,
    listServices,
    getService,
    createService,
    deleteService,
    startService,
    stopService,
    restartService,
    listTeams,
    getTeam,
    getMembers,
    getActiveTeam,
    getActiveMembers,
  }
}
