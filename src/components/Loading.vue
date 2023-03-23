<script setup lang="ts">
import { LoadingOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <a-row align="middle" justify="center" style="min-height: calc(100vh - 48px)">
    <a-spin size="large">
      <template #indicator>
        <loading-outlined />
      </template>
    </a-spin>
  </a-row>
</template>
