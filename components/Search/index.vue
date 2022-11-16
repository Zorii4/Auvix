<template>
  <div
    class="search"
    :class="{active: active}"
    @click.prevent="activateSearchBar"
  >
    <form
      class="search__form"
      name="searchForm"
      @submit.prevent="pushToSearchPage"
    >
      <button
        v-if="active"
        class="search__category"
        type="button"
        @click="openSearchMenu"
      >
        {{ mappedCategoryName }}
        <SearchIconClear
          v-if="isOpenMenu"
          class="search__category-icon clear"
        />
        <SearchIconArrow
          v-else
          class="search__category-icon select"
        />
      </button>
      <SearchIcon
        v-if="!active"
        class="search__icon"
      />
      <input
        ref="searchInput"
        v-model="searchedQueryStringProxy"
        class="search__input"
        type="text"
        :placeholder="'Поиск ' + computedPlaceHolder"
      >
      <button
        v-if="active"
        type="button"
        @click.stop="pushToSearchPage"
        class="search__button"
      >
        <SearchIcon class="search__icon" />
      </button>
    </form>
  </div>
</template>

<script>
import SearchIcon from '@/assets/icons/Search.svg'
import SearchIconClear from '@/assets/icons/clear.svg'
import SearchIconArrow from '@/assets/icons/select-arrow.svg'

export default {
  name: 'Search',

  components: {
    SearchIcon,
    SearchIconClear,
    SearchIconArrow,
  },

  props: {
    isOpenMenu: {
      type: Boolean,
      required: true,
    },
    pickedCategory: {
      type: Object,
      default: null,
    },
    value: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
  },

  computed: {
    computedPlaceHolder() {
      return this.computedCategoryName.toLocaleLowerCase()
    },
    computedCategoryName() {
      if (this.pickedCategory === null) {
        return 'По каталогу'
      }
      return this.pickedCategory.name
    },

    searchedQueryStringProxy: {
      get() {
        return this.value
      },
      set(newVal) {
        this.$emit('input', newVal)
      },
    },

    mappedCategoryName() {
      if (this.pickedCategory === null) {
        return 'По каталогу'
      }

      if (this.computedCategoryName.length > 10) {
        return this.computedCategoryName.slice(0, 10) + '...'
      }
      return this.computedCategoryName
    },
  },

  async updated() {
    await this.$nextTick()
    if (this.active) {
      this.$refs.searchInput.focus()
    }
  },

  methods: {
    async activateSearchBar() {
      if (!this.active) {
        await this.$nextTick()
        this.$emit('activateSearchBar')
      }
    },

    pushToSearchPage() {
      this.$emit('triggerToPushSearchPage')
    },

    openSearchMenu() {
      this.$emit('openMenu')
    },
  },
}
</script>

<style lang="scss">
.search {
  position: relative;
  height: 100%;

  &__form {
    position: relative;
    display: flex;
    flex-grow: 1;
    height: 100%;
    padding: 1.5rem 6.4rem;
    border-radius: 12px;
    border: 1px solid var(--light-grey);
    background: var(--light-grey);
    transition: 0.3s;
  }

  &__icon {
    position: absolute;
    z-index: 1;
    left: 3rem;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: 1.6rem;
    height: 1.6rem;
  }

  &__clear {
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    width: 3.2rem;
    height: 3.2rem;
    cursor: pointer;

    &--header {
      right: 13.2rem;

      @media (max-width: 767px) {
        right: 1.2rem;
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }

  &__input {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    font-size: 18px;
    line-height: 24px;
    box-sizing: border-box;
    transition: 0.3s;
    padding-left: 5px;

    &::placeholder {
      font-size: 18px;
      line-height: 24px;
    }

    @media (max-width: 767px) {
      font-size: 1.6rem;
      border-radius: 0.8rem;

      &::placeholder {
        font-size: 1.6rem;
      }
    }
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 53px;
    height: 48px;
    background-color: #202226;
    border-radius: 12px;
    flex-shrink: 0;
    .search__icon {
      path {
        fill: #fff;
      }
    }
  }

  &__category {
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    width: 160px;
    color: #fff;
    margin-right: 11px;
    padding: 0 45px 0 12px;
    height: 48px;
    background-color: #202226;
    border-radius: 12px;
    position: relative;
    flex-shrink: 0;
  }

  &__category-icon {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);

    &.select {
      width: 14px;
      height: 14px;
    }
  }
}
.active {
  .search__form {
    padding: 3px;
    border: 1px solid #5b5e66;
    background: #fff;
  }
}

.clear {
  path {
    fill: #fff;
  }
}
</style>