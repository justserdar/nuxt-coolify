export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)

  if (!id) return createError({ statusCode: 500, message: 'Missing Server ID.' })
  if (!body) return createError({ statusCode: 500, message: 'Missing new Server Info.' })

  // check auth permissions

  return useHetzner().updateServer(id, body)
})
