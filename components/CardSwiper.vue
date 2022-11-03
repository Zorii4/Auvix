<template>
  <section>
    <div>
      <div class="services-single__warranty-header">
        <h2
          class="section-lead__title section-title"
          v-if="slides.title"
        >{{slides.title}}</h2>
        <div class="slider-navigation">
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
                d="M6.11959e-07 7L9 14L9 0L6.11959e-07 7Z"
                fill="#202226"
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
                fill="#202226"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <ul class="products__list">
      <swiper
        :options="swiperOptions"
        class="card-swiper"
      >
        <swiper-slide
          v-for="item of slides.service_items"
          :key="item.id"
          class="card-slide"
        >
          <li
            class="products__item-wrapper"
            :style="{backgroundColor: `${item.background_color}`}"
          >
            <CommonAnchor
              :to="item.link_url"
              :className="'products__item'"
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
                :style="{backgroundImage:`url(${$config.baseURLImg}`+`${item.image_url})`}"
              >
              </div>
            </CommonAnchor>
          </li>
        </swiper-slide>

      </swiper>
    </ul>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'CardSwiper',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    slides: Object,
  },
  data: () => ({
    swiperOptions: {
      slidesPerView: 4,
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
.products {
  position: relative;
  margin-bottom: 30px;

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
    z-index: 10;
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
    width: 300px;
    height: 300px;
    right: 0;
    bottom: 0;
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

      svg {
        width: 0.9rem;
        height: 1.4rem;
        transform: rotate(180deg);

        @media (max-width: 1023px) {
          width: 0.8rem;
          height: 1.2rem;
        }
      }
    }
  }
}

.services-single__warranty-header {
  margin-bottom: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1599px) {
    margin-bottom: 3.6rem;
  }

  @media (max-width: 1199px) {
    margin-bottom: 3.2rem;
  }

  @media (max-width: 1023px) {
    margin-bottom: 2.8rem;
  }

  @media (max-width: 767px) {
    margin-bottom: 2rem;
  }
}

.section-lead__title {
  margin: 0;
}
</style>