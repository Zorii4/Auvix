<template>
  <section>
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