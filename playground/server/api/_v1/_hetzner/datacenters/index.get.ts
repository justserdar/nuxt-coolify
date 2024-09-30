import type { HetznerQueryDatacenters } from 'nuxt-coolify'

export default eventHandler(async (event) => {
  const query = getQuery<HetznerQueryDatacenters>(event)

  // check auth permissions

  return useHetzner().getDatacenters(query)
})
