<template>
  <div class="scope-single__post-img-slider">
    <div class="container">
      <div class="post-img-slider">
        <div
          v-if="pageProps.image_cards.length === 1"
          class="post-img-slider__container"
        >
          <div
            v-for="item of pageProps.image_cards"
            :key="item.id"
            class="post-img-slider__slide"
          >
            <img
              :src="$config?.baseURLImg + item.image_url"
              alt="Фото"
            >
          </div>
        </div>
        <swiper
          v-if="pageProps.image_cards.length > 1"
          :options="swiperOptions"
          class="post-img-slider__container"
        >
          <swiper-slide
            v-for="item of pageProps.image_cards"
            :key="item.id"
            class="post-img-slider__slide"
          >
            <img
              :src="$config?.baseURLImg + item.image_url"
              alt="Фото"
            >
            <div class="post-img-slider__caption">
              <p>{{item.name}}</p>
            </div>
          </swiper-slide>
        </swiper>
        <div
          v-if="pageProps.image_cards.length > 1"
          class="article__slider-navigation"
        >
          <div class="slider-navigation slider-navigation--dark">
            <button
              ref="sliderPrev"
              title="Листнуть влево"
              class="slider-button slider-button--prev"
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
              ref="sliderNext"
              title="Листнуть вправо"
              class="slider-button slider-button--next"
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
  name: 'SingleSwiper',
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
        nextEl: '.slider-button--next',
        prevEl: '.slider-button--prev',
      },
    },
  }),
  mounted() {
    this.swiperOptions.navigation.nextEl = this.$refs.sliderNext
    this.swiperOptions.navigation.prevEl = this.$refs.sliderPrev
    this.sliderLoad = true
  },
}
</script>

<style lang="scss" scoped>
.scope-single {
  &__post-img-slider {
    margin: 8rem 0;

    @media (max-width: 1599px) {
      margin: 7.2rem 0;
    }

    @media (max-width: 1199px) {
      margin: 6.4rem 0;
    }

    @media (max-width: 1023px) {
      margin: 5.6rem 0;
    }

    @media (max-width: 767px) {
      margin: 4.8rem 0;
    }
  }
}

.post-img-slider {
  max-width: 123.1rem;
  margin: 0 auto;
  position: relative;

  &__container {
    position: relative;

    border-radius: 2rem;
    overflow: hidden;

    @media (max-width: 1023px) {
      border-radius: 1.6rem;
    }
  }

  &__slide {
    aspect-ratio: 1231 / 660;
    min-height: 21.2rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__caption {
    max-width: 98.6rem;
    margin: 0 auto;
    padding-top: 2rem;

    @media (max-width: 767px) {
      padding-top: 1.2rem;
    }

    p {
      font-size: 1.6rem;
      line-height: 1.25;
      color: var(--jack-grey);

      @media (max-width: 767px) {
        font-size: 1.4rem;
      }
    }
  }

  &__navigation {
    position: absolute;
    bottom: 4rem;
    right: 4rem;
    z-index: 5;

    @media (max-width: 1199px) {
      bottom: 2rem;
      right: 2rem;
    }

    @media (max-width: 767px) {
      bottom: 1.6rem;
      right: 1.6rem;
    }

    .slider-navigation {
      @media (max-width: 767px) {
        width: 7rem;
        height: 3.6rem;

        svg {
          width: 0.6rem;
          height: 0.8rem;
        }
      }
    }
  }
}

.article__slider-navigation {
  position: absolute;
  right: 5.2rem;
  bottom: 5.2rem;
  z-index: 1;

  @media (max-width: 1023px) {
    right: 1.6rem;
    bottom: 1.6rem;
  }

  @media (max-width: 479px) {
    display: none;
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

    &--prev {
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