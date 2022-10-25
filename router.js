import Vue from 'vue'
import Router from 'vue-router'

// Module and Interactive Pages

import MainPage from '@/views/main-page.vue'
import NewsPage from '@/views/news-page.vue'

// Catalog Pages
import AllBrands from '@/views/catalog/all-brands.vue'
import BrandItem from '@/views/catalog/brands/brand-item.vue'
import Catalog from '@/views/catalog/index.vue'
import CatalogByCategory from '@/views/catalog/_category.vue'
import ProductPage from '@/views/catalog/product/_id.vue'

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
        path: '/product/:id',
        name: 'ProductPage',
        component: ProductPage,
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
        path: '/catalog/brands/:id',
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
