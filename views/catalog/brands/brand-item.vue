<template>
  <div>
    <ModalPageTypeTextWithAccentPhoto
      v-if="brandTopSliderData"
      :pageProps="brandTopSliderData"
    />
  </div>
</template>

<script>
import { fetchBrandById } from '@/API-services/brandsService'
export default {
  name: 'DetailBrandPage',
  async fetch() {
    const id = this.$route.params.id
    if (id) {
      const [err, brand] = await fetchBrandById(id)
      if (brand) {
        this.currentBrand = brand
        return brand
      }
      // TODO Сделать обработку ошибки, если бренд не найден
      console.error(err)
    }
    // TODO Сделать редирект на страницу ошибки, если нет id
  },

  data() {
    return {
      currentBrand: null,
    }
  },

  computed: {
    brandTopSliderData() {
      if (this.currentBrand) {
        return {
          id: this.currentBrand.id || null,
          title: this.currentBrand.header || null,
          title_color: '#202226',
          description: this.currentBrand.description || null,
          description_color: '#5B5E66',
          type: 'type_text_with_accent_photo',
          background_color: '#EFF0F4',
          use_button: false,
          button_title: null,
          button_link_url: null,
          image_url:
            '/storage/2022/9/30/bXfksojw3Fm3fwK3BlJEi7SLE22kDf6EicGIWebQ.jpg' ||
            null,
          image_alt: this.currentBrand.title || null,
          logo_url: this.currentBrand.img || null,
        }
      }
      return null
    },
  },
}
</script>

<style>
</style>