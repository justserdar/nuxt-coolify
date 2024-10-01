type SingleOrMultiple<T> = T | T[]

export type HetznerMetricsType = 'cpu' | 'disk' | 'network'
export interface HetznerQueryMetrics {
  type: SingleOrMultiple<HetznerMetricsType>
  start: string
  end: string
  step?: string
}

export interface HetznerQuery {
  page?: number
  per_page?: number
}

export type HetznerActionSort = 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc'
export type HetznerActionStatus = 'running' | 'success' | 'error'
export interface HetznerQueryActions extends HetznerQuery {
  id?: number[]
  sort?: SingleOrMultiple<HetznerActionsSort>
  status?: SingleOrMultiple<HetznerActionStatus>
}

export type HetznerLocationSort = 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc'
export interface HetznerQueryLocations extends HetznerQuery {
  name?: string | string[]
  sort?: SingleOrMultiple<HetznerLocationSort>
}

export type HetznerDatacenterSort = HetznerLocationSort
export type HetznerQueryDatacenters = HetznerQueryLocations

export interface HetznerQueryServerTypes extends HetznerQuery {
  name?: string | string[]
}
