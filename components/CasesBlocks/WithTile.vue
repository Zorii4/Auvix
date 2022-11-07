<template>
  <SolutionsBlocksTileWithPagination
    :pageProps="pageProps"
    :solutionsData="dateSort"
  />
</template>

<script>
export default {
  name: 'WithTile',
  props: {
    pageProps: Object,
    dateSort: Array,
  },
}
</script>