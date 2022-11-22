<template>
  <div class="products products--not-slider">
    <div class="products__inner">

      <ul
        v-if="!pageProps.use_slider"
        class="products__list"
      >
        <!-- <li
          v-for="item of pageProps.service_items"
          :key="item.id"
          class="products__item-wrapper"
          :style="{backgroundColor: `${item.background_color}`}"
        > -->
        <CommonAnchor
          v-for="item of pageProps.service_items"
          :key="item.id"
          :to="item.link_url"
          :className="'products__item'"
          :style="{backgroundColor: `${item.background_color}`}"
          class="products__item-wrapper"
        >
          <h3 class="products__item-title">{{item.title}}</h3>
          <span class="products__item-link">
            {{item.link_name}}
            <svg
              width="8"
              height="10"
              viewBox="0 0 8 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 5L-8.74228e-07 10L0 0L8 5Z"
                fill="#202226"
              />
            </svg>
          </span>
          <div
            class="products__decor"
            :style="{backgroundImage: `url(${$config.baseURLImg}`+`${item.image_url})`}"
          >
          </div>
        </CommonAnchor>
        <!-- </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FourColumnCard',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.products {
  position: relative;
  margin-bottom: 30px;

  &__inner {
    overflow: hidden;

    @media (max-width: 1023px) {
      margin-right: -2rem;
    }
  }

  &__list {
    display: flex;
    gap: 4px 4px;
    flex-wrap: wrap;
  }

  &__item-wrapper {
    border-radius: 1.6rem;

    @media (max-width: 1199px) {
      max-width: 27rem;
    }

    @media (max-width: 1023px) {
      max-width: 24rem;
    }

    @media (max-width: 767px) {
      max-width: 15.8rem;
    }
  }

  &--not-slider {
    .products__inner {
      margin-right: 0;
    }

    .products__list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.4rem;

      @media (max-width: 1023px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 359px) {
        grid-template-columns: 1fr;
      }
    }

    .products__item-wrapper {
      max-width: none;
    }
  }

  &__item-title {
    font-weight: 400;
    font-size: 2.4rem;
    color: var(--easy-dark);
    line-height: 1.2;

    @media (max-width: 1199px) {
      font-size: 2rem;
    }

    @media (max-width: 767px) {
      font-size: 1.6rem;
    }
  }

  &__item-link {
    position: relative;
    z-index: 4;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 1.8rem;
    line-height: 1.3;

    transition: 0.4s;

    @media (max-width: 1199px) {
      font-size: 1.6rem;
    }

    @media (max-width: 767px) {
      opacity: 0;
    }

    svg {
      width: 0.8rem;
      height: 1rem;
    }
  }

  &__decor {
    position: absolute;
    pointer-events: none;
    background-repeat: no-repeat;
    background-size: cover;
    width: 29.4rem;
    height: 29rem;
    right: 0;
    bottom: 0;

    @media (max-width: 1599px) {
      width: 22.8rem;
      height: 22.4rem;
    }

    @media (max-width: 1199px) {
      width: 17.8rem;
      height: 17.6rem;
    }

    @media (max-width: 1023px) {
      width: 21.6rem;
      height: 21.4rem;
    }

    @media (max-width: 767px) {
      width: 11.4rem;
      height: 11.4rem;
    }
  }
}

.products__decor {
  transition: 0.4s;
}

.products__item:hover {
  opacity: 1;
  .products__decor {
    transform: scale(1.2);
  }
  .products__item-link {
    padding-left: 10px;
  }
}
</style>