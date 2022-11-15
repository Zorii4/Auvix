<template>
  <section>
    <div>
      <Banner
        v-if="pageBanners"
        :pageBanners="pageBanners"
        class="wide-container"
      />
      <ModalPage
        v-if="pageBlocksData"
        :pageBlocksData="pageBlocksData"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MainPage',
  head() {
    const robots = this.pageSeoData?.seo_config?.robots.map((el) => {
      return { name: el.name, content: el.content }
    })
    if (this.pageSeoData?.seo_config?.robots) {
      return {
        title: this.pageSeoData?.seo_config?.title || this.pageSeoData?.name,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.pageSeoData?.seo_config?.description || null,
          },
          {
            name: 'keywords',
            content: this.pageSeoData?.seo_config?.keywords || null,
          },
          ...robots,
        ],
      }
    } else {
      return {
        title: this.pageSeoData?.seo_config?.title || this.pageSeoData?.name,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.pageSeoData?.seo_config?.description || null,
          },
          {
            name: 'keywords',
            content: this.pageSeoData?.seo_config?.keywords || null,
          },
        ],
      }
    }
  },

  fetch() {
    return this.$store.dispatch('modalPage/getModalPage', this.$route.path)
  },

  computed: {
    ...mapState({
      pageBanners: (state) => state.modalPage?.pageData?.data?.config?.banners,
      pageBlocksData: (state) =>
        state.modalPage?.pageData?.data?.config?.blocks,
      pageSeoData: (state) => state.modalPage?.pageData?.data?.page,
    }),
  },
}
</script>

<style lang="scss" scoped>
</style>