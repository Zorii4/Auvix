<template>
  <div>
    <Banner
      :pageBanners="pageBanners"
      class="wide-container"
    />
    <!-- <BlockPages
      :pageBlocksData="pageBlocksData"
      class="container"
    /> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PageConstructor',

  fetch() {
    return this.$store.dispatch('modalPage/getModalPage', this.$route.path)
  },

  computed: {
    ...mapState({
      pageBanners: (state) => state.modalPage.pageData.data.config.banners,
      pageBlocksData: (state) => state.modalPage.pageData.data.config.blocks,
    }),
  },
}
</script>

<style lang="scss" scoped>
</style>