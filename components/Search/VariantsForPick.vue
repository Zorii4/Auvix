<template>
  <div class="search-variants">
    <div
      v-if="loadingCategories"
      class="search-variants__loader"
    >
      <CommonLoader />
    </div>
    <div
      v-else
      class="search-variants__categories categories"
    >
      <ul class="categories__box">
        <li
          v-for="serchedCategory of serchedCategories"
          :key="serchedCategory.id"
          class="categories__item"
          :class="{active: pickedCategory && pickedCategory.id === serchedCategory.id}"
          @click="pickCategory(serchedCategory)"
        >{{serchedCategory.name}}<button
            v-if="pickedCategory && pickedCategory.id === serchedCategory.id"
            class="categories__clear"
            @click.stop="clearCategory"
          >
            <SearchIconClear />
          </button></li>
      </ul>
    </div>
  </div>
</template>

<script>
import SearchIconClear from '@/assets/icons/clear.svg'
export default {
  name: 'SearchVariants',

  components: {
    SearchIconClear,
  },

  props: {
    pickedCategory: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      // categories loading state
      loadingCategories: false,
    }
  },

  async fetch() {
    if (!this.serchedCategories.length) {
      this.loadingCategories = true
      const res = await this.$store.dispatch('catalog/fetchCategoriesList')
      this.loadingCategories = false
      return res
    }
  },

  computed: {
    serchedCategories() {
      return this.$store.state.catalog.categoriesList
    },
  },

  methods: {
    pickCategory(category) {
      this.$emit('pickCategory', category)
    },

    clearCategory() {
      this.$emit('clearCategory')
    },
  },
}
</script>

<style lang="scss" scoped>
.search-variants {
  max-height: 75vh;
  max-width: 98.6rem;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  border-radius: 0px 0px 24px 24px;
}
.search-variants__categories {
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

.categories__box {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  column-gap: 1rem;
  row-gap: 0.5rem;
}

.categories__item {
  padding: 14px 60px 14px 56px;
  border-radius: 12px;
  line-height: 20px;
  font-size: 16px;
  position: relative;
  background-color: rgba(#020202, 0);
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: rgba(#020202, 0.1);
  }
  &.active {
    background-color: rgba(#020202, 0.1);
  }
}
.categories__clear {
  padding: 5px;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  border-radius: 5px;
  &:hover {
    background-color: rgba(#020202, 0.2);
  }
}

.search-variants__loader {
  width: 100%;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>