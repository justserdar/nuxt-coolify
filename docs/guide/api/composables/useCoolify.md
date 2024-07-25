---
icon: simple-icons:sqlite
---

# useCoolify()

> Leverage the useCoolify composable to load and control your Coolify instances over API.

<!-- :read-more{to=""} -->

## Usage

To reach the internal Coolify API endpoints within the module, use the useCoolify composable. 
This composables returns multiple helpers that automates all the API calls via Nitro:

```js
const { 
  getHealthcheck,
  enableAPI,
  disableAPI,
  getVersion
} = useCoolify()
```

## Helpers

### `getHealthcheck`

Helper function that returns the healthcheck status.

### `enableAPI`

Helper function that returns the healthcheck status.

### `disableAPI`

Function to pause the currently playing audio. This is useful for user controls that require stopping the audio temporarily.

### `getVersion`

Function to update the frequency data from the audio file. This is necessary for visualizing audio or analyzing the sound in real-time.
