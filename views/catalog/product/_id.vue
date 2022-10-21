<template>
  <div>
    {{ product }}
  </div>
</template>

<script>
import { fetchProductById } from '@/API-services/productService'
export default {
  name: 'ProductPage',
  data() {
    return {
      product: null,
    }
  },

  async fetch() {
    const productId = this.$route.params.id

    const [productErr, productData] = await fetchProductById(productId)

    if (productData) {
      this.product = productData
    } else {
      console.error(productErr)
    }
  },
}
</script>

<style lang="scss" scoped>
</style>