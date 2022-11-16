<template>
  <section class="search-page">
    <div class="container">
      <div class="search-page__header">
        <h2 class="search-page__title section-title">
          {{searchedString}}
          <span>{{ countItems }}</span>
        </h2>
      </div>
      <div class="search-page__body">
        <div class="search-page__content">
          <div class="search-page__content-filter">
            <div class="search-page__content-filter-top">
              <div class="search-page__content-select-wrapper">
              </div>
              <CatalogViewChanger
                :currentLayoutType="layoutType"
                @changeLayoutCatalog="changeLayoutType"
              />
            </div>
          </div>
          <div class="search-page__notice">
            <p>
              В карточке отражена рекомендуемая розничная цена, точную цену можно узнать в личном кабинете или по запросу
            </p>
          </div>
          <div class="search-page__list">
            <ul
              class="catalog-list"
              :class="{'catalog-list--tile': layoutType === 'tile'}"
            >
              <li
                v-for="product of fetchedItems"
                :key="product.id"
              >
                <CatalogCardProduct
                  :name="product.name"
                  :productId="product.id"
                  :slug="product.slug"
                  :brandName="product.brand.name"
                  :previwImageUrl="product.image_main_url"
                  :articleCode="product.article || product.vendor_code"
                  :price="product.price_retail_rub"
                  :currency="product.currency_name"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { fetchSearchedItems } from '@/API-services/searchService'
export default {
  name: 'ProductsByCategory',

  data() {
    return {
      layoutType: 'row',
      loading: false,

      searchedString: null,
      searchedCategory: null,

      fetchedItems: [],
    }
  },

  async fetch() {
    const querySearchedString = this.$route.query.searchedString
    const querySearchedCategory = this.$route.query.searchedCategory
    const layoutType = this.$route.query.view

    if (querySearchedString) {
      this.searchedString = querySearchedString
    } else {
      this.$router.push('/')
    }

    if (querySearchedCategory) {
      this.searchedCategory = querySearchedCategory
    }

    if (layoutType) {
      this.layoutType = layoutType
    }

    const resProducts = await this.fetchProducts()
    return resProducts
  },

  computed: {
    countItems() {
      const countItems = this.fetchedItems.length

      return countItems || ''
    },
  },

  methods: {
    changeLayoutType(type) {
      this.layoutType = type
      this.pushQueryStateSearch()
    },
    pushQueryStateSearch() {
      const tempQueryList = {
        ...this.$route.query,
        view: this.layoutType,
      }
      this.$router.replace({ query: tempQueryList })
    },

    async fetchProducts() {
      this.loading = true
      const [err, data] = await fetchSearchedItems(
        this.searchedString,
        'catalog',
        this.searchedCategory
      )
      if (data) {
        this.fetchedItems = data.catalog_product
      }

      if (err) {
        console.error(err)
      }
      this.loading = false
    },
  },
}
</script>

<style lang="scss">
.search-page {
  padding: 2rem 0 6rem;

  &__filter-box {
    grid-column: span 3;
    padding-right: 3.2rem;
  }

  @media (max-width: 1599px) {
    padding-bottom: 5.6rem;
  }

  @media (max-width: 1199px) {
    padding-bottom: 5.2rem;
  }

  @media (max-width: 1023px) {
    padding-top: 1.6rem;
    padding-bottom: 4.8rem;
  }

  @media (max-width: 767px) {
    padding-top: 0.8rem;
    padding-bottom: 4rem;
  }

  .container {
    @media (max-width: 767px) {
      padding: 0;
    }
  }

  &__breadcrumbs {
    margin-bottom: 2rem;

    @media (max-width: 1023px) {
      margin-bottom: 1.2rem;
    }
  }

  &__header {
    padding-bottom: 5.2rem;

    @media (max-width: 1599px) {
      padding-bottom: 4.8rem;
    }

    @media (max-width: 1199px) {
      padding-bottom: 3.2rem;
    }

    @media (max-width: 1023px) {
      padding-bottom: 2.8rem;
    }

    @media (max-width: 767px) {
      padding-bottom: 2rem;
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }

  &__title {
    display: flex;
    align-items: baseline;
    gap: 2rem;
    margin-bottom: 0;

    @media (max-width: 1199px) {
      gap: 1.6rem;
    }

    @media (max-width: 767px) {
      gap: 1.2rem;
    }

    span {
      font-size: 2rem;
      line-height: 1.2;
      color: var(--jack-grey);

      @media (max-width: 1199px) {
        font-size: 1.8rem;
      }

      @media (max-width: 767px) {
        font-size: 1.4rem;
      }
    }
  }

  &__body {
    width: 100%;
  }

  &__content {
    width: 100%;
  }

  &__content-filter {
    position: relative;
    z-index: 2;
  }

  &__content-filter-top {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding-bottom: 2.8rem;

    border-bottom: 1px solid var(--border-grey);

    @media (max-width: 1599px) {
      padding-bottom: 2.6rem;
    }

    @media (max-width: 1199px) {
      align-items: center;
      padding-bottom: 2.3rem;
    }

    @media (max-width: 767px) {
      padding-bottom: 2rem;
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }

  &__content-select-wrapper {
    display: flex;
    align-items: center;
    gap: 4rem;

    @media (max-width: 1199px) {
      gap: 3.2rem;
    }

    @media (max-width: 767px) {
      display: none;
    }

    .choices {
      padding: 0;
      border: 0;
      background: none;
    }

    .choices__item {
      font-size: 1.6rem;

      @media (max-width: 1023px) {
        font-size: 1.4rem;
      }
    }

    .choices__item--choice {
      padding: 1.4rem 0;
      font-size: 1.6rem;

      &:hover {
        background-color: transparent;
      }

      @media (max-width: 1199px) {
        font-size: 1.5rem;
      }
    }

    .choices__list--dropdown {
      width: 24.4rem;
      padding: 0.4rem 0.8rem 0 1.6rem;

      box-shadow: 0 0.8rem 3.2rem rgba(32, 34, 38, 0.08);
    }

    .choices__list--dropdown .choices__item--selectable.is-highlighted {
      background-color: transparent;
    }
  }

  &__content-currency-button {
    display: none;
    justify-content: center;
    align-items: center;
    width: 4.8rem;
    height: 3.2rem;

    border: 1px solid var(--border-grey);
    border-radius: 4rem;

    font-size: 1.6rem;
    line-height: 1.25;

    @media (max-width: 767px) {
      display: flex;
    }
  }

  &__content-sort {
    display: none;
    align-items: center;
    gap: 0.8rem;

    cursor: pointer;

    font-size: 1.6rem;
    line-height: 1.25;

    @media (max-width: 767px) {
      display: flex;
    }

    svg {
      width: 0.6rem;
      height: 0.8rem;
      transform: rotate(90deg);
    }
  }

  &__content-filter-show {
    display: none;
    align-items: center;
    gap: 0.8rem;
    padding: 0.6rem 1.6rem;
    margin-left: auto;
    margin-right: 2rem;

    border: 1px solid var(--border-grey);
    border-radius: 4rem;
    cursor: pointer;

    font-size: 1.6rem;
    line-height: 1.25;

    svg {
      width: 2.4rem;
      height: 2.4rem;

      color: var(--easy-dark);
    }

    &:hover {
      opacity: 1;
    }

    @media (max-width: 1199px) {
      display: flex;
    }

    @media (max-width: 767px) {
      padding: 0.4rem 1.2rem;
      margin-right: 0;
      margin-left: 0;
    }

    span {
      @media (max-width: 767px) {
        display: none;
      }
    }
  }

  &__content-grid-filter {
    position: relative;

    display: flex;
    align-items: center;
    gap: 3.4rem;
    padding: 0.2rem 0;

    @media (max-width: 1023px) {
      display: none;
    }

    &::before {
      content: '';

      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      width: 0.2rem;
      height: calc(100% + 0.4rem);

      background: var(--border-grey);
    }

    button.active {
      svg {
        fill: var(--jack-grey);
      }
    }

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  &__content-filter-bottom {
    padding: 2.8rem 0;
    border-bottom: 1px solid var(--border-grey);

    @media (max-width: 1023px) {
      padding: 2rem 0;
    }

    @media (max-width: 767px) {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }

  &__content-filter-reset {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    @media (max-width: 1023px) {
      gap: 0.4rem;
    }
  }

  &__notice {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 1.2rem;
    margin: 2.8rem 0 2.8rem 0;

    border-radius: 1.2rem;
    background-color: #79dfff;

    @media (max-width: 1599px) {
      padding: 1.8rem;
    }

    @media (max-width: 767px) {
      flex-direction: column;
      gap: 0.8rem;
      padding: 1.6rem 1.2rem;
      margin-top: 2rem;
      margin-left: 2rem;
      margin-right: 2rem;
    }

    &::before {
      content: '';

      width: 3.6rem;
      height: 3.6rem;

      border-radius: 50%;
      background: linear-gradient(
        178.28deg,
        #ffffff 39.83%,
        rgba(255, 255, 255, 0) 100.57%
      );

      @media (max-width: 1199px) {
        width: 3.2rem;
        height: 3.2rem;
      }
    }

    p {
      font-size: 1.8rem;
      line-height: 1.3;

      @media (max-width: 1199px) {
        font-size: 1.6rem;
      }

      @media (max-width: 767px) {
        text-align: center;
        font-size: 1.4rem;
      }
    }
  }

  &__list {
    margin-bottom: 4rem;

    @media (max-width: 767px) {
      margin-top: 2.8rem;
      margin-bottom: 2.4rem;
      padding: 0.4rem;

      border-radius: 1.6rem;
      background-color: var(--grey);
    }

    .search-page-list {
      @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
      }
    }
  }

  &__pagination {
    @media (max-width: 767px) {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }

  &__visited {
    padding-bottom: 0.7rem;
  }
}
.search-page-list-empty {
  margin-top: 20px;
  font-size: 18px;
}
</style>