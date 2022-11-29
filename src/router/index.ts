import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/layout/index.vue'), // 注意这里要带上 文件后缀.vue
    meta: { title: '首页' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'), // 注意这里要带上 文件后缀.vue
    meta: { title: '登录' }
  }
]

const index = createRouter({
  history: createWebHistory(),
  routes
})

export default index
