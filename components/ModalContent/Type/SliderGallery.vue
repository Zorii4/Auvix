<template>
  <section>
    <GallerySwipersTilesSwiper
      v-if="pageProps.slider_variation_type === 'tiles'"
      :pageProps="pageProps"
    />
    <GallerySwipersSingleSwiper
      v-if="pageProps.slider_variation_type === 'single'"
      :pageProps="pageProps"
    />
  </section>
</template>

<script>
export default {
  name: 'SliderGallery',
  props: {
    pageProps: Object,
  },
}
</script>