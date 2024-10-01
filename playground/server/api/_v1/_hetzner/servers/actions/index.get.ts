import type { HetznerQueryActions } from 'nuxt-coolify'

export default defineEventHandler(async (event) => {
  const query = getQuery<HetznerQueryActions>(event)

  // check auth permissions

  return useHetzner().getActions(query)
})
