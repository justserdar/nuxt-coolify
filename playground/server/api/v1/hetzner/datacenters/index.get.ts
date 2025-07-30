import type { HetznerQueryDatacenters } from 'nuxt-coolify'

export default defineEventHandler(async (event) => {
  const query = getQuery<HetznerQueryDatacenters>(event)

  // check auth permissions

  return useHetzner().getDatacenters(query)
})
