import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // Primary
          'primary-color': '#222370',
          'primary-1': '#F7F7FA',

          // Card
          'card-background': '#FAFAFA',

          // Menu
          'menu-bg': '#fff',
          'menu-inline-submenu-bg': '#fff',

          // Buttons
          'border-radius-base': '4px',

          // Layout
          'layout-body-background': '#fff',
          'layout-header-background': '#fff',
        },
        javascriptEnabled: true,
      },
    },
  },
})
