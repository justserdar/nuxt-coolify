import type { HetznerQueryActions } from 'nuxt-coolify'

export default eventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const query = getQuery<HetznerQueryActions>(event)

  if (!id) return createError({ statusCode: 500, message: 'Missing Server ID.' })

  // check auth permissions

  return useHetzner().getActionsServer(id, query)
})
