<template>
  <div>
    category
  </div>
</template>

<script>
export default {
  name: 'ProductsByCategory',

  data() {
    return {
      // filterData: {
      //   brand_id: [],
      //   category_id: [],
      //   price_retail_rub: {
      //     from: 0,
      //     to: 20000,
      //   },
      //   is_new: 0,
      //   is_sale: 0,
      //   is_hit: 0,
      //   attributes: {
      //     912: ['16:10'],
      //   },
      // },
      limit: '10',
      offset: '0',

      fetchedItems: [],
    }
  },

  async fetch() {
    // const categoryId = this.$route.params.category
    const resProducts = await this.$axios.get('/catalog/product/', {
      params: {
        limit: '10',
        offset: '0',
      },
    })
    this.fetchedItems = resProducts.data.data
    return resProducts
  },
}
</script>

<style>
</style>