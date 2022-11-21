<template>
  <section class="career__employee">
    <div class="wide-container">
      <swiper class="article__container">
        <swiper-slide
          v-for="item of pageProps.news"
          :key="item.id"
          class="article__inner"
        >
          <!-- ТУТ НАДО БУДЕТ ВСЁ ОБЕРНУТЬ В ССЫЛКУ ПО CODE ЛЕВУЮ ЧАСТЬ-->
          <div class="article__text-column">
            <span class="article__name">{{item.title}}</span>
            <span class="article__position">{{item.short_description}}</span>
            <div class="article__text-content article__text-content--text-bottomed">
              <!-- <h3 class="article__text-lead">{{item}}</h3> ОПИСАНИЕ ДОЛЖНО БЫТЬ-->
              <h3 class="article__text-lead">NULL</h3>
              <!-- <CommonAnchor
                v-if="pageProps.use_button"
                :to="pageProps.button_link_url"
                :className="'accent-photo-button button'"
              >{{pageProps.button_title}}</CommonAnchor> -->
            </div>
          </div>
          <div class="article__img-column">
            <div class="article__img-wrapper">
              <img
                :src="$config.baseURLImg + item.detail_image_url"
                alt="Фото"
              >
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="slider-navigation">
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
              d="M6.11959e-07 7L9 14L9 0L6.11959e-07 7Z"
              fill="#ffffff"
            />
          </svg>
        </button>
        <button
          ref="sliderNext"
          class="slider-button slider-button--next"
          title="Листнуть вправо"
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
              fill="#ffffff"
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
  name: 'SuccessStories',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    pageProps: Object,
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 600,
        navigation: {
          nextEl: '.slider-button--next',
          prevEl: '.slider-button--prev',
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.career {
  &__employee {
    padding-bottom: 8rem;

    @media (max-width: 1599px) {
      padding-bottom: 7.2rem;
    }

    @media (max-width: 1199px) {
      padding-bottom: 6.4rem;
    }

    @media (max-width: 1023px) {
      padding-bottom: 5.6rem;
    }

    @media (max-width: 767px) {
      padding-bottom: 4.8rem;
    }
  }
}

.article {
  &__container {
    position: relative;

    border-radius: 2rem;
    overflow: hidden;
  }

  &__inner {
    display: flex;
    flex-direction: row;
    gap: 0.4rem;
    min-height: 36rem;
    box-sizing: border-box;

    @media (max-width: 1599px) {
      min-height: 32rem;
    }

    @media (max-width: 1199px) {
      min-height: 30rem;
    }

    @media (max-width: 1023px) {
      flex-direction: column;
      min-height: auto;
    }
  }

  &__text-column {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 5.2rem;
    border-radius: 0 2rem 2rem 0;
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

  &__name {
    margin-bottom: 0.8rem;

    font-size: 1.8rem;
    line-height: 1.3;

    @media (max-width: 1199px) {
      font-size: 1.6rem;
      line-height: 1.25;
    }
  }

  &__position {
    font-size: 1.6rem;
    line-height: 1.25;
    color: var(--jack-grey);

    @media (max-width: 1199px) {
      font-size: 1.4rem;
      line-height: 1.1;
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

  &__text-lead {
    max-width: 38.4rem;
    margin-top: auto;

    font-weight: 400;
    font-size: 2.8rem;
    line-height: 1.1;

    @media (max-width: 1199px) {
      font-size: 2.4rem;
      line-height: 1.2;
    }

    @media (max-width: 767px) {
      font-size: 1.8rem;
      line-height: 1.3;
    }
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

    iframe {
      width: 100%;
      height: 100%;
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

  &__brand {
    position: absolute;
    top: 5.2rem;
    right: 5.2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 15.1rem;
    height: 8rem;

    border-radius: 2rem;
    background-color: #fff;

    @media (max-width: 1599px) {
      top: 2rem;
      right: 2rem;

      width: 12rem;
      height: 6.4rem;

      border-radius: 1.6rem;
    }

    @media (max-width: 1199px) {
      width: 10.5rem;
      height: 5.6rem;
      border-radius: 1.2rem;
    }

    @media (max-width: 1023px) {
      top: 1.6rem;
      right: 1.6rem;
    }

    svg {
      max-width: 80%;
      max-height: 60%;
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

  &__event {
    margin-top: 2.7rem;
    padding-top: 4rem;

    border-top: 1px solid rgba(91, 94, 102, 0.3);

    @media (max-width: 1199px) {
      margin-top: 2rem;
      padding-top: 2rem;
    }

    @media (max-width: 1023px) {
      margin-top: 1.6rem;
      padding-top: 1.6rem;
    }

    @media (max-width: 767px) {
      margin-top: 1.2rem;
      padding-top: 1.2rem;
    }
  }

  &__event-button {
    padding: 1.6rem 4.8rem;
    font-size: 1.8rem;

    @media (max-width: 1599px) {
      padding: 1.6rem 4rem;
    }

    @media (max-width: 1023px) {
      font-size: 1.6rem;
    }

    @media (max-width: 767px) {
      padding: 1.6rem;
      justify-content: center;
      width: 100%;
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

  &__text-lead {
    max-width: 38.4rem;
    margin-top: auto;

    font-weight: 400;
    font-size: 2.8rem;
    line-height: 1.1;

    @media (max-width: 1199px) {
      font-size: 2.4rem;
      line-height: 1.2;
    }

    @media (max-width: 767px) {
      font-size: 1.8rem;
      line-height: 1.3;
    }
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
</style>