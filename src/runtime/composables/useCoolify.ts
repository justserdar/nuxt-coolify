// composables/useCoolify
import { ref } from 'vue'
import { ofetch } from 'ofetch'

export function useCoolify() {
  if (!process.env.COOLIFY_BASE_API_URL) {
    console.warn('COOLIFY_BASE_API_URL is not defined. Please define BASE_API_URL in your environment variables.')
  }
  if (!process.env.COOLIFY_API_TOKEN) {
    console.warn('COOLIFY_API_TOKEN is not defined. Please define BASE_API_TOKEN in your environment variables.')
  }

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
    const error = ref(null)
    console.log(url)

    const fetchData = async () => {
      pending.value = true
      error.value = null
      try {
        const response = await api(url, {
          ...options,
          headers: {
            'Content-Type': 'application/json', // Set default content type header
            'Accept': 'application/json', // Ensure the response is expected to be JSON // Merge with any provided headers
          },
        })
        data.value = response
      }
      catch (err) {
        error.value = err
      }
      finally {
        pending.value = false
      }
    }

    fetchData()

    return { data, pending, error, refresh: fetchData }
  }

  const getHealthcheck = () => useApi('/authorisation/healthcheck')
  const enableAuthorisation = data => useApi('/authorisation/enable', { method: 'POST', body: data })
  const disableAuthorisation = () => useApi('/authorisation/disable', { method: 'POST' })
  const getVersion = () => useApi('/authorisation/version')
  const createResource = data => useApi('/resources/create', { method: 'POST', body: data })
  const listResources = () => useApi('/resources/list')
  const deleteResource = resourceId => useApi(`/resources/delete/${resourceId}`, { method: 'DELETE' })
  const disableResource = resourceId => useApi(`/resources/disable/${resourceId}`, { method: 'POST' })

  return {
    getHealthcheck,
    enableAuthorisation,
    disableAuthorisation,
    getVersion,
    createResource,
    listResources,
    deleteResource,
    disableResource,
  }
}
