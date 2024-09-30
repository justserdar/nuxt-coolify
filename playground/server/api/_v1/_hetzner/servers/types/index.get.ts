import type { HetznerQueryServerTypes } from 'nuxt-coolify'

export default eventHandler(async (event) => {
  const query = getQuery<HetznerQueryServerTypes>(event)

  // check auth permissions

  return useHetzner().getServerTypes(query)
})
