<script setup lang="ts">
import { Showpad } from '@showpad/experience-app-sdk'
import { onBeforeMount, ref } from 'vue'
import { FruitPDF, openPDF, readFruitPDFs } from '../utils'

import Loading from '../components/Loading.vue'

// DATA
const isLoading = ref(true)
const fruitPDFs = ref<FruitPDF[]>([])

// METHODS
const readInsideFruits = async () => {
  isLoading.value = true

  try {
    fruitPDFs.value = await readFruitPDFs()
  } catch (error) {
    Showpad.handleErrorWithToast(error);
  }

  isLoading.value = false
}

// LIFECYCLE
onBeforeMount(readInsideFruits)
</script>

<template>
  <a-layout
    v-if="!isLoading"
    style="min-height: calc(100vh - 48px); padding: 32px"
  >
    <a-row :gutter="[16, 16]">
      <a-col
        v-for="fruitPDF in fruitPDFs"
        :key="fruitPDF.name"
        :xs="24"
        :sm="12"
        :md="6"
        :lg="4"
      >
        <a-card @click="openPDF(fruitPDF.slug)" style="cursor: pointer">
          <template #cover>
            <a-image :preview="false" :src="fruitPDF.previewUrl"></a-image>
          </template>

          <a-card-meta :title="fruitPDF.name"></a-card-meta>
        </a-card>
      </a-col>
    </a-row>
  </a-layout>

  <loading v-if="isLoading" />
</template>
