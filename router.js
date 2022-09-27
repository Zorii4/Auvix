import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '@/views/main-page.vue'
import NewsPage from '@/views/news-page.vue'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path:'/news/:code',
        name:'NewsPage',
        component: NewsPage
      },
      {
        path: '/(.*)',
        name: 'MainPage',
        component: MainPage
      }
    ]
  })
}