---
icon: simple-icons:sqlite
title: Hetzner
description: Leverage the Hetzner API to create, control and manage all your Hetzner products over API.
---

## Hetzner API Token Guide

[Generating an Hetzner API token](https://docs.hetzner.com/cloud/api/getting-started/generating-api-token)

## Usage

To reach the internal Hetzner API endpoints within the module, you can use the built-in server utils in your own Nitro endpoints. 

```typescript
// In your Nitro endpoint
export default defineEventHandler(async (event) => {
  // const hetzner = useHetzner()
  
  // Get all servers
  const servers = await useHetzner().getServers()
  
  return servers
})
```

## Helper list

The `useHetzner()` function provides the following helpers:

### Servers

- **`getServers<T>()`** - Get all servers
- **`createServer<T>(body: HetznerCreateServerBody)`** - Create a new server
- **`deleteServer<T>(id: number | string)`** - Delete a server by ID
- **`getServer<T>(id: number | string)`** - Get a specific server by ID
- **`updateServer<T>(id: number | string, body: HetznerUpdateServerBody)`** - Update a server
- **`getMetricsServer<T>(id: number | string, query: HetznerQueryMetrics)`** - Get server metrics

### Actions

- **`getActions<T>(query?: HetznerQueryActions)`** - Get all actions
- **`getAction<T>(id: number | string)`** - Get a specific action by ID
- **`getActionsServer<T>(id: number | string, query?: HetznerQueryActions)`** - Get actions for a specific server
- **`getActionServer<T>(serverId: number | string, actionId: number | string)`** - Get a specific action for a server
- **`requestConsoleServer<T>(id: number | string)`** - Request console access for a server

### Locations

- **`getLocations<T>(query?: HetznerQueryLocations)`** - Get all locations
- **`getLocation<T>(id: number | string)`** - Get a specific location by ID

### Datacenters

- **`getDatacenters<T>(query?: HetznerQueryDatacenters)`** - Get all datacenters
- **`getDatacenter<T>(id: number | string)`** - Get a specific datacenter by ID

### Server Types

- **`getServerTypes<T>(query?: HetznerQueryServerTypes)`** - Get all server types
- **`getServerType<T>(id: number | string)`** - Get a specific server type by ID

## Payload Types

### HetznerCreateServerBody
```typescript
interface HetznerCreateServerBody {
  name: string
  server_type: string | number
  location: string | number
  image?: string | number
  ssh_keys?: (string | number)[]
  start_after_create?: boolean
  volumes?: (string | number)[]
  networks?: (string | number)[]
  user_data?: string
  labels?: Record<string, string>
  automount?: boolean
  firewalls?: {
    firewall: string | number
    rules?: string[]
  }[]
  placement_group?: string | number
  public_net?: {
    enable_ipv4?: boolean
    enable_ipv6?: boolean
    ipv4?: {
      ip?: string
      dns_ptr?: string
    }
    ipv6?: {
      ip?: string
      dns_ptr?: string
    }
  }
  load_balancers?: (string | number)[]
}
```

### HetznerUpdateServerBody
```typescript
interface HetznerUpdateServerBody {
  name?: string
  labels?: Record<string, string>
}
```

## Query Parameters

### HetznerQueryMetrics
```typescript
interface HetznerQueryMetrics {
  type: 'cpu' | 'disk' | 'network' | ('cpu' | 'disk' | 'network')[]
  start: string
  end: string
  step?: string
}
```

### HetznerQueryActions
```typescript
interface HetznerQueryActions {
  page?: number
  per_page?: number
  id?: number[]
  sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc'
  status?: 'running' | 'success' | 'error' | ('running' | 'success' | 'error')[]
}
```

### HetznerQueryLocations
```typescript
interface HetznerQueryLocations {
  page?: number
  per_page?: number
  name?: string | string[]
  sort?: 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc'
}
```

### HetznerQueryServerTypes
```typescript
interface HetznerQueryServerTypes {
  page?: number
  per_page?: number
  name?: string | string[]
}
```