<template>
  <div v-if="product">
    <section class="product__card">
      <div class="wide-container">
        <CatalogCardProductSingle
          availability='в наличии на складе'
          :price='product.price_retail_rub'
          :articleCode="product.article || product.vendor_code"
          :productName='product.name'
          :currecy="product.currency_name"
          :productMainImageUrl="product.image_main_url"
          :productDescription="product.description"
        />
      </div>
    </section>
    <div class="product__tabs">
      <div class="container">
        <CommonTabs
          :pickedTab="currentTab"
          :tabsData="tabsList"
          @changeTab="changeTab"
        />
      </div>
    </div>
    <div class="product__tabs-content">
      <section
        id="tab_1"
        class="product__description"
        :class="{active: currentTab === 'Описание'}"
      >
        <div class="container">
          <div class="product-description">
            <div class="product-description__text-column">
              <div class="product-description__text">
                <p
                  v-if="calculatedProductDescription"
                  v-html="unEscape(calculatedProductDescription)"
                >
                </p>
              </div>
              <!-- <button class="product-description__more-button">
                Показать полное описание
                <svg>
                  <use xlink:href="#slider-arrow"></use>
                </svg>
              </button> -->
            </div>
            <div class="product-description__img-column">
              <nuxt-link
                class="product-description__img-block"
                :to="{name: 'BrandItem', params: {slug: product.brand.slug}}"
              >
                <img
                  :src="$config.baseURLImg + product.brand.img"
                  alt="Фото бренда"
                >
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>
      <section
        class="product__characteristic"
        :class="{active: currentTab === 'Характеристики'}"
      >
        <div class="container">
          <div class="product-characteristic">
            <div class="product-characteristic__row">
              <h3 class="product-characteristic__row-title">Основные</h3>
              <ul class="product-characteristic__properties">
                <li
                  v-if="product.model"
                  class="product-characteristic__property-wrapper"
                >
                  <div class="product-characteristic__property">
                    <span class="product-characteristic__property-name">Модель</span>
                    <span class="product-characteristic__property-value">{{ product.model }}</span>
                  </div>
                </li>
                <li
                  v-if="product.vendor_code"
                  class="product-characteristic__property-wrapper"
                >
                  <div class="product-characteristic__property">
                    <span class="product-characteristic__property-name">Артикул</span>
                    <span class="product-characteristic__property-value">{{ product.vendor_code }}</span>
                  </div>
                </li>
                <li
                  v-if="product.partnumber"
                  class="product-characteristic__property-wrapper"
                >
                  <div class="product-characteristic__property">
                    <span class="product-characteristic__property-name">Серия</span>
                    <span class="product-characteristic__property-value">{{ product.partnumber }}</span>
                  </div>
                </li>
                <li
                  v-for="(attribute, idx) of product.attributes"
                  :key="idx"
                  class="product-characteristic__property-wrapper"
                >
                  <div class="product-characteristic__property">
                    <span class="product-characteristic__property-name">{{ attribute.name }}</span>
                    <span class="product-characteristic__property-value">{{ attribute.value }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { fetchProductById } from '@/API-services/productService'
export default {
  name: 'ProductPage',
  data() {
    return {
      product: null,
      currentTab: 'Описание',
      tabsList: ['Описание', 'Характеристики'],
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

  head() {
    return {
      title: this.product?.meta_title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product?.meta_description,
        },
      ],
    }
  },

  computed: {
    calculatedProductDescription() {
      if (
        this.product.description &&
        typeof this.product.description === 'string'
      ) {
        return this.product.description
          .replaceAll(/&lt;/g, '<')
          .replaceAll(/&gt;/g, '>')
          .replaceAll(/&quot;/g, '"')
          .replaceAll(/&#39;/g, "\\'")
          .replaceAll(/&amp;/g, '&')
      }
      return null
    },
  },
  methods: {
    unEscape(htmlStr) {
      htmlStr = htmlStr.replace(/&lt;/g, '<')
      htmlStr = htmlStr.replace(/&gt;/g, '>')
      htmlStr = htmlStr.replace(/&quot;/g, '"')
      htmlStr = htmlStr.replace(/&#39;/g, "\\'")
      htmlStr = htmlStr.replace(/&amp;/g, '&')
      return htmlStr
    },
    changeTab(tab) {
      this.currentTab = tab
    },
  },
}
</script>

<style lang="scss" scoped>
.product {
  &__card {
    padding: 0.4rem 0 0;
  }

  &__tabs {
    border-bottom: 1px solid var(--border-grey);
  }

  &__tabs-content section {
    position: absolute;
    opacity: 0;
    visibility: hidden;

    width: 100%;

    transition: 0.2s;

    &.active {
      position: static;
      opacity: 1;
      visibility: visible;
    }
  }

  &__description {
    padding: 5.2rem 0 6rem;

    @media (max-width: 1599px) {
      padding: 4.8rem 0 5.6rem;
    }

    @media (max-width: 1199px) {
      padding: 4rem 0 5.2rem;
    }

    @media (max-width: 1023px) {
      padding: 3.6rem 0 5.2rem;
    }

    @media (max-width: 767px) {
      padding: 3.2rem 0 4rem;
    }
  }

  &__accessories {
    padding-bottom: 6rem;

    @media (max-width: 1599px) {
      padding-bottom: 5.6rem;
    }

    @media (max-width: 1199px) {
      padding-bottom: 5.2rem;
    }

    @media (max-width: 1023px) {
      padding-bottom: 4.8rem;
    }

    @media (max-width: 767px) {
      padding-bottom: 4rem;
    }
  }

  &__accessories-header {
    padding-bottom: 4rem;

    @media (max-width: 1599px) {
      padding-bottom: 3.6rem;
    }

    @media (max-width: 1199px) {
      padding-bottom: 3.2rem;
    }

    @media (max-width: 1023px) {
      padding-bottom: 2.8rem;
    }

    @media (max-width: 767px) {
      padding-bottom: 2rem;
    }

    h2 {
      max-width: 36.7rem;
    }
  }

  &__application {
    padding-bottom: 6rem;

    @media (max-width: 1599px) {
      padding-bottom: 5.6rem;
    }

    @media (max-width: 1199px) {
      padding-bottom: 5.2rem;
    }

    @media (max-width: 1023px) {
      padding-bottom: 4.8rem;
    }

    @media (max-width: 767px) {
      padding-bottom: 4rem;
    }

    .article__text-content {
      max-width: 64.5rem;

      p {
        max-width: 57.5rem;
      }
    }
  }

  &__application-header {
    padding-bottom: 4rem;

    @media (max-width: 1599px) {
      padding-bottom: 3.6rem;
    }

    @media (max-width: 1199px) {
      display: none;
    }

    h2 {
      max-width: 36.7rem;
    }
  }

  &__analog {
    padding-bottom: 6rem;

    @media (max-width: 1599px) {
      padding-bottom: 5.6rem;
    }

    @media (max-width: 1199px) {
      padding-bottom: 5.2rem;
    }

    @media (max-width: 1023px) {
      padding-bottom: 4.8rem;
    }

    @media (max-width: 767px) {
      padding-bottom: 4rem;
    }
  }

  &__analog-header {
    padding-bottom: 4rem;

    @media (max-width: 1599px) {
      padding-bottom: 3.6rem;
    }

    @media (max-width: 1199px) {
      padding-bottom: 3.2rem;
    }

    @media (max-width: 1023px) {
      padding-bottom: 2.8rem;
    }

    @media (max-width: 767px) {
      padding-bottom: 2rem;
    }

    h2 {
      max-width: 36.7rem;
    }
  }

  &__characteristic {
    padding-bottom: 6rem;

    @media (max-width: 1599px) {
      padding-bottom: 5.6rem;
    }

    @media (max-width: 1199px) {
      padding-bottom: 5.2rem;
    }

    @media (max-width: 1023px) {
      padding-bottom: 4.8rem;
    }

    @media (max-width: 767px) {
      padding-bottom: 4rem;
    }
  }

  &__documentation {
    padding: 5.2rem 0 6rem;

    @media (max-width: 1599px) {
      padding: 4.8rem 0 5.6rem;
    }

    @media (max-width: 1199px) {
      padding: 4rem 0 5.2rem;
    }

    @media (max-width: 1023px) {
      padding: 3.6rem 0 4.8rem;
    }

    @media (max-width: 767px) {
      padding: 3.2rem 0 4rem;
    }
  }

  &__review {
    padding: 5.2rem 0 6rem;

    @media (max-width: 1599px) {
      padding: 4.8rem 0 6rem;
    }

    @media (max-width: 1199px) {
      padding: 4rem 0 5.2rem;
    }

    @media (max-width: 1023px) {
      padding: 3.6rem 0 4.8rem;
    }

    @media (max-width: 767px) {
      padding: 3.2rem 0 4rem;
    }
  }

  &__options {
    padding: 5.2rem 0 6rem;

    @media (max-width: 1599px) {
      padding: 4.8rem 0 5.6rem;
    }

    @media (max-width: 1199px) {
      padding: 4rem 0 5.2rem;
    }

    @media (max-width: 1023px) {
      padding: 3.6rem 0 4.8rem;
    }

    @media (max-width: 767px) {
      padding: 3.2rem 0 4rem;
    }
  }

  &__visited {
    padding-bottom: 0.8rem;
  }
}
.product-description {
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3.2rem 0.4rem;

  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 767px) {
    gap: 2.4rem;
  }

  &__text-column {
    display: flex;
    flex-direction: column;
    gap: 2.8rem;

    @media (max-width: 1599px) {
      gap: 2.4rem;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 85rem;

    p {
      font-size: 2rem;
      line-height: 1.2;
      color: var(--easy-dark);

      @media (max-width: 1199px) {
        font-size: 1.8rem;
      }
    }
  }

  &__more-button {
    display: flex;
    align-items: center;
    gap: 0.9rem;

    font-size: 1.8rem;
    line-height: 1.3;
    color: #3037eb;

    transition: 0.3s;

    &:hover {
      color: #696fff;
    }

    @media (max-width: 767px) {
      font-size: 1.6rem;
      gap: 0.8rem;
    }

    svg {
      width: 0.6rem;
      height: 0.8rem;

      transform: rotate(90deg);
    }
  }

  &__img-column {
    display: flex;
  }

  &__img-block {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24.3rem;
    height: 14rem;
    margin-left: auto;

    border-radius: 2rem;
    background: var(--grey);

    transition: 0.3s;

    &:hover {
      background: var(--border-grey);
      opacity: 1;
    }

    @media (max-width: 1199px) {
      width: 21.6rem;
      height: 12.4rem;
    }

    @media (max-width: 1023px) {
      width: 19.6rem;
      height: 11.2rem;
    }

    @media (max-width: 767px) {
      width: 15.8rem;
      height: 8.8rem;
    }

    img {
      max-width: 80%;
    }
  }
}
.product-characteristic {
  &__row {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: flex-start;
    padding: 3.6rem 0;

    border-bottom: 1px solid var(--border-grey);

    @media (max-width: 1599px) {
      padding: 3.2rem 0;
    }

    @media (max-width: 1199px) {
      padding: 2.8rem 0;
    }

    @media (max-width: 1023px) {
      padding: 2.4rem 0;
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      padding: 3.2rem 0 0;
      border-bottom: 0;
    }
  }

  &__row-title {
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 1.2;

    @media (max-width: 1199px) {
      font-size: 2rem;
    }

    @media (max-width: 767px) {
      margin-bottom: 2rem;
    }
  }

  &__property-wrapper {
    border-bottom: 1px solid var(--border-grey);
    padding: 2rem 0;

    &:last-child {
      border-bottom: 0;
      padding-bottom: 0;

      @media (max-width: 767px) {
        padding-bottom: 2rem;
        border-bottom: 1px solid var(--border-grey);
      }
    }

    &:first-child {
      padding-top: 0;
    }
  }

  &__property {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 2rem;
    line-height: 1.2;

    @media (max-width: 1199px) {
      font-size: 1.8rem;
    }

    @media (max-width: 767px) {
      font-size: 1.6rem;
    }
  }

  &__property-name {
    color: var(--jack-grey);
  }

  &__property-value {
    text-align: right;
  }
}
</style>