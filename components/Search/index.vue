<template>
  <div
    class="search"
    :class="{active: active}"
    @click.prevent="activateSearchBar"
  >
    <form
      class="search__form"
      name="searchForm"
    >
      <button
        v-if="active"
        class="search__category"
      >
        {{ pickedCategory }}
        <SearchIconClear class="search__category-clear" />
      </button>
      <SearchIcon
        v-if="!active"
        class="search__icon"
      />
      <input
        ref="searchInput"
        class="search__input"
        type="text"
        placeholder="Поиск"
      >
      <button
        v-if="active"
        class="search__button"
      >
        <SearchIcon class="search__icon" />
      </button>
    </form>
  </div>
</template>

<script>
import SearchIcon from '@/assets/icons/Search.svg'
import SearchIconClear from '@/assets/icons/search-clear.svg'

export default {
  name: 'Search',

  components: {
    SearchIcon,
    SearchIconClear,
  },

  data() {
    return {
      pickedCategory: 'По каталогу',
      active: false,
    }
  },
  methods: {
    async activateSearchBar() {
      if (!this.active) {
        this.active = true
        await this.$nextTick()
        this.$emit('activateSearchBar')
        this.$refs.searchInput.focus()
      }
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

  &__category-clear {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
  }
}
.active {
  .search__form {
    padding: 3px;
    border: 1px solid #5b5e66;
    background: #fff;
  }
}
</style>