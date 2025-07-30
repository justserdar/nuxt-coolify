import type { HetznerQueryMetrics } from 'nuxt-coolify'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const query = getQuery<HetznerQueryMetrics>(event)

  if (!id) return createError({ statusCode: 500, message: 'Missing Server ID.' })
  if (!query.type || !query.start || !query.end) return createError({ statusCode: 500, message: 'Missing required parameters (`type`, `start` and `end`)' })

  return useHetzner().getMetricsServer(id, query)
})
