<template>
  <section class="news-single__media">
    <div class="wide-container wide-container--without-max-width">
      <div class="media">
        <div class="container container--without-padding">
          <h2 class="media__title section-title">{{pageProps.title}}</h2>
          <!-- <div class="media__slider-container js-init-slider-container">
            <div
              class="media__slider swiper-container js-init-slider"
              data-loop="true"
            > -->
          <swiper
            :options="swiperOptions"
            class="media__list"
          >

            <swiper-slide
              v-for="el of pageProps.image-cards"
              :key="el.id"
              class="media__item"
            >
              <img
                :src="$config?.baseURLImg + item.image_url"
                alt="Фото"
              >
            </swiper-slide>

          </swiper>

          <swiper>
            <!-- <div class="swiper-slide">
                  <ul class="media__list">
                    {{#each media }}
                    <li class="media__item">
                      <img
                        src="{{this}}"
                        alt="Фото"
                      >
                    </li>
                    {{/each}}
                  </ul>
                </div>
              </swiper>
            </div>
            <div class="media__navigation">
              {{> slider-navigation mod=navigationMod }} -->
          </swiper>
        </div>

        <!-- </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TilesSwiper',
  props: {
    pageProps: Object,
  },
  data: () => ({
    swiperOptions: {
      // loop: true,
      // loopedSlides: 5,
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 600,
    },
  }),
}
</script>

<style lang="scss" scoped>
.news-single {
  &__media {
    margin-bottom: 6rem;

    @media (max-width: 1599px) {
      margin-bottom: 4.8rem;
    }

    @media (max-width: 1199px) {
      margin-bottom: 4rem;
    }

    @media (max-width: 1023px) {
      margin-bottom: 3.6rem;
    }

    @media (max-width: 767px) {
      margin-bottom: 3.2rem;
    }
  }

  .media {
    padding: 5.2rem;

    border-radius: 2rem;
    background: var(--grey);

    @media (max-width: 1599px) {
      padding: 5.6rem 2rem;
    }

    @media (max-width: 1199px) {
      padding: 5.2rem 2rem;
    }

    @media (max-width: 1023px) {
      padding: 4.4rem 1.6rem 3.6rem;
    }

    @media (max-width: 767px) {
      padding: 4.8rem 1.6rem 4rem;
    }

    &__title {
      margin-bottom: 4rem;

      @media (max-width: 1599px) {
        margin-bottom: 4.4rem;
      }

      @media (max-width: 1199px) {
        margin-bottom: 4rem;
      }

      @media (max-width: 1023px) {
        margin-bottom: 3.6rem;
      }

      @media (max-width: 767px) {
        margin-bottom: 2rem;
      }
    }

    &__slider-container {
      position: relative;
    }

    &__slider {
      overflow: hidden;
    }

    &__list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.4rem;

      @media (max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    &__item {
      border-radius: 2rem;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &:first-child {
        grid-column: span 2;
        grid-row: span 2;
      }
    }

    &__navigation {
      position: absolute;
      right: 0;
      bottom: calc(100% + 4rem);

      @media (max-width: 1599px) {
        bottom: calc(100% + 3.6rem);
      }

      @media (max-width: 1199px) {
        bottom: calc(100% + 3.2rem);
      }

      @media (max-width: 1023px) {
        bottom: calc(100% + 2.8rem);
      }

      @media (max-width: 767px) {
        bottom: calc(100% + 2rem);
      }

      .slider-navigation {
        @media (max-width: 1199px) {
          width: 9.8rem;
          height: 5.2rem;

          svg {
            width: 0.8rem;
            height: 1.2rem;
          }
        }

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

    &--dark {
      color: #fff;
      background: var(--dark);
    }
  }
}
</style>