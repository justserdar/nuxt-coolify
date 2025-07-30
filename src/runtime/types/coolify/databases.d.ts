export type CoolifyDatabaseType = 'postgresql' | 'clickhouse' | 'dragonfly' | 'redis' | 'keydb' | 'mariadb' | 'mysql' | 'mongodb'

export interface CoolifyUpdateDatabaseBody {
    name: string
    description: string
    image: string
    is_public: boolean
    public_port: number
    limits_memory: string
    limits_memory_swap: string
    limits_memory_swappiness: number
    limits_memory_reservation: string
    limits_cpus: string
    limits_cpuset: string
    limits_cpu_shares: number
    postgres_user: string
    postgres_password: string
    postgres_db: string
    postgres_initdb_args: string
    postgres_host_auth_method: string
    postgres_conf: string
    clickhouse_admin_user: string
    clickhouse_admin_password: string
    dragonfly_password: string
    redis_password: string
    redis_conf: string
    keydb_password: string
    keydb_conf: string
    mariadb_conf: string
    mariadb_root_password: string
    mariadb_user: string
    mariadb_password: string
    mariadb_database: string
    mongo_conf: string
    mongo_initdb_root_username: string
    mongo_initdb_root_password: string
    mongo_initdb_database: string
    mysql_root_password: string
    mysql_password: string
    mysql_user: string
    mysql_database: string
    mysql_conf: string
}

export interface CoolifyCreatePostgressDatabaseBody {
  server_uuid: string
  project_uuid: string
  environment_name: string
  environment_uuid: string
  postgres_user: string
  postgres_password: string
  postgres_db: string
  postgres_initdb_args: string
  postgres_host_auth_method: string
  postgres_conf: string
  destination_uuid: string
  name: string
  description: string
  image: string
  is_public: boolean
  public_port: number
  limits_memory: string
  limits_memory_swap: string
  limits_memory_swappiness: number
  limits_memory_reservation: string
  limits_cpus: string
  limits_cpuset: string
  limits_cpu_shares: number
  instant_deploy: boolean
}

export interface CoolifyCreateClickhouseDatabaseBody {
  server_uuid: string
  project_uuid: string
  environment_name: string
  environment_uuid: string
  destination_uuid: string
  clickhouse_admin_user: string
  clickhouse_admin_password: string
  name: string
  description: string
  image: string
  is_public: boolean
  public_port: number
  limits_memory: string
  limits_memory_swap: string
  limits_memory_swappiness: number
  limits_memory_reservation: string
  limits_cpus: string
  limits_cpuset: string
  limits_cpu_shares: number
  instant_deploy: boolean
}

export interface CoolifyCreateDragonflyDatabaseBody {
  server_uuid: string
  project_uuid: string
  environment_name: string
  environment_uuid: string
  destination_uuid: string
  dragonfly_password: string
  name: string
  description: string
  image: string
  is_public: boolean
  public_port: number
  limits_memory: string
  limits_memory_swap: string
  limits_memory_swappiness: number
  limits_memory_reservation: string
  limits_cpus: string
  limits_cpuset: string
  limits_cpu_shares: number
  instant_deploy: boolean
}

export interface CoolifyCreateRedisDatabaseBody {
  server_uuid: string
  project_uuid: string
  environment_name: string
  environment_uuid: string
  destination_uuid: string
  redis_password: string
  redis_conf: string
  name: string
  description: string
  image: string
  is_public: boolean
  public_port: number
  limits_memory: string
  limits_memory_swap: string
  limits_memory_swappiness: number
  limits_memory_reservation: string
  limits_cpus: string
  limits_cpuset: string
  limits_cpu_shares: number
  instant_deploy: boolean
}

export interface CoolifyCreateKeydbDatabaseBody {
  server_uuid: string
  project_uuid: string
  environment_name: string
  environment_uuid: string
  destination_uuid: string
  keydb_password: string
  keydb_conf: string
  name: string
  description: string
  image: string
  is_public: boolean
  public_port: number
  limits_memory: string
  limits_memory_swap: string
  limits_memory_swappiness: number
  limits_memory_reservation: string
  limits_cpus: string
  limits_cpuset: string
  limits_cpu_shares: number
  instant_deploy: boolean
}

export interface CoolifyCreateMariaDBDatabaseBody {
  server_uuid: string
  project_uuid: string
  environment_name: string
  environment_uuid: string
  destination_uuid: string
  mariadb_conf: string
  mariadb_root_password: string
  mariadb_user: string
  mariadb_password: string
  mariadb_database: string
  name: string
  description: string
  image: string
  is_public: boolean
  public_port: number
  limits_memory: string
  limits_memory_swap: string
  limits_memory_swappiness: number
  limits_memory_reservation: string
  limits_cpus: string
  limits_cpuset: string
  limits_cpu_shares: number
  instant_deploy: boolean
}

export interface CoolifyCreateMySQLDatabaseBody {
  server_uuid: string
  project_uuid: string
  environment_name: string
  environment_uuid: string
  destination_uuid: string
  mysql_root_password: string
  mysql_password: string
  mysql_user: string
  mysql_database: string
  mysql_conf: string
  name: string
  description: string
  image: string
  is_public: boolean
  public_port: number
  limits_memory: string
  limits_memory_swap: string
  limits_memory_swappiness: number
  limits_memory_reservation: string
  limits_cpus: string
  limits_cpuset: string
  limits_cpu_shares: number
  instant_deploy: boolean
}

export interface CoolifyCreateMongoDBDatabaseBody {
  server_uuid: string
  project_uuid: string
  environment_name: string
  environment_uuid: string
  destination_uuid: string
  mongo_conf: string
  mongo_initdb_root_username: string
  name: string
  description: string
  image: string
  is_public: boolean
  public_port: number
  limits_memory: string
  limits_memory_swap: string
  limits_memory_swappiness: number
  limits_memory_reservation: string
  limits_cpus: string
  limits_cpuset: string
  limits_cpu_shares: number
  instant_deploy: boolean
}                    