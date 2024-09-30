import type { HetznerQueryActions } from 'nuxt-coolify'

export default eventHandler(async (event) => {
  const query = getQuery<HetznerQueryActions>(event)

  // check auth permissions

  return useHetzner().getActions(query)
})
