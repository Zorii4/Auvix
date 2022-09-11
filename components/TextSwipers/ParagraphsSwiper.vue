<template>
  <section class="career">
    <div class="container">
      <div class="career__culture-header">
        <div class="section-lead">
          <div class="section-lead__column">
            <h2 class="section-lead__title section-title">{{pageProps.title}}</h2>
          </div>
          <div class="section-lead__column">
            <h3 class="section-lead__subtitle">{{pageProps.sub_title}}</h3>
            <div
              class="section-lead__text"
              v-if="pageProps.description"
            >
              <p> {{pageProps.description}}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="career__culture-wrapper">
        <ul class="career__culture-list">
          <li
            class="career__culture-item"
            v-for="item of pageProps.paragraphs"
            :key="item.id"
          >
            <h3 class="career__culture-item-title">{{item.title}}</h3>
            <p class="career__culture-item-text">{{item.description}}</p>
          </li>
        </ul>
        <swiper :options="swiperOptions">
          <swiper-slide
            v-for="elem of pageProps.image_cards"
            :key="elem.id"
            class="career__culture-img"
          >
            <img
              :src="elem.image_url"
              :alt="image_alt"
            >
          </swiper-slide>
        </swiper>
        <div class="career__culture-navigation">
          <div class="slider-navigation slider-navigation--dark">
            <button
              class="slider-button slider-button--prev"
              title="Листнуть влево"
              ref="sliderPrev"
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
              class="slider-button slider-button--next"
              title="Листнуть вправо"
              ref="sliderNext"
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
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'ParagraphsSwiper',
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
.career {
  margin-bottom: 50px;

  &__culture-wrapper {
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
      grid-template-columns: 1fr;
      align-items: stretch;
      padding-bottom: 4.8rem;
    }

    @media (max-width: 767px) {
      gap: 3.2rem;
      padding-bottom: 4rem;
    }
  }

  &__culture-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem 0.4rem;

    @media (max-width: 1199px) {
      gap: 3.6rem 0.4rem;
    }

    @media (max-width: 1023px) {
      gap: 2rem 0.4rem;
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  &__culture-item {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    @media (max-width: 767px) {
      gap: 0.4rem;
    }
  }

  &__culture-item-title {
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.4;
    color: var(--easy-dark);

    @media (max-width: 1199px) {
      font-size: 1.8rem;
      line-height: 1.3;
    }
  }

  &__culture-item-text {
    padding-right: 1rem;

    font-size: 1.6rem;
    line-height: 1.25;
    color: var(--jack-grey);

    @media (max-width: 1199px) {
      font-size: 1.4rem;
      line-height: 1.1;
    }
  }

  &__culture-img {
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

  &__culture-navigation {
    position: absolute;
    right: 5.2rem;
    bottom: 9.5rem;
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

.career__culture-header {
  margin-bottom: 5.6rem;

  @media (max-width: 1199px) {
    margin-bottom: 5.2rem;
  }

  @media (max-width: 1023px) {
    margin-bottom: 2.8rem;
  }

  @media (max-width: 767px) {
    margin-bottom: 2rem;
  }
}

.section-lead {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.6rem 0.4rem;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 767px) {
    gap: 2.4rem;
  }

  &__title {
    margin: 0;
  }

  &__column {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media (max-width: 1199px) {
      gap: 3.2rem;
    }

    @media (max-width: 1023px) {
      gap: 2.8rem;
    }

    @media (max-width: 767px) {
      gap: 2rem;
    }

    p {
      font-size: 2rem;
      line-height: 1.4;
      color: var(--easy-dark);

      @media (max-width: 1199px) {
        font-size: 1.8rem;
        line-height: 1.3;
      }

      @media (max-width: 767px) {
        font-size: 1.6rem;
        line-height: 1.25;
      }
    }
  }

  &__subtitle {
    font-weight: 400;
    font-size: 2.8rem;
    line-height: 1.3;

    @media (max-width: 1199px) {
      font-size: 2.4rem;
      line-height: 1.2;
    }

    @media (max-width: 767px) {
      font-size: 2rem;
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