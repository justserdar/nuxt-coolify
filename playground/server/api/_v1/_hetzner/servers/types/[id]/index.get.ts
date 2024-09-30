export default eventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  if (!id) return createError({ statusCode: 500, message: 'Missing Server-Type ID.' })

  // check auth permissions

  return useHetzner().getServerType(id)
})
