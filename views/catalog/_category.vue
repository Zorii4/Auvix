<template>
  <section class="catalog">
    <div class="container">
      <div class="catalog__header">
        <div class="catalog__breadcrumbs">
          <!-- {{> breadcrumbs data=breadcrumbsData }} -->
        </div>
        <h2
          v-if="currentCategory"
          class="catalog__title section-title"
        >
          {{currentCategory.name}}
          <span>{{ countItems }}</span>
        </h2>
      </div>
      <div class="catalog__body">
        <CatalogFiltersProducts
          :filterInitialList="currentCategory.attributes4filter"
          :subCategoriesList="currentCategory.children"
          :filterAttributesValues="filterAttributes"
          :subCategoriesValue="subCategories"
          :priceFrom="priceFrom"
          :priceTo="priceTo"
          @changeCategory="changeCategory"
          @changeFilterAtributes="changeFilterAtributes"
          @changePriceFrom="priceFrom = $event"
          @changePriceTo="priceTo = $event"
        />
        <div class="catalog__content">
          <!-- <CatalogFiltersPickedTopRow /> -->
          <div class="catalog__notice">
            <p>
              В карточке отражена рекомендуемая розничная цена, точную цену можно узнать в личном кабинете или по запросу
            </p>
          </div>
          <div
            v-if="!loading"
            class="catalog__list catalog-grid-js"
          >
            <ul
              v-if="fetchedItems.length > 0"
              class="catalog-list"
              :class="{'catalog-list--tile': gridLayout}"
            >
              <li>
                <CatalogCardProduct
                  v-for="product of fetchedItems"
                  :key="product.id"
                  :name="product.name"
                  :productId="product.id"
                  :characteristics="product.attributes.slice(0, 5)"
                  :rawTagsInfo="{
                    new: product.is_new,
                    hit: product.is_hit,
                    sale: product.is_sale,
                  }"
                  :previwImageUrl="product.image_short_url"
                  :articleCode="product.article || product.vendor_code"
                  :price="product.price_retail"
                  :currency="product.currency_name"
                  :needPriceRequets="!!product.need_request_price"
                />
              </li>
            </ul>
          </div>
          <div class="catalog__pagination">
            <paginate
              v-if="pageCount > 1 && !loading"
              v-model="currentPage"
              :pageCount="pageCount"
              :pageRange="3"
              :marginPages="2"
              prevText="Назад"
              nextText="Вперед"
              containerClass="pagination"
              pageClass="pagination__number"
              prevClass="pagination__button"
              nextClass="pagination__button"
            >
              >
            </paginate>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { fetchFilteredProducts } from '@/API-services/catalogService'
import { fetchCategoryById } from '@/API-services/categoriesService'
export default {
  name: 'ProductsByCategory',

  data() {
    return {
      currentPage: 1,

      loading: false,

      limit: 10,
      offset: 0,
      gridLayout: false,
      countItems: 0,

      filterAttributes: {},
      subCategories: [],
      priceFrom: '',
      priceTo: '',

      fetchedItems: [],
      currentCategory: null,
      subCategoryId: null,
    }
  },

  async fetch() {
    const categoryId = this.$route.params.category
    const subCategoryId = this.$route.query.subCategory
    const currentPage = this.$route.query.page
    const filterAttributes = this.$route.query.filterAttributes
    const [categoryErr, categoryData] = await fetchCategoryById(categoryId)
    console.error(categoryErr)
    if (categoryData) {
      this.currentCategory = categoryData
      if (categoryData.attributes4fast_filter.length > 0) {
        categoryData.attributes4fast_filter.forEach((el) => {
          this.$set(
            this.filterAttributes,
            String(el.id),
            el.filter_type === 'list' ? [] : ''
          )
        })
      }
    }
    if (subCategoryId && Array.isArray(subCategoryId)) {
      this.subCategories = subCategoryId
    }
    if (subCategoryId && typeof subCategoryId === 'string') {
      this.subCategories.push(subCategoryId)
    }
    if (currentPage) {
      this.currentPage = Number(currentPage)
    }
    if (filterAttributes) {
      const tempFilterList = JSON.parse(filterAttributes)
      Object.entries(tempFilterList).forEach(([key, value]) => {
        this.filterAttributes[String(key)] = value
      })
    }
    const resProducts = await this.fetchProducts()
    return resProducts
  },

  computed: {
    pageCount() {
      return Math.ceil(this.countItems / this.limit)
    },
  },

  watch: {
    currentPage() {
      this.$nextTick(async () => {
        this.pushQueryStateCatalog()
        await this.fetchProducts()
      })
    },
  },

  methods: {
    pushQueryStateCatalog() {
      const tempQueryList = {
        page: this.currentPage,
      }
      if (this.subCategories.length > 0) {
        tempQueryList.subCategory = this.subCategories
      }
      if (this.priceFrom) {
        tempQueryList.priceFrom = this.priceFrom
      }
      if (this.priceTo) {
        tempQueryList.priceTo = this.priceTo
      }
      if (Object.keys(this.filterAttributes).length > 0) {
        const tempFilterList = Object.entries(this.filterAttributes).filter(
          ([_key, value]) => value.length > 0
        )
        tempQueryList.filterAttributes = JSON.stringify(
          Object.fromEntries(tempFilterList)
        )
      }
      this.$router.push({ query: tempQueryList })
    },

    async fetchProducts() {
      this.loading = true
      const searchedCategory =
        this.subCategories.length > 0
          ? this.subCategories
          : [this.currentCategory.id]
      const calculatedOffset = this.limit * (this.currentPage - 1)
      const [err, data] = await fetchFilteredProducts(
        searchedCategory,
        calculatedOffset,
        this.limit
      )
      if (data) {
        this.fetchedItems = data.data
        this.countItems = data.count
        this.loading = false
        return data
      } else {
        console.log(err)
        this.loading = false
        return err
      }
    },
    changeCategory(value) {
      this.subCategories = value
      this.pushQueryStateCatalog()
      this.fetchProducts()
    },
    changeFilterAtributes(value) {
      this.filterAttributes = value
      this.pushQueryStateCatalog()
      this.fetchProducts()
    },
  },
}
</script>

<style lang="scss">
.catalog {
  padding: 2rem 0 6rem;

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
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 0.4rem;
  }

  &__content {
    grid-column: span 9;

    @media (max-width: 1199px) {
      grid-column: 1 / -1;
    }

    .catalog-list--tile {
      padding-top: 2.8rem;

      @media (max-width: 767px) {
        padding-top: 0;
      }
    }
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

  &__content-filter-tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.2rem;

    @media (max-width: 1023px) {
      gap: 0.8rem;
    }

    @media (max-width: 767px) {
      overflow-x: scroll;
      -ms-overflow-style: none;
      flex-wrap: nowrap;

      &::-webkit-scrollbar {
        height: 0;
      }
    }
  }

  &__content-filter-tag-wrapper {
    flex-shrink: 0;
  }

  &__content-filter-tag {
    display: flex;
    align-items: center;
    padding: 0.6rem 0.6rem 0.6rem 1.2rem;

    border-radius: 4rem;
    background-color: var(--extra-light-gray);

    font-size: 1.6rem;
    line-height: 1.25;

    @media (max-width: 1023px) {
      font-size: 1.4rem;
    }
  }

  &__content-filter-tag-name {
    color: var(--jack-grey);

    @media (max-width: 1023px) {
      margin-right: 0.4rem;
    }
  }

  &__content-filter-tag-value {
    margin-left: 0.4rem;
    margin-right: 0.8rem;

    @media (max-width: 1023px) {
      display: none;
    }
  }

  &__content-filter-tag-delete {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.4rem;
    height: 2.4rem;

    border-radius: 50%;
    background-color: var(--border-grey);

    @media (max-width: 1023px) {
      width: 2rem;
      height: 2rem;
    }

    svg {
      width: 1rem;
      height: 1rem;
      stroke: var(--dark);

      @media (max-width: 1023px) {
        width: 0.8rem;
        height: 0.8rem;
      }
    }

    &--black {
      background-color: var(--dark);

      svg {
        stroke: #fff;
      }
    }
  }

  &__content-filter-tag-show {
    @extend .catalog__content-filter-tag;
  }

  &__content-filter-tag-show-text {
    margin-right: 0.8rem;
    cursor: pointer;

    @media (max-width: 1023px) {
      margin-right: 0.4rem;
    }
  }

  &__content-filter-tag-more {
    @extend .catalog__content-filter-tag-delete;

    background: transparent;
    cursor: pointer;
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
    margin: 2.8rem 0 0;

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

    .catalog-list {
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
</style>