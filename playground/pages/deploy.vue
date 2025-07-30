<template>
  <div>
    <div>
      <h2>Coolify Instances</h2>
      <div v-if="cStatus === 'pending'">
        Loading Instances...
      </div>
      <div v-else-if="cError">
        Error: {{ cError?.message }}
      </div>
      <div v-else-if="cStatus === 'success'">
        <ul style="list-style: none;">
          <li>
            Total Instances:: {{ instances?.length }}
          </li>
          <li>
            <button @click.prevent="refreshInstanceList()">
              Refresh Servers
            </button>
          </li>
        </ul>
        <div class="grid grid-cols-6 gap-3 py-3">
          <div
            v-for="(serverGroup, groupIndex) in instances"
            :key="groupIndex"
            class="bg-gray-200 dark:bg-gray-900 p-2 rounded-lg shadow-md"
          >
            <div class="grid grid-cols-2 gap-3 space-y-1 px-3 py-4">
              <template
                v-for="(instanceGroup, instanceGroupIndex) in serverGroup"
                :key="instanceGroupIndex"
              >
                <client-only>
                  <div v-if="cStatus === 'pending'">
                    Loading Instances...
                  </div>
                  <div v-else-if="cError">
                    Error: {{ cError?.message }}
                  </div>
                  <div v-else-if="cStatus === 'success'">
                    <ul style="list-style: none;">
                      <li>
                        Total Instances: {{ instances?.length }}
                      </li>
                      <li>
                        <button @click.prevent="refreshInstanceList">
                          Refresh Servers
                        </button>
                      </li>
                    </ul>
                    <div class="grid grid-cols-3 gap-3 py-3">
                      <div
                        v-for="(server, serverIndex) in instances"
                        :key="serverIndex"
                        class="bg-gray-200 dark:bg-gray-900 p-2 rounded-lg shadow-md"
                      >
                        <div class="grid grid-cols-2 gap-3 space-y-1 px-3 py-4">
                          <template
                            v-for="instance in instanceGroup"
                            :key="instance.uuid"
                          >
                            <template v-if="instance.settings.id === 1">
                              <p
                                class="col-span-2"
                              >
                                Instance:
                              </p>

                              <div class="col-span-2 p-6 border rounded hover:cursor-pointer dark:hover:bg-gray-400">
                                <p
                                  class="flex text-md w-full"
                                  @click="navigateTo(`/hub/s/${instance.uuid}`)"
                                >
                                  <span class="font-bold text-xs mr-2">{{ instance.name }}</span>
                                </p>
                                <div
                                  v-if="instance.settings.is_reachable"
                                  class=" bg-green-500 w-2 h-2 my-auto rounded-full animate-pulse"
                                />
                                <div
                                  v-else
                                  class=" bg-red-500 w-2 h-2 my-auto rounded-full animate-pulse"
                                />
                                <span class="font-bold text-xs dark:text-gray-600 ml-auto mr-0">{{ instance.uuid }}</span>
                              </div>
                            </template>
                            <template v-else>
                              <p
                                class="col-span-2 font-bold"
                              >
                                Attached Servers:
                              </p>
                              <div class="col-span-1 p-6 border rounded">
                                <p
                                  class="flex text-md"
                                  
                                >
                                  <span class="font-bold text-xs mr-2">{{ instance.name }}</span>
                                </p>

                                <div
                                  v-if="instance.settings.is_reachable"
                                  class=" bg-green-500 w-2 h-2 my-auto rounded-full animate-pulse"
                                />
                                <div
                                  v-else
                                  class=" bg-red-500 w-2 h-2 my-auto rounded-full animate-pulse"
                                />

                                <span class="font-bold text-xs dark:text-gray-600 ml-auto mr-0">{{ instance.uuid }}</span>

                                <div class="flex mt-4">
                                  <span class="text-xs dark:text-gray-500">
                                    {{ instance.ip }}
                                  </span>
                                </div>
                              </div>
                            </template>

                            <button @click.prevent="deployAction(instance)">
                              Deploy
                            </button>
                          </template>
                        </div>
                      </div>
                    </div>
                  </div>
                </client-only>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        No authorized instances found for this user
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Instance } from 'nuxt-coolify'

const { data: instances, pending: cStatus, error: cError, refresh: refreshInstanceList } = useFetch('/api/v1/coolify/instances')

async function deployAction(instance: Instance) {
  try {
    const response = await $fetch('/api/v1/coolify/applications/private-github-app/create', {
      method: 'POST',
      body: {
        instance,
      },
    })
    console.log('response', response)
  }
  catch (error) {
    console.error(error)
  }
}
</script>
