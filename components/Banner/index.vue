<template>
  <section>
    <div v-if="pageBanners.length === 1">
      <div
        v-for="item of pageBanners"
        :key="item.id"
        class="banner-slide one-slide"
      >
        <component
          :is="bannerTypes[item.type.code]"
          :bannerProp="item"
        ></component>
      </div>
    </div>

    <div
      v-if="pageBanners.length > 1"
      class="banner-swiper-container"
    >
      <swiper
        ref="mySwiper"
        :options="swiperOptions"
        class="banner-swiper"
        @slide-change="onSwipe"
      >
        <swiper-slide
          v-for="item of pageBanners"
          :key="item.id"
          class="banner-slide"
        >
          <component
            :is="bannerTypes[item.type.code]"
            :bannerProp="item"
          ></component>
        </swiper-slide>
      </swiper>
      <div class="promotion__slider-control">
        <div
          class="swiper-pagination promotion__swiper-pagination"
          :style="paginationColorCssVariable"
        ></div>
      </div>
      <div
        class="promotion__slider-button-wrapper"
        :class="{'small' : isSmallBanner}"
      >
        <div
          class="slider-navigation"
          :style="buttonColorCssVariable"
        >

          <button
            class="slider-button slider-button--prev"
            title="Листнуть влево"
            :style="buttonColorCssVariable"
          >
            <svg
              width="9"
              height="14"
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.11959e-07 7L9 14L9 0L6.11959e-07 7Z" />
            </svg>
          </button>

          <button
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
              <path d="M9 7L-1.22392e-06 14L0 0L9 7Z" />
            </svg>
          </button>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'BannerIndex',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    pageBanners: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    bannerTypes: {
      with_equipment_image: 'BannerWithDescription',
      with_date_and_equipment_image: 'BannerWithDate',
      double_with_date_and_format_type: 'BannerDoubleWithDate',
      double_with_tag: 'BannerDoubleWithTag',
      with_background_image_and_description: 'BannerBackgroundWithDescr',
      with_background_image_without_description: 'BannerBackgroundWithoutDescr',
      mini_with_cover_image: 'BannerMiniWithImg',
    },
    swiperOptions: {
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 600,
      autoHeight: true,
      navigation: {
        nextEl: '.slider-button--next',
        prevEl: '.slider-button--prev',
      },

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    },
    currentSlide: null,
  }),

  computed: {
    buttonColorCssVariable() {
      return this.pageBanners[this.currentSlide]?.slider_btn_color === 'black'
        ? { '--backgroundColorBtn': '#202226' }
        : { '--backgroundColorBtn': '#fff' }
    },

    paginationColorCssVariable() {
      return this.pageBanners[this.currentSlide]?.slider_pagination_color ===
        'black'
        ? { '--backgroundColorPagination': '#202226' }
        : { '--backgroundColorPagination': '#fff' }
    },

    isSmallBanner() {
      return this.pageBanners.map(
        (item) => item.type.code === 'mini_with_cover_image'
      )[this.currentSlide]
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.onSwipe()
    })
  },

  methods: {
    onSwipe() {
      if (this.pageBanners.length > 1) {
        const index = this.$refs.mySwiper.$swiper.activeIndex
        this.currentSlide = index
        return
      }
      this.currentSlide = 0
    },
  },
}
</script>

<style lang="scss" scoped>
.swiper-container-autoheight {
  .swiper-slide {
    @media (max-width: 1023px) {
      height: initial !important;
    }
  }
}

.banner-swiper-container {
  position: relative;
}

.banner-swiper {
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  margin-bottom: 5rem;

  @media (max-width: 1023px) {
    border-radius: 0;
  }

  @media (max-width: 479px) {
    margin-bottom: 3rem;
  }
}

.banner-slide {
  // min-height: 48rem;
  display: flex;
  flex-direction: column;

  &.one-slide {
    margin-bottom: 5rem;

    @media (max-width: 479px) {
      margin-bottom: 3rem;
    }
  }
}

.promotion__slider-control {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 5.54rem;
  margin: 0 5.2rem;

  @media (max-width: 1599px) {
    bottom: 2rem;
    margin: 0 2rem;
  }
}

.promotion__slider-button-wrapper {
  position: absolute;
  right: 50px;
  top: 37rem;
  z-index: 2;

  @media (max-width: 1599px) {
    top: 40rem;
    right: 20px;
  }

  @media (max-width: 1023px) {
    top: 26.5rem;
  }

  @media (max-width: 767px) {
    top: 28.5rem;
  }

  @media (max-width: 479px) {
    top: 21rem;
  }

  &.small {
    right: 50px;
    top: 16.5rem;

    @media (max-width: 1599px) {
      right: 40px;
      top: 18rem;
    }

    @media (max-width: 1023px) {
      top: 19rem;
    }

    @media (max-width: 767px) {
      top: 12rem;
    }

    @media (max-width: 479px) {
      display: none;
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
    background-color: var(--backgroundColorBtn);

    @media (max-width: 1023px) {
      height: 2.3rem;
    }
  }

  @media (max-width: 1023px) {
    top: auto;
    width: 9.8rem;
    height: 5.2rem;
  }

  @media (max-width: 767px) {
    bottom: 0;
  }

  .slider-button {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-style: solid;
    border-color: var(--backgroundColorBtn);
    border-width: 1px;
    border-radius: 0 6.6rem 6.6rem 0;
    border-left: 0;
    transition: 0.3s;
    opacity: 0.8;

    &:hover {
      color: var(--jack-grey);
    }

    svg {
      width: 0.9rem;
      height: 1.4rem;
      fill: var(--backgroundColorBtn);

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

.promotion__swiper-pagination {
  position: static;
  width: auto !important;
  padding: 0.4rem;
  padding-bottom: 0;

  @media (max-width: 767px) {
    display: none;
  }
}
</style>

<style lang="scss">
.swiper-pagination-bullet {
  width: 10px !important;
  height: 10px !important;
  margin-right: 10px !important;
  border-style: solid !important;
  border-color: var(--backgroundColorPagination) !important;
  border-width: 1px !important;
  background-color: transparent !important;
  cursor: pointer !important;

  &-active {
    background-color: var(--backgroundColorPagination) !important;
  }
}
</style>