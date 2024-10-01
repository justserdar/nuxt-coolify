import type { Instance } from 'nuxt-coolify'

export default defineEventHandler(async (event) => {
  const name = getRouterParam(event, 'name')
  const { instances } = useRuntimeConfig().coolify

  if (name && !Object.prototype.hasOwnProperty.call(instances, name)) {
    return createError({
      statusCode: 500,
      message: 'Provided Instance is not configured.',
    })
  }

  // check auth permissions

  return useCoolify().instances(name as Instance)
})
