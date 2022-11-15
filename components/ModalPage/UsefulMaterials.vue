<template>
  <div>
    {{dateSort}}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PromotionAndDiscounts',
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
    usefulData() {
      return this.interactiveData[this.pageProps.id]
    },
    dateSort() {
      return this.usefulData?.data
        .map((el) => el)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    },
  },
}
</script>