---
icon: simple-icons:sqlite
---

# useHetzner()

> Leverage the useHetzner composable to create, control and manage all your Hetzner products over API.

<!-- :read-more{to=""} -->

[Generating an API token](https://docs.hetzner.com/cloud/api/getting-started/generating-api-token)

## Usage

To reach the internal Hetzner API endpoints within the module, use the useHetzner composable. 
This composable can return multiple helpers that automate all the API calls via Nitro:

```ts
const { 
  listServers, 
  getServer, 
  createServer, 
  updateServer, 
  deleteServer, 
  getServerMetrics, 
  getAllServerActions, 
  getServerAction, 
  getAllServerActionsForServer, 
  sendActionToServer, 
  requestTerminalAccess
} = useHetzner()

```

## Helpers

Coming soon