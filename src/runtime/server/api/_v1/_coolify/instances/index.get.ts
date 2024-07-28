import { defineEventHandler, send } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const authorizedInstances = useRuntimeConfig().coolify.instances

  const instances = await Promise.all(
    Object.entries(authorizedInstances).map(async ([key, instance]) => {
      const response = await fetch(`${instance.baseUrl}/api/v1/servers`, {
        headers: {
          Authorization: `Bearer ${instance.apiToken}`,
        },
      })
      const data = await response.json()
      return { [key]: data }
    }),
  )

  const combinedInstances = instances.flat()

  return send(event, JSON.stringify(combinedInstances))
})
