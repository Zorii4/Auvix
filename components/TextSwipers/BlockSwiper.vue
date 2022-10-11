<template>
  <div class="article">
    <swiper
      :options="swiperOptions"
      class="article__container"
    >

      <swiper-slide
        v-for="item of pageProps.image_cards"
        :key="item.id"
        class="article__inner"
      >
        <div class="article__text-column article__text-column--title-bottomed">
          <div class="article__text-header">
            <span class="article__category">{{item.tag}}</span>
          </div>
          <div class="article__text-content article__text-content--title-bottomed">
            <h3 class="article__text-title">{{item.name}}</h3>
            <p>{{item.description}}</p>
          </div>
        </div>
        <div class="article__img-column">
          <div class="article__img-wrapper">
            <img
              :src="$config.baseURLImg + item.image_url"
              :alt="item.image_alt|| 'Фото'"
            >
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="article__slider-navigation">
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
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'BlockSwiper',
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
.article {
  position: relative;

  &__container {
    position: relative;
    border-radius: 2rem;
    overflow: hidden;
  }

  &__inner {
    display: flex;
    flex-direction: row;
    gap: 0.4rem;
    min-height: 48rem;

    @media (max-width: 1599px) {
      min-height: 42rem;
    }

    @media (max-width: 1199px) {
      min-height: 35.2rem;
    }

    @media (max-width: 1023px) {
      min-height: 28rem;
    }

    @media (max-width: 767px) {
      min-height: auto;
      flex-direction: column;
    }
  }

  &__text-column {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 5.2rem;
    border-radius: 0 2rem 2rem 0;
    background: var(--extra-light-gray);
    box-sizing: border-box;

    @media (max-width: 1599px) {
      padding: 2rem;
    }

    @media (max-width: 1023px) {
      padding: 1.6rem;
    }

    @media (max-width: 767px) {
      width: 100%;
      min-height: 28rem;
      border-radius: 1.2rem;
    }

    &--title-bottomed {
      @media (max-width: 767px) {
        min-height: 15.2rem;
      }
    }
  }

  &__text-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 47.5rem;
    margin-bottom: 5.2rem;

    @media (max-width: 1599px) {
      max-width: 41.1rem;
      margin-bottom: 4.8rem;
    }

    @media (max-width: 1199px) {
      max-width: 33.4rem;
      margin-bottom: 4rem;
    }

    @media (max-width: 1023px) {
      max-width: 27.2rem;
      margin-bottom: 2.4rem;
    }

    @media (max-width: 767px) {
      max-width: 24.2rem;
      margin-bottom: 1.6rem;
    }
  }

  &__category {
    display: flex;
    align-items: center;

    font-size: 1.8rem;
    line-height: 1.3;
    color: var(--easy-dark);

    @media (max-width: 1199px) {
      font-size: 1.6rem;
    }

    @media (max-width: 767px) {
      font-size: 1.4rem;
    }

    &::before {
      content: '';
      width: 1.3rem;
      height: 1.3rem;
      margin-right: 1.1rem;
      border-radius: 50%;
      background-color: var(--easy-dark);

      @media (max-width: 1199px) {
        width: 1rem;
        height: 1rem;
        margin-right: 0.8rem;
      }
    }
  }

  &__text-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 49rem;
    margin-bottom: 2rem;

    @media (max-width: 1199px) {
      gap: 1.6rem;
    }

    @media (max-width: 1023px) {
      gap: 1.2rem;
    }

    @media (max-width: 767px) {
      gap: 0.8rem;
    }

    p {
      font-size: 2rem;
      line-height: 1.2;

      @media (max-width: 1199px) {
        font-size: 1.8rem;
      }
    }

    &--text-bottomed {
      flex-grow: 1;
      margin-bottom: 0;

      p {
        margin-top: auto;
      }
    }

    &--title-bottomed {
      margin-bottom: 0;
      margin-top: auto;

      p {
        @media (max-width: 1199px) {
          font-size: 1.6rem;
        }
      }
    }
  }

  &__text-title {
    @extend %fs-h3;
  }

  &__img-column {
    position: relative;

    width: 50%;

    border-radius: 2rem 0 0 2rem;
    background: #ccc;
    overflow: hidden;

    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 28rem;
      border-radius: 1.2rem;
    }
  }

  &__img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      flex-grow: 1;
      object-fit: cover;

      @media (max-width: 767px) {
        align-self: stretch;
      }
    }
  }

  &__slider-navigation {
    position: absolute;
    right: 5.2rem;
    bottom: 5.2rem;
    z-index: 1;

    @media (max-width: 1599px) {
      right: 2rem;
      bottom: 2rem;
    }

    @media (max-width: 1023px) {
      right: 1.6rem;
      bottom: 1.6rem;
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