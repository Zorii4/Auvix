<template>
  <nuxt-link
    :to="`/catalog/brands/${brand.slug}`"
    class="brand"
  >
    <span class="brand__name">{{brand.name}}</span>
    <span class="brand__subtitle">Бренд</span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'SearchCardBrand',

  props: {
    brand: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.brand {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}

.brand__name {
  text-transform: uppercase;
  font-size: 16px;
  line-height: 20px;
}

.brand__subtitle {
  color: #5b5e66;
  font-size: 14px;
  line-height: 16px;
}
</style>