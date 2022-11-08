<template>
  <ul class="tabs">
    <li
      v-for="(tab, idx) in tabsData"
      :key="idx"
      class="tabs__item-wrapper"
    >
      <a
        class="tabs__item"
        :class="{'tabs__item--active': tab === pickedTab}"
        @click.prevent="changeTab(tab)"
      >{{ tab }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CommonTabs',

  props: {
    tabsData: {
      type: Array,
      required: true,
    },
    pickedTab: {
      type: String,
      required: true,
    },
  },

  methods: {
    changeTab(tab) {
      this.$emit('changeTab', tab)
    },
  },
}
</script>

<style lang="scss" scoped>
.tabs {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5.2rem 0;

  @media (max-width: 1599px) {
    padding: 4.8rem 0;
  }

  @media (max-width: 1199px) {
    padding: 3.2rem 0;
  }

  @media (max-width: 1023px) {
    padding: 2.8rem 0;
  }

  @media (max-width: 860px) {
    justify-content: flex-start;
  }

  @media (max-width: 767px) {
    padding: 2.4rem 0;
  }

  &--filter {
    justify-content: flex-start;
    padding: 0;

    .tabs__item {
      background: var(--light-grey);
      padding: 0.6rem 1.6rem;

      font-size: 2rem;
      line-height: 1.2;

      @media (max-width: 1199px) {
        font-size: 1.6rem;
      }
    }

    .tabs__item--active {
      background: var(--dark);
      color: #fff;
    }
  }

  &--no-swiper {
    gap: 1.2rem;

    @media (max-width: 767px) {
      gap: 0.8rem;
    }

    .tabs__item-wrapper {
      @media (max-width: 1023px) {
        display: none;
      }
    }
  }

  .swiper-slide {
    width: auto;
  }

  &__item {
    display: inline-block;
    padding: 0.4rem 2rem;

    border-radius: 1.8rem;

    font-size: 2.4rem;
    line-height: 1.2;
    color: var(--jack-grey) !important;
    cursor: pointer;

    @media (max-width: 1199px) {
      font-size: 2rem;
    }

    @media (max-width: 767px) {
      font-size: 1.8rem;
    }

    &--active {
      background: var(--dark);
      color: #fff !important;
    }
  }

  &__sort-link {
    display: none;
    align-items: center;
    gap: 0.8rem;

    padding: 0.5rem 1.6rem;

    border: 1px solid var(--border-grey);
    border-radius: 4rem;

    font-size: 1.6rem;
    line-height: 1.25;

    &:hover {
      opacity: 1;
    }

    @media (max-width: 1023px) {
      display: flex;
    }

    svg {
      width: 0.6rem;
      height: 0.8rem;
      margin-top: 0.3rem;

      transform: rotate(90deg);
    }
  }

  &__search {
    margin-left: auto;
    cursor: pointer;
  }

  &__search-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.6rem;
    height: 3.6rem;

    border: 1px solid var(--border-grey);
    border-radius: 4rem;

    @media (max-width: 1199px) {
      height: 3.2rem;
    }

    @media (max-width: 767px) {
      width: 4.8rem;
    }

    svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }

  &__search-input {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;

    opacity: 0;

    transition: 0.3s;

    &.active {
      z-index: 1;
      opacity: 1;
    }

    input {
      width: 100%;

      border: 1px solid var(--jack-grey);
      border-radius: 1.2rem;
      background-color: #fff;
    }
  }

  &__filter-button {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 0.6rem 1.6rem;

    border: 1px solid var(--border-grey);
    border-radius: 4rem;

    font-size: 2rem;
    line-height: 1.2;

    @media (max-width: 1199px) {
      padding: 0.3rem 1.6rem;
      font-size: 1.6rem;
    }

    @media (max-width: 767px) {
      justify-content: center;
      padding: 0;
      width: 4.8rem;
      height: 3.2rem;
    }

    span {
      @media (max-width: 767px) {
        display: none;
      }
    }

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
}
</style>