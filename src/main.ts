import { createApp } from 'vue'
import Antd from 'ant-design-vue'

import App from './App.vue'

import 'ant-design-vue/dist/antd.less'

const main = async (): Promise<void> => {
  const app = createApp(App)

  app.use(Antd)
  app.mount('#app')
}

main()
