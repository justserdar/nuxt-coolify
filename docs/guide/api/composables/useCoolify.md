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
import { useCoolify } from 'nuxt-coolify'

const { 
  getHealthcheck,
  enableAuthorisation,
  disableAuthorisation,
  getVersion
} = useCoolify()
```

## Helpers

### `getHealthcheck`

Boolean indicating whether the audio is currently playing. This allows you to control playback states within the application.

### `enableAuthorisation`

Function to start playing the loaded audio file. This facilitates user interaction with audio content, such as play buttons.

### `disableAuthorisation`

Function to pause the currently playing audio. This is useful for user controls that require stopping the audio temporarily.

### `getVersion`

Function to update the frequency data from the audio file. This is necessary for visualizing audio or analyzing the sound in real-time.
