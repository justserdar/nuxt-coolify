import type {
  HetznerQueryMetrics,
  HetznerQueryActions,
  HetznerQueryLocations,
  HetznerQueryDatacenters,
  HetznerQueryServerTypes,
  HetznerCreateServerBody,
  HetznerUpdateServerBody,
} from 'nuxt-coolify'

import {
  useFetchHetzner,
} from '#imports'

// TODO: better map each Hetzner api options with related params
export function useHetzner() {
  return {
    // Servers
    getServers:
      <T>() => useFetchHetzner<T>('/servers'),
    createServer:
      <T>(body: HetznerCreateServerBody) => useFetchHetzner<T>('/servers', { method: 'POST', body }),
    deleteServer:
      <T>(id: number | string) => useFetchHetzner<T>(`/servers/${id}`, { method: 'DELETE' }),
    getServer:
      <T>(id: number | string) => useFetchHetzner<T>(`/servers/${id}`),
    updateServer:
      <T>(id: number | string, body: HetznerUpdateServerBody) => useFetchHetzner<T>(`/servers/${id}`, { method: 'POST', body }),
    getMetricsServer:
      <T>(id: number | string, query: HetznerQueryMetrics) => useFetchHetzner<T>(`/servers/${id}/metrics`, { query }),

    // Actions
    getActions:
      <T>(query?: HetznerQueryActions) => useFetchHetzner<T>('/servers/actions', { query }),
    getAction:
    <T>(id: number | string) => useFetchHetzner<T>(`/server/actions/${id}`),
    getActionsServer:
      <T>(id: number | string, query?: HetznerQueryActions) => useFetchHetzner<T>(`/servers/${id}/actions`, { query }),
    getActionServer:
      <T>(serverId: number | string, actionId: number | string) => useFetchHetzner<T>(`/servers/${serverId}/actions/${actionId}`),
    // sendActionToServer TODO: Originally not defined in server API
    requestConsoleServer:
      <T>(id: number | string) => useFetchHetzner<T>(`/servers/${id}/actions/request_console`, { method: 'POST' }),

    // Locations
    getLocations:
      <T>(query?: HetznerQueryLocations) => useFetchHetzner<T>('/locations', { query }),
    getLocation:
      <T>(id: number | string) => useFetchHetzner<T>(`/locations/${id}`),

    // Datacenters
    getDatacenters:
      <T>(query?: HetznerQueryDatacenters) => useFetchHetzner<T>('/datacenters', { query }),
    getDatacenter:
      <T>(id: number | string) => useFetchHetzner<T>(`/datacenters/${id}`),

    // Server Type
    getServerTypes:
    <T>(query?: HetznerQueryServerTypes) => useFetchHetzner<T>('/server_types', { query }),
    getServerType:
      <T>(id: number | string) => useFetchHetzner<T>(`/server_types/${id}`),
  }
}
