<script setup lang="ts">
import { ref } from 'vue'

import Inside from './views/Inside.vue'
import Field from './views/Field.vue'

const activeKey = ref('Inside')
</script>

<template>
  <a-layout style="min-height: 100vh">
    <a-layout-content>
      <a-tabs
        v-model:activeKey="activeKey"
        :tabBarStyle="{ padding: '0 32px', marginBottom: '0px' }"
      >
        <a-tab-pane key="Inside" tab="Inside Sales">
          <inside />
        </a-tab-pane>

        <a-tab-pane key="Field" tab="Field Sales">
          <field />
        </a-tab-pane>
      </a-tabs>
    </a-layout-content>
  </a-layout>
</template>
