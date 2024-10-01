export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  if (!id) return createError({ statusCode: 500, message: 'Missing Actions ID' })

  // check auth permissions

  return useHetzner().getAction(id)
})
