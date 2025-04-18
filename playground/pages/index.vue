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
        <div class="grid grid-cols-3 gap-3 py-3">
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
                  <div v-if="cPending">
                    Loading Instances...
                  </div>
                  <div v-else-if="cError">
                    Error: {{ cError?.message }}
                  </div>
                  <div v-else-if="!cPending">
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

                                <div class="flex mt-4">
                                  <span class="text-xs dark:text-gray-500">
                                    {{ instance.ip }}
                                  </span>
                                </div>
                              </div>
                            </template>
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

    <div>
      <h2>Hetzner Servers</h2>
      <div v-if="hStatus === 'pending'">
        Loading Servers...
      </div>
      <div v-else-if="hError">
        Error: {{ hError.message }}
      </div>
      <div v-else>
        <ul style="list-style: none;">
          <li>
            Total Servers: {{ serverList.servers.length }}
          </li>
          <li>
            <button @click.prevent="refreshServerList()">
              Refresh Servers
            </button>
          </li>
        </ul>
        <div v-if="serverList && serverList.servers.length > 0">
          <template
            v-for="server in serverList.servers"
            :key="server.id"
          >
            <p>{{ server.name }}</p>
            <table :ref="`${server.id}-server-table`">
              <thead>
                <tr>
                  <th scope="head">
                    Name
                  </th>
                  <th scope="head">
                    IP
                  </th>
                  <th scope="head">
                    OS
                  </th>
                  <th scope="head">
                    Location
                  </th>
                  <th scope="head">
                    Status
                  </th>
                  <th scope="head">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ server.name }}</td>
                  <td>{{ server.public_net.ipv4.ip }}</td>
                  <td>{{ server.image.name }}</td>
                  <td>{{ server.datacenter.location.name }}</td>
                  <td>{{ server.status }}</td>
                  <td>
                    <select>
                      <option>Reboot</option>
                      <option>Power Off</option>
                      <option>Power On</option>
                      <option>Request Console</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: instances, status: cStatus, error: cError, refresh: refreshInstanceList } = useFetch('/api/_v1/_coolify/instances')
const { data: serverList, status: hStatus, error: hError, refresh: refreshServerList } = useFetch('/api/_v1/_hetzner/servers')
</script>
