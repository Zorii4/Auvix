<template>
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
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MainPage',

  fetch() {
    return this.$store.dispatch('modalPage/getModalPage', this.$route.path)
  },

  computed: {
    ...mapState({
      pageBanners: (state) => state.modalPage?.pageData?.data?.config?.banners,
      pageBlocksData: (state) =>
        state.modalPage?.pageData?.data?.config?.blocks,
    }),
  },
}
</script>

<style lang="scss" scoped>
</style>