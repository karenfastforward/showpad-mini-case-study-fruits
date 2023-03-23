<script setup lang="ts">
import { ref, reactive, toRaw } from 'vue'

import { CLIENT_DEFAULT, Client, antFormValidation } from '../utils'

// EMIT
const emit = defineEmits(['updateClient'])

// REF
const form = ref()

// DATA
const mode = ref<'Create' | 'Update'>()

const isVisible = ref(false)
const isLoading = ref(false)

const clientFormState = reactive<Client>(CLIENT_DEFAULT())

// EXPOSED METHODS
const initCreateModal = () => {
  mode.value = 'Create'
  isVisible.value = true

  Object.assign(clientFormState, CLIENT_DEFAULT())
}

const initUpdateModal = (client: Client) => {
  mode.value = 'Update'
  isVisible.value = true

  Object.assign(clientFormState, client)
}

defineExpose({
  initCreateModal,
  initUpdateModal,
})

// METHODS
const updateModalClient = async () => {
  const isValid = await antFormValidation(form)

  if (isValid) {
    emit('updateClient', toRaw(clientFormState))
    isVisible.value = false
  }
}
</script>

<template>
  <a-modal :title="`${mode} client`" v-model:visible="isVisible">
    <template #footer>
      <a-button :disabled="isLoading" @click="() => (isVisible = false)">
        Cancel
      </a-button>

      <a-button
        type="primary"
        html-type="submit"
        :loading="isLoading"
        @click="updateModalClient"
      >
        {{ mode }}
      </a-button>
    </template>

    <a-form
      ref="form"
      layout="vertical"
      autocomplete="off"
      :model="clientFormState"
    >
      <a-space direction="vertical" style="width: 100%">
        <a-form-item
          name="name"
          label="Client name"
          :rules="[
            { required: true, message: 'Please input the client name!' },
          ]"
        >
          <a-input v-model:value="clientFormState.name" />
        </a-form-item>

        <a-checkbox v-model:checked="clientFormState.fruits.Blueberries">
          Blueberries
        </a-checkbox>

        <a-checkbox v-model:checked="clientFormState.fruits.Cranberries">
          Cranberries
        </a-checkbox>

        <a-checkbox v-model:checked="clientFormState.fruits.Grapes">
          Grapes
        </a-checkbox>

        <a-checkbox v-model:checked="clientFormState.fruits.Pomegranates">
          Pomegranates
        </a-checkbox>
      </a-space>
    </a-form>
  </a-modal>
</template>
