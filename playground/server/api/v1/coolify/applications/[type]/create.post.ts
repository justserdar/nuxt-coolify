import type { Instance } from 'nuxt-coolify'

export default defineEventHandler(async (event) => {
  const type = getRouterParam(event, 'type')
  const body = await readBody(event)

  const project = await useCoolifyProjects('default').create({
    name: 'Nuxlify API',
    description: 'Created programmatically through Nuxt Coolify.',
  }) as { uuid?: string }

  if (!project.uuid) {
    return createError({
      statusCode: 500,
      message: 'Failed to create project.',
    })
  }

  const payload = privateGithubApplicationTemplate({
    project_uuid: project.uuid,
    server_uuid: 'string',
    environment_name: 'string',
    github_app_uuid: 'string',
    git_repository: 'string',
    git_branch: 'string',
    ports_exposes: 'string',
    build_pack: 'nixpacks',
  })

  // check auth permissions
  return useCoolifyApplications('default').create({
    body: payload,
    instance: body.instance,
    type,
  })
  return { response: body }
})
