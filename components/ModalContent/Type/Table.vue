<template>
  <section class="table-section">
    <div class="narrow-container">
      <TableBlocksPersons
        v-if="pageProps.table.type === 'persons'"
        :pageProps='pageProps'
      />

      <TableBlocksEvents
        v-if="pageProps.table.type === 'events'"
        :pageProps='pageProps'
      />

      <TableBlocksPlaces
        v-if="pageProps.table.type === 'places'"
        :pageProps='pageProps'
      />

      <TableBlocksAwards
        v-if="pageProps.table.type === 'awards'"
        :pageProps='pageProps'
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Table',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.table-section {
  margin-bottom: 5rem;
}
</style>