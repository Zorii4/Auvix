<template>
  <section class="application">
    <div class="container">
      <div class="application__header">
        <div class="section-header">
          <h2
            v-if="pageProps.title"
            class="section-header__title section-title"
          >{{pageProps.title}}</h2>
          <CommonAnchor
            v-if="pageProps.link_more"
            :to="pageProps.link_more"
            :className="'header-link'"
            class="header-link__text"
          >
            {{pageProps.link_title}}
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
          </CommonAnchor>
        </div>
      </div>
    </div>
    <div class="wide-container">
      <div class="article__container">
        <swiper
          :options="swiperOptions"
          class="swiper-container-cases"
        >
          <swiper-slide
            v-for="item in casesData?.data"
            :key="item.id"
          >
            <div class="article__inner">
              <div
                class="article__text-column"
                :style="{backgroundColor: `${pageProps.banner_background_color}`}"
              >
                <div class="article__text-header">
                  <time class="article__text-date">{{item.date | formatData('toYear')}}</time>
                  <span
                    v-for="el of item.rubrics"
                    :key="el.id"
                    class="article__category"
                  >{{el.name}}</span>
                </div>
                <div class="article__text-content article__text-content--text-bottomed article__text-content--title-bottomed">
                  <h3
                    :style="{color:`${item.title_color}`}"
                    class="article__text-title"
                  >{{item.title}}</h3>
                  <p :style="{color:`${pageProps.text_color}`}">{{item.short_description}}</p>
                </div>
                <router-link
                  class="article__link"
                  :to="`cases/${item.code}`"
                >
                  Подробнее
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
                </router-link>
              </div>
              <div class="article__img-column">
                <div class="article__img-wrapper">
                  <img
                    :src="$config?.baseURLImg + item.preview_image_url"
                    alt="Фото"
                  >
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="article__slider-navigation">
          <div class="slider-navigation slider-navigation--dark">
            <button
              ref="sliderPrev"
              class="slider-button slider-button--prev"
              title="Листнуть влево"
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
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'WithSlider',
  props: {
    pageProps: Object,
    casesData: Object,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 600,
        navigation: {
          nextEl: '.slider-button--next',
          prevEl: '.slider-button--prev',
        },
      },
    }
  },
  mounted() {
    this.swiperOptions.navigation.nextEl = this.$refs.sliderNext
    this.swiperOptions.navigation.prevEl = this.$refs.sliderPrev
    this.sliderLoad = true
  },
}
</script>

<style lang="scss" scoped>
.application {
  padding: 6rem 0 0.8rem;

  @media (max-width: 1599px) {
    padding-top: 5.6rem;
  }

  @media (max-width: 1199px) {
    padding-top: 5.2rem;
  }

  @media (max-width: 1023px) {
    padding-top: 4.8rem;
  }

  @media (max-width: 767px) {
    padding-top: 4rem;
  }

  &__header {
    padding-bottom: 4rem;

    @media (max-width: 1599px) {
      padding-bottom: 3.6rem;
    }

    @media (max-width: 1199px) {
      padding-bottom: 3.2rem;
    }

    @media (max-width: 1023px) {
      padding-bottom: 2.8rem;
    }

    @media (max-width: 767px) {
      padding-bottom: 2rem;
    }

    h2 {
      max-width: 28.7rem;

      @media (max-width: 1023px) {
        max-width: 22rem;
      }
    }
  }
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  &__title {
    margin: 0;
  }
}

.header-link__text {
  span:last-child {
    display: none;
  }

  @media (max-width: 767px) {
    span:first-child {
      display: none;
    }

    span:last-child {
      display: block;
    }
  }

  svg {
    width: 0.8rem;
    height: 1rem;
  }

  &:hover {
    color: var(--jack-grey) !important;
  }

  &:active {
    color: var(--easy-dark) !important;
  }
}

.swiper-container-cases {
  position: relative;
}

.article {
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
    box-sizing: border-box;

    border-radius: 2rem;
    background-color: var(--extra-light-gray);

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

  &__category,
  &__text-date {
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

      width: 1.2rem;
      height: 1.2rem;
      margin-right: 1.2rem;

      border-radius: 50%;
      border: 1px solid var(--easy-dark);

      @media (max-width: 1199px) {
        width: 1rem;
        height: 1rem;
        margin-right: 0.8rem;
      }
    }
  }

  &__name {
    margin-bottom: 0.8rem;

    font-size: 1.8rem;
    line-height: 1.3;

    @media (max-width: 1199px) {
      font-size: 1.6rem;
      line-height: 1.25;
    }
  }

  &__text-content {
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
    margin-bottom: 1.5rem;
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: auto;

    font-size: 1.8rem;
    line-height: 1.3;
    color: var(--dark);

    @media (max-width: 1199px) {
      font-size: 1.6rem;
      gap: 1.6rem;
    }

    svg {
      width: 0.8rem;
      height: 1rem;
    }
  }

  &__img-column {
    position: relative;

    width: 50%;

    border-radius: 2rem;
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

.article__category::before {
  background-color: var(--easy-dark);
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

.article__container {
  position: relative;

  border-radius: 2rem;
  overflow: hidden;
}
</style>