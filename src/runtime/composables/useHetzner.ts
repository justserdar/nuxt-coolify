// composables/useHetzner
import { ref } from 'vue'
import { ofetch } from 'ofetch'

export function useHetzner() {
  const api = ofetch.create({
    baseURL: '/api/_v1/_hetzner',
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

  const listServers = () => useApi('/servers')
  const getServer = (uuid: string) =>
    useApi(`/servers/${uuid}`, { method: 'GET' })
  const createServer = (data: string) =>
    useApi('/servers/create', { method: 'POST', body: data })
  const updateServer = (uuid: string, data: string) =>
    useApi(`/servers/${uuid}`, { method: 'POST', body: data })
  const deleteServer = (uuid: string) =>
    useApi(`/servers/${uuid}`, { method: 'DELETE' })
  const getServerMetrics = (uuid: string) => useApi(`/servers/${uuid}/metrics`)
  const getAllServerActions = (uuid: string) => useApi(`/servers/${uuid}/actions`)
  const getServerAction = (uuid: string, actionId: string) =>
    useApi(`/servers/${uuid}/actions/${actionId}`)
  const getAllServerActionsForServer = (uuid: string) => useApi(`/servers/${uuid}/actions`)
  const sendActionToServer = (uuid: string, action: string) => useApi(`/servers/${uuid}/actions`, { method: 'POST', body: action })
  const requestTerminalAccess = (uuid: string) => useApi(`/servers/${uuid}/actions/console`)
  const getLocations = () => useApi('/locations')
  const getLocation = (id: string) => useApi(`/locations/${id}`)

  return { listServers, getServer, createServer, updateServer, deleteServer, getServerMetrics, getAllServerActions, getServerAction, getAllServerActionsForServer, sendActionToServer, requestTerminalAccess, getLocations, getLocation }
}
