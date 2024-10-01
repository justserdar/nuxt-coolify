export type CoolifyServicesTypes = 'activepieces' | 'appsmith' | 'appwrite' | 'authentik' | 'babybuddy' | 'budge' | 'changedetection' | 'chatwoot' | 'classicpress-with-mariadb' | 'classicpress-with-mysql' | 'classicpress-without-database' | 'cloudflared' | 'code-server' | 'dashboard' | 'directus' | 'directus-with-postgresql' | 'docker-registry' | 'docuseal' | 'docuseal-with-postgres' | 'dokuwiki' | 'duplicati' | 'emby' | 'embystat' | 'fider' | 'filebrowser' | 'firefly' | 'formbricks' | 'ghost' | 'gitea' | 'gitea-with-mariadb' | 'gitea-with-mysql' | 'gitea-with-postgresql' | 'glance' | 'glances' | 'glitchtip' | 'grafana' | 'grafana-with-postgresql' | 'grocy' | 'heimdall' | 'homepage' | 'jellyfin' | 'kuzzle' | 'listmonk' | 'logto' | 'mediawiki' | 'meilisearch' | 'metabase' | 'metube' | 'minio' | 'moodle' | 'n8n' | 'n8n-with-postgresql' | 'next-image-transformation' | 'nextcloud' | 'nocodb' | 'odoo' | 'openblocks' | 'pairdrop' | 'penpot' | 'phpmyadmin' | 'pocketbase' | 'posthog' | 'reactive-resume' | 'rocketchat' | 'shlink' | 'slash' | 'snapdrop' | 'statusnook' | 'stirling-pdf' | 'supabase' | 'syncthing' | 'tolgee' | 'trigger' | 'trigger-with-external-database' | 'twenty' | 'umami' | 'unleash-with-postgresql' | 'unleash-without-database' | 'uptime-kuma' | 'vaultwarden' | 'vikunja' | 'weblate' | 'whoogle' | 'wordpress-with-mariadb' | 'wordpress-with-mysql' | 'wordpress-without-database'

export interface CoolifyServicesBody {
  type: CoolifyServicesTypes
  name?: string
  description?: string | null
  project_uuid: string
  environment_name: string
  server_uuid: string
  destination_uuid?: string
  instant_deploy?: boolean
}

export interface CoolifyServicesEnvBody {
  key: string
  value: string
  is_preview?: boolean
  is_build_time?: boolean
  is_literal?: boolean
  is_multiline?: boolean
  is_shown_once?: boolean
}
