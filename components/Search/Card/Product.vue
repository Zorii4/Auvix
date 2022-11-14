<template>
  <nuxt-link
    class="search-panel__products-item"
    :to="`/product/${product.brand.name}/${product.slug}`"
  >
    <div class="search-panel__products-img">
      <img
        :src="product.image_main_url"
        alt="Фото товара"
      >
    </div>
    <div class="search-panel__products-content">
      <p class="search-panel__products-name">{{product.name}}</p>
      <span class="search-panel__products-number">
        Артикул: {{product.vendor_code}}
      </span>
    </div>
    <span
      v-if="Number.parseInt(product.price_retail_rub) > 0"
      class="search-panel__products-price"
    >{{product.price_retail_rub | priceFilter}} ₽</span>
    <span
      v-else
      class="search-panel__products-price"
    >По запросу</span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'SearchCardProduct',

  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  // computed: {
  //   computedName() {
  //     const lastPartName = this.product.model || this.product.partnumber
  //     return `${this.product.short_name} ${this.product.brand.name} ${lastPartName}`
  //   },
  // },
}
</script>

<style lang="scss" scoped>
.search-panel {
  &__products-item {
    display: grid;
    grid-template-columns: 6rem 1fr auto;
    align-items: center;
    gap: 1.2rem;

    @media (max-width: 767px) {
      grid-template-columns: 4rem 1fr;
      overflow: hidden;
    }
  }

  &__products-img {
    img {
      width: 100%;
      aspect-ratio: 60 / 36;
    }
  }

  &__products-name {
    margin-bottom: 0.8rem;
    max-width: 50rem;
    font-size: 1.6rem;
    line-height: 1.25;
    overflow: hidden;

    @media (max-width: 767px) {
      font-size: 1.4rem;
      margin-bottom: 0;
    }
  }

  &__products-number {
    font-size: 1.4rem;
    line-height: 1.1;
    color: var(--jack-grey);

    @media (max-width: 767px) {
      display: none;
    }
  }

  &__products-price {
    align-self: flex-start;

    font-size: 1.6rem;
    line-height: 1.25;

    @media (max-width: 767px) {
      display: none;
    }
  }
}
</style>