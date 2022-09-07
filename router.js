import Vue from 'vue'
import Router from 'vue-router'

import PageConstructor from '@/components/PageConstructor'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/(.*)',
        name: 'PageConstructor',
        component: PageConstructor
      }
    ]
  })
}