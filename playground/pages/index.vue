<template>
  <div>
    <div>
      <h2>Coolify Version</h2>
      <div v-if="cPending">
        Loading Version...
      </div>
      <div v-else-if="cError">
        Error: {{ cError.message }}
      </div>
      <div v-else>
        Version: {{ version }}
        <div>
          <button @click.prevent="refreshVersion">
            Refresh
          </button>
        </div>
      </div>
    </div>

    <div>
      <h2>Hetzner Servers</h2>
      <div v-if="hPending">
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
            <button @click.prevent="refreshServerList">
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
              <tr>
                <th>IP</th>
                <th>OS</th>
                <th>Location</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
              <tr>
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
            </table>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCoolify, useHetzner } from '#imports'

const { listServers } = useHetzner()
const { getVersion } = useCoolify()
const { data: version, pending: cPending, error: cError, refresh: refreshVersion } = getVersion()
const { data: serverList, pending: hPending, error: hError, refresh: refreshServerList } = listServers()
</script>
