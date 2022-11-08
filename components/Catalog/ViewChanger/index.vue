<template>
  <div class="catalog__content-grid-filter">
    <button class="active grid-row-js">
      <GridFilterRowIcon />
    </button>
    <button class="grid-tile-js">
      <GridFilterTileIcon />
    </button>
  </div>
</template>

<script>
import GridFilterRowIcon from '@/assets/icons/grid-filter-1.svg'
import GridFilterTileIcon from '@/assets/icons/grid-filter-2.svg'
export default {
  name: 'CatalogViewChanger',

  components: {
    GridFilterRowIcon,
    GridFilterTileIcon,
  },
}
</script>

<style lang="scss" scoped>
</style>