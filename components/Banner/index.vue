<template>
  <swiper
    :options="swiperOptions"
    class="banner-swiper"
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
    pageBanners: Array,
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
      navigation: {
        nextEl: '.banner-slider-button-next',
        prevEl: '.banner-slider-button-prev',
      },
    },
  }),
  // computed: {
  //   bannerDataType() {
  //     return this.pageData.data.config.banners
  //   },
  // },
}
</script>

<style lang="scss" scoped>
.banner-swiper {
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  margin-bottom: 60px;

  @media (max-width: 1023px) {
    border-radius: 0;
  }
}

.banner-slide {
  min-height: 48rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 1599px) {
    min-height: 42rem;
  }

  @media (max-width: 1199px) {
    min-height: 40rem;
  }

  @media (max-width: 1023px) {
    min-height: auto;
  }
}
</style>