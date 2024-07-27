---
icon: simple-icons:sqlite
---

# useCoolify()

> Leverage the useCoolify composable to load and control your Coolify instances over API.

<!-- :read-more{to=""} -->

## Usage

To reach the internal Coolify API endpoints within the module, use the useCoolify composable. 
This composables returns multiple helpers that automates all the API calls via Nitro:

```ts
const { 
  getHealthcheck,
  enableAPI,
  disableAPI,
  getVersion,
  createResource,
  listResources,
  deleteResource,
  disableResource,
  getServer,
  listServers,
  createServer,
  updateServer,
  deleteServer,
  getServerResources,
  getServerDomains,
  validateServer,
  listDeployments,
  getDeployment,
  deploy,
  listServices,
  getService,
  createService,
  deleteService,
  startService,
  stopService,
  restartService,
} = useCoolify()

```

## Helpers

### `enableAPI`

Helper function that enables the Coolify API entirely.

### `disableAPI`

Helper function that disables the Coolify API entirely.

### `getHealthcheck`

Helper function that returns the healthcheck status.

### `getVersion`

Helper function that returns the Coolify version.

### 'createResource'

Helper function that creates a new resource in Coolify.

### 'listResources'

Helper function that retrieves a list of all available resources.

### `deleteResource`

Helper function that removes a specified resource from Coolify.

### `disableResource`

Helper function that deactivates a specific resource without deleting it.

### `getServer`

Helper function that retrieves information about a specific server.

### `listServers`

Helper function that returns a list of all servers in Coolify.

### `createServer`

Helper function that adds a new server to Coolify.

### `updateServer`

Helper function that modifies the configuration of an existing server.

### `deleteServer`

Helper function that removes a specified server from Coolify.

### `getServerResources`

Helper function that retrieves all resources associated with a specific server.

### `getServerDomains`

Helper function that returns all domains linked to a specific server.

### `validateServer`

Helper function that checks the validity and connectivity of a server.

### `listDeployments`

Helper function that retrieves a list of all deployments.

### `getDeployment`

Helper function that returns information about a specific deployment.

### `deploy`

Helper function that initiates a new deployment process.

### `listServices`

Helper function that returns a list of all services in Coolify.

### `getService`

Helper function that retrieves information about a specific service.

### `createService`

Helper function that adds a new service to Coolify.

### `deleteService`

Helper function that removes a specified service from Coolify.

### `startService`

Helper function that initiates a stopped service.

### `stopService`

Helper function that halts a running service.

### `restartService`

Helper function that stops and then starts a service.