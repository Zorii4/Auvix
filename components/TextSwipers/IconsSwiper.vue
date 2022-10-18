<template>
  <div class="features-section">
    <ul class="features-section__list">
      <li
        v-for="item of pageProps.paragraphs"
        :key="item.id"
        class="features-section__item"
      >
        <div class="features-section__item-img">
          <img
            class="lazyload"
            :src="$config.baseURLImg + item.image_url"
            alt="Иконка преимущества"
          >
        </div>
        <h3 class="features-section__item-title">{{item.title}}</h3>
        <p class="features-section__item-text">{{item.description}}</p>
      </li>
    </ul>
    <div v-if="pageProps.image_cards.length === 1">
      <div
        v-for="item of pageProps.image_cards"
        :key="item.id"
        class="features-section__img"
      >
        <img
          :src="$config.baseURLImg + item.image_url"
          alt="Персонал"
        >
      </div>
    </div>
    <swiper
      v-if="pageProps.image_cards.length > 1"
      :options="swiperOptions"
    >
      <swiper-slide
        v-for="item of pageProps.image_cards"
        :key="item.id"
        class="features-section__img"
      >
        <img
          :src="$config.baseURLImg + item.image_url"
          alt="Персонал"
        >
      </swiper-slide>
    </swiper>
    <div
      class="article__slider-navigation"
      v-if="pageProps.image_cards.length > 1"
    >
      <div class="slider-navigation slider-navigation--dark">
        <button
          ref="sliderPrevPh"
          title="Листнуть влево"
          class="slider-button slider-button--prevPh"
        >
          <svg
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 7L-1.22392e-06 14L0 0L9 7Z"
              fill="white"
            />
          </svg>

        </button>
        <button
          ref="sliderNextPh"
          title="Листнуть вправо"
          class="slider-button slider-button--nextPh"
        >
          <svg
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 7L-1.22392e-06 14L0 0L9 7Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'IconsSwiper',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    pageProps: Object,
  },
  data: () => ({
    swiperOptions: {
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 600,
      navigation: {
        nextEl: '.slider-button--nextPh',
        prevEl: '.slider-button--prevPh',
      },
    },
  }),
  mounted() {
    this.swiperOptions.navigation.nextEl = this.$refs.sliderNextPh
    this.swiperOptions.navigation.prevEl = this.$refs.sliderPrevPh
    this.sliderLoad = true
  },
}
</script>

<style lang="scss" scoped>
.features-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem 0.4rem;
  align-items: flex-end;
  padding-bottom: 6rem;
  position: relative;

  border-bottom: 1px solid var(--border-grey);

  @media (max-width: 1599px) {
    padding-bottom: 5.6rem;
  }

  @media (max-width: 1199px) {
    padding-bottom: 5.2rem;
  }

  @media (max-width: 1023px) {
    // grid-template-columns: 1fr;
    // align-items: stretch;
    display: block;
    padding-bottom: 4.8rem;
  }

  @media (max-width: 767px) {
    gap: 3.2rem;
    padding-bottom: 4rem;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem 0.4rem;

    @media (max-width: 1199px) {
      gap: 3.6rem 0.4rem;
    }

    @media (max-width: 1023px) {
      gap: 2rem 0.4rem;
      margin-bottom: 5rem;
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
  }

  &__item-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10.4rem;
    height: 10.4rem;
    margin-bottom: 2rem;

    @media (max-width: 1199px) {
      width: 8.8rem;
      height: 8.8rem;
    }

    @media (max-width: 767px) {
      width: 7.2rem;
      height: 7.2rem;
      margin-bottom: 1.6rem;
    }
  }

  &__item-title {
    margin-bottom: 1.2rem;

    font-weight: 400;
    font-size: 2rem;
    line-height: 1.4;
    color: var(--easy-dark);

    @media (max-width: 1199px) {
      font-size: 1.8rem;
      line-height: 1.3;
    }

    @media (max-width: 767px) {
      margin-bottom: 0.4rem;
    }
  }

  &__item-text {
    padding-right: 1rem;

    font-size: 1.6rem;
    line-height: 1.25;
    color: var(--jack-grey);

    @media (max-width: 1199px) {
      font-size: 1.4rem;
      line-height: 1.1;
    }
  }

  &__img {
    width: 100% !important;
    height: 49.2rem;

    border-radius: 2rem;
    overflow: hidden;

    @media (max-width: 1199px) {
      height: 42rem;
    }

    @media (max-width: 1023px) {
      height: 33.6rem;
      border-radius: 1.6rem;
    }

    @media (max-width: 767px) {
      height: 20rem;
      border-radius: 1.2rem;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.article {
  position: relative;
  &__slider-navigation {
    position: absolute;
    right: 5.2rem;
    bottom: 11rem;
    z-index: 1;

    @media (max-width: 1599px) {
      right: 2rem;
      bottom: 8rem;
    }

    @media (max-width: 1023px) {
      right: 1.6rem;
      bottom: 6.6rem;
    }
  }
}

.slider-navigation {
  position: relative;

  display: flex;
  width: 11.6rem;
  height: 5.6rem;

  &::before {
    content: '';

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;

    width: 0.2rem;
    height: 2.6rem;
    background-color: var(--dark);

    @media (max-width: 1023px) {
      height: 2.3rem;
    }
  }

  @media (max-width: 1023px) {
    top: auto;
    bottom: 0;

    width: 9.8rem;
    height: 5.2rem;
  }

  .slider-button {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0 6.6rem 6.6rem 0;
    border-left: 0;

    transition: 0.3s;

    &:hover {
      color: var(--jack-grey);
    }

    svg {
      width: 0.9rem;
      height: 1.4rem;

      @media (max-width: 1023px) {
        width: 0.8rem;
        height: 1.2rem;
      }
    }

    &--prevPh {
      transform: rotate(180deg);
    }
  }

  &--dark {
    background-color: var(--dark);
    border-radius: 6.6rem;

    .slider-button {
      border: 0;
      background-color: var(--dark);

      color: #fff;

      &:hover {
        color: rgba(255, 255, 255, 0.63);
      }
    }

    &::before {
      background-color: #fff;
    }
  }
}
</style>