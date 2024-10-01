import type { HetznerQueryLocations } from 'nuxt-coolify'

export default defineEventHandler(async (event) => {
  const query = getQuery<HetznerQueryLocations>(event)

  // check auth permissions

  return useHetzner().getLocations(query)
})
