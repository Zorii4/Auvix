import Vue from 'vue'
import Router from 'vue-router'

// Module and Interactive Pages

import MainPage from '@/views/main-page.vue'
import InteractiveContentPage from '~/views/interactive-content-page.vue'

// Catalog Pages
import AllBrands from '@/views/catalog/all-brands.vue'
import BrandItem from '@/views/catalog/brands/brand-item.vue'
import Catalog from '@/views/catalog/index.vue'
import CatalogByCategory from '@/views/catalog/_category.vue'
import ProductPage from '@/views/catalog/product/_id.vue'
import SearchPage from '@/views/search/index.vue'

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
        path: '/search/:searchedString',
        name: 'SearchPage',
        component: SearchPage,
      },
      {
        path: '/product/:brandName/:idOrSlug',
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
        path: '/catalog/brands/:slug',
        name: 'BrandItem',
        component: BrandItem,
      },
      {
        path: '(.*)/interactive/:code',
        name: 'InteractiveContentPage',
        component: InteractiveContentPage,
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
