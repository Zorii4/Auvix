<template>
  <section class="cases-section">
    <CasesBlocksWithSlider
      v-if="pageProps.size === 'slider'"
      :pageProps="pageProps"
      :casesData="casesData"
    />
    <CasesBlocksWithTile
      v-if="pageProps.size === 'tile'"
      :pageProps="pageProps"
      :dateSort="dateSort"
    />
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Cases',
  props: {
    pageProps: Object,
  },
  async fetch() {
    return await this.$store.dispatch(
      'interactive/getInteractiveData',
      this.pageProps.id
    )
  },
  computed: {
    ...mapState({
      interactiveData: (state) => state.interactive.interactiveData,
    }),
    casesData() {
      return this.interactiveData[this.pageProps.id]
    },
    dateSort() {
      return this.casesData?.data
        .map((el) => el)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    },
  },
}
</script>

<style lang="scss" scoped>
.cases-section {
  margin-bottom: 6rem;
}
</style>