import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '@/views/main-page.vue'
import NewsPage from '@/views/news-page.vue'
import AllBrands from '@/views/catalog/all-brands.vue'
import BrandItem from '@/views/catalog/brands/brand-item.vue'
import Catalog from '@/views/catalog/index.vue'
import CatalogByCategory from '@/views/catalog/_category.vue'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/catalog/brands',
        name: 'AllBrands',
        component: AllBrands,
      },
      {
        path: '/catalog/:category',
        name: 'CatalogByCategory',
        component: CatalogByCategory,
      },
      {
        path: '/catalog',
        name: 'Catalog',
        component: Catalog,
      },
      {
        path: '/catalog/brands/:slug',
        name: 'BrandItem',
        component: BrandItem,
      },
      {
        path: '/news/:code',
        name: 'NewsPage',
        component: NewsPage,
      },
      {
        path: '/(.*)',
        name: 'MainPage',
        component: MainPage,
      },
    ],
    scrollBehavior(_to, _from, savedPosition) {
      return new Promise((resolve) => {
        if (savedPosition) {
          setTimeout(() => {
            resolve(savedPosition)
          }, 400)
        } else {
          resolve({ x: 0, y: 0 })
        }
      })
    },
  })
}
