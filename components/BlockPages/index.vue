<template>
  <div>
    <div
      v-for="page of pageBlocksData"
      :key="page.id"
    >
      <div v-if="page.belonging='modal_page'">
        <h1>modal page</h1>
      </div>
      <div v-if="page.belonging='modal_content'">
        <h1>modal content</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlockPages',
  props: {
    pageBlocksData: Array,
  },
}
</script>