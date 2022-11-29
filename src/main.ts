import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import Garfish from 'garfish'
const app = createApp(App)
Garfish.run({
  basename: '/',
  domGetter: '#content',
  apps: [
    {
      name: 'demo',
      activeWhen: '/demo',
      entry: 'http://localhost:3000/', // js入口
      sandbox: {
        open: false
        // snapshot: true, 或者只开启快照沙箱
      }
    },
    {
      name: 'common',
      activeWhen: '/common',
      entry: 'http://localhost:3001/', // js入口
      sandbox: {
        open: false
        // snapshot: true, 或者只开启快照沙箱
      }
    }
  ]
})
app.use(ElementPlus)
app.use(router)
app.use(createPinia())
app.mount('#app')
