export interface CoolifyServersBody {
  name: string
  description: string
  ip: string
  port: number
  user: string
  private_key_uuid: string
  is_build_server: boolean
  instant_validate: boolean
}
