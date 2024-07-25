import { defineEventHandler, send, getRouterParams } from 'h3'

export default defineEventHandler(async (event) => {
  const params = await getRouterParams(event)
  // Default value for params.environment_name = 'production'
  const response = await $fetch(`${process.env.COOLIFY_BASE_API_URL}/api/v1/projects/${params.uuid}/${params.environment_name}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${process.env.COOLIFY_API_TOKEN}`,
    },
  })

  return send(event, JSON.stringify(response))
})
