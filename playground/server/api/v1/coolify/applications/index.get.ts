import type { Application } from 'nuxt-coolify'

export default defineEventHandler(async (event) => {
  // check auth permissions
  return useCoolifyApplications('default').list()
})
