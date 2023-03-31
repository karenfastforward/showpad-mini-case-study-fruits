<script setup lang="ts">
import { Showpad } from '@showpad/experience-app-sdk';
import { onBeforeMount, ref } from 'vue'
import { TableColumnType } from 'ant-design-vue'
// import { getShowpadInstance } from '../main.ts'

import {
  Client,
  readClients,
  updateClient,
  deleteClient,
  sharePDF,
} from '../utils'

import Loading from '../components/Loading.vue'
import ClientModal from '../components/Modal.vue'

// REF
const modal = ref()

// DATA
const isLoading = ref(true)
const clients = ref<Client[]>([])

const columns = ref<TableColumnType[]>([
  {
    dataIndex: 'name',
    key: 'name',
  },
  {
    dataIndex: 'fruits',
    key: 'fruits',
  },
  {
    title: 'Action',
    key: 'action',
    width: 200,
  },
])

// METHODS
const readFieldClients = async () => {
  isLoading.value = true

  clients.value = await readClients()

  isLoading.value = false
}

const updateFieldClient = async (client: Client) => {
  isLoading.value = true

  await updateClient(client)
  clients.value = await readClients()

  isLoading.value = false
}

const deleteFieldClient = async (client: Client) => {
  isLoading.value = true

  await deleteClient(client)
  clients.value = await readClients()

  isLoading.value = false
}

const shareFieldClient = async (client: Client) => {
  isLoading.value = true

  await sharePDF(client)

  isLoading.value = false
}

// LIFECYCLE
onBeforeMount(readFieldClients)
</script>

<template>
  <client-modal ref="modal" @updateClient="updateFieldClient" />

  <a-layout
    v-if="!isLoading"
    style="min-height: calc(100vh - 48px); padding: 32px"
  >
    <a-row :gutter="[16, 16]">
      <a-col :span="24">
        <a-button type="primary" @click="modal.initCreateModal">
          New Client
        </a-button>
      </a-col>

      <a-col :span="24">
        <a-table :columns="columns" :data-source="clients">
          <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">Name</template>
            <template v-if="column.key === 'fruits'">Fruits</template>
          </template>

          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
              {{ record.name }}
            </template>

            <template v-if="column.key === 'fruits'">
              <a-space v-for="(value, key) in record.fruits" :key="key">
                <a-tag v-if="value" color="green">
                  {{ key }}
                </a-tag>
              </a-space>
            </template>

            <template v-if="column.key === 'action'">
              <a @click="shareFieldClient(record)">Share</a>
              <a-divider type="vertical" />
              <a @click="modal.initUpdateModal(record)">Edit</a>
              <a-divider type="vertical" />
              <a @click="deleteFieldClient(record)">Delete</a>
            </template>
          </template>
        </a-table>
      </a-col>
    </a-row>
  </a-layout>

  <loading v-if="isLoading" />
</template>
