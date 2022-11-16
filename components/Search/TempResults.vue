<template>
  <div class="search-temp-results">
    <div
      v-if="loadingTempResults"
      class="search-temp-results__loader"
    >
      <CommonLoader />
    </div>
    <div
      v-else
      class="search-temp-results__box"
      :class="{'search-temp-results__products-box': isHaveResults && searchedTempResults.catalog_product && searchedTempResults.catalog_product.length > 0}"
    >
      <div v-if="!isHaveResults">
        По вашему запросу ничего не найдено
      </div>
      <div
        v-else
        class="search-temp-results__res"
      >
        <ul
          v-if="searchedTempResults.catalog_brand && searchedTempResults.catalog_brand.length > 0"
          class="search-temp-results__brands"
        >
          <li
            v-for="brand of searchedTempResults.catalog_brand"
            :key="brand.id"
          >
            <SearchCardBrand :brand="brand" />
          </li>
        </ul>
        <ul
          v-if="searchedTempResults.catalog_category && searchedTempResults.catalog_category.length > 0"
          class="search-temp-results__category"
        >
          <li
            v-for="category of searchedTempResults.catalog_category"
            :key="category.id"
          >
            <SearchCardCategory :category="category" />
          </li>
        </ul>
        <ul
          v-if="searchedTempResults.catalog_product && searchedTempResults.catalog_product.length > 0"
          class="search-temp-results__products"
        >
          <li
            v-for="product of searchedTempResults.catalog_product"
            :key="product.id"
          >
            <SearchCardProduct :product="product" />
          </li>
        </ul>
        <ul
          v-if="searchedTempResults.article && searchedTempResults.article.length > 0"
          class="search-temp-results__articles"
        >
          <li
            v-for="article of searchedTempResults.article"
            :key="article.id"
          >
            <SearchCardArticle :article="article" />
          </li>
        </ul>
      </div>
    </div>
    <div
      v-if="isHaveResults && searchedTempResults.catalog_product && searchedTempResults.catalog_product.length > 0"
      class="search-temp-results__show-all"
    >
      <button @click="showAllResultsTrigger">Показать все результаты</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchResults',

  props: {
    searchedTempResults: {
      type: Object,
      default: () => {},
    },

    loadingTempResults: {
      type: Boolean,
    },
  },

  computed: {
    isHaveResults() {
      return (
        Object.entries(this.searchedTempResults).filter(
          ([_key, value]) => value.length > 0
        ).length > 0
      )
    },
  },

  methods: {
    showAllResultsTrigger() {
      this.$emit('showAllResultsTrigger')
    },
  },
}
</script>

<style lang="scss" scoped>
.search-temp-results {
  max-height: 75vh;
  max-width: 98.6rem;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  border-radius: 0px 0px 24px 24px;
}
.search-temp-results__box {
  max-height: 75vh;
  overflow-y: scroll;
  position: relative;
  width: 100%;
  padding: 4.3rem 12rem;
  &::-webkit-scrollbar {
    width: 0.6rem;

    background-color: var(--light-grey);
    border-radius: 0.3rem;
    overflow: hidden;
  }

  &::-webkit-scrollbar-thumb {
    width: 100%;

    background-clip: content-box;
    background: linear-gradient(
      180deg,
      #b659ff 0%,
      #99f5a2 49.42%,
      #79dfff 100%
    );
    border-radius: 0.3rem;
  }
  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    background: linear-gradient(180deg, #858383 0%, rgba(217, 217, 217, 0) 50%);
  }
}

.search-temp-results__products-box {
  padding: 4.3rem 12rem 8.2rem 12rem;
}
.search-temp-results__show-all {
  position: absolute;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;

  button {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    padding: 1.6rem 4rem;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 12px;
  }
}
.search-temp-results__products {
  display: flex;
  flex-direction: column;
  row-gap: 3.5rem;
  width: 100%;
}
.search-temp-results__brands {
  display: flex;
  flex-direction: column;
  row-gap: 3.5rem;
  width: 100%;
}
.search-temp-results__category {
  display: flex;
  flex-direction: column;
  row-gap: 3.5rem;
  width: 100%;
}
.search-temp-results__articles {
  display: flex;
  flex-direction: column;
  width: 100%;
  li {
    padding: 1.75rem 0;
  }
  li:not(:last-child) {
    border-bottom: 1px solid #dbdee6;
  }
}

.search-temp-results__loader {
  width: 100%;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-temp-results__res {
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 25px;
}
</style>