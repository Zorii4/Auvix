<template>
  <section>
    <div class="container">
      <TextBlocksWithOneNumber
        v-if="pageProps.variation === 'one_number'"
        :pageProps="pageProps"
      />
      <TextBlocksWithTwoNumber
        v-if="pageProps.variation === 'two_numbers'"
        :pageProps="pageProps"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'TextWithNumbers',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
</style>