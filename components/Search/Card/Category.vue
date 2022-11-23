<template>
  <nuxt-link
    :to="`/catalog/${computedIdOrSlug}`"
    class="category"
  >
    <span class="category__name">{{category.name}}</span>
    <span class="category__subtitle">Категория</span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'SearchCardСategory',

  props: {
    category: {
      type: Object,
      required: true,
    },
  },

  computed: {
    computedIdOrSlug() {
      return this.category.slug || this.category.id
    },
  },
}
</script>

<style lang="scss" scoped>
.category {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}

.category__name {
  text-transform: uppercase;
  font-size: 16px;
  line-height: 20px;
}

.category__subtitle {
  color: #5b5e66;
  font-size: 14px;
  line-height: 16px;
}
</style>