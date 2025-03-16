export interface CoolifyPrivateGitHubAppBody {
  // required
  project_uuid: string
  server_uuid: string
  environment_name: string
  github_app_uuid: string
  git_repository: string
  git_branch: string
  ports_exposes: string
  build_pack: 'nixpacks' | 'static' | 'dockerfile' | 'dockercompose'
  // optional
  destination_uuid?: string
  name?: string
  description?: string
  domains?: string
  git_commit_sha?: string
  docker_registry_image_name?: string
  docker_registry_image_tag?: string
  is_static?: boolean
  install_command?: string
  build_command?: string
  start_command?: string
  ports_mappings?: string
  base_directory?: string
  publish_directory?: string
  health_check_enabled?: boolean
  health_check_path?: string
  health_check_port?: string | null
  health_check_host?: string | null
  health_check_method?: string
  health_check_return_code?: number
  health_check_scheme?: string
  health_check_response_text?: string | null
  health_check_interval?: number
  health_check_timeout?: number
  health_check_retries?: number
  health_check_start_period?: number
  limits_memory?: string
  limits_memory_swap?: string
  limits_memory_swappiness?: number
  limits_memory_reservation?: string
  limits_cpus?: string
  limits_cpuset?: string | null
  limits_cpu_shares?: number
  custom_labels?: string
  custom_docker_run_options?: string
  post_deployment_command?: string
  post_deployment_command_container?: string
  pre_deployment_command?: string
  pre_deployment_command_container?: string
  manual_webhook_secret_github?: string
  manual_webhook_secret_gitlab?: string
  manual_webhook_secret_bitbucket?: string
  manual_webhook_secret_gitea?: string
  redirect?: 'www' | 'non-www' | 'both' | null
  instant_deploy?: boolean
  dockerfile?: string
  docker_compose_location?: string
  docker_compose_raw?: string
  docker_compose_custom_start_command?: string
  docker_compose_custom_build_command?: string
  docker_compose_domains?: string[]
  watch_paths?: string
}
