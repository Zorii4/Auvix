<template>
  <div class="catalog__content-grid-filter">
    <button
      :class="{'active' : currentLayoutType === 'row'}"
      @click.prevent="changeCatalogLayout('row')"
    >
      <GridFilterRowIcon />
    </button>
    <button
      :class="{'active' : currentLayoutType === 'tile'}"
      @click.prevent="changeCatalogLayout('tile')"
    >
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

  props: {
    currentLayoutType: {
      type: String,
      required: true,
    },
  },

  methods: {
    changeCatalogLayout(type) {
      this.$emit('changeLayoutCatalog', type)
    },
  },
}
</script>

<style lang="scss" scoped>
.catalog__content-grid-filter button.active svg {
  fill: var(--jack-grey);
}
</style>