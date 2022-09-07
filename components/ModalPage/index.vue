<template>
  <div>
    <div
      v-for="item of typeToPageIndentificator"
      :key="item.id"
    >
      <component
        :is="item.componentType + item.componentName"
        :pageProps="item.componentData"
      ></component>
    </div>
  </div>

</template>

<script>
export default {
  /* eslint-disable */
  name: 'ModalPage',
  props: {
    pageBlocksData: Array,
  },
  computed: {
    typeToPageIndentificator() {
      if (this.pageBlocksData.length > 0) {
        return this.pageBlocksData
          .filter((el) => !Array.isArray(el.data))
          .map((item) => ({
            componentName: item.data.type
              .split('_')
              .map((e) => e[0].toUpperCase() + e.slice(1))
              .join(''),
            componentData: item.data,
            componentType: item.belonging
              .split('_')
              .map((e) => e[0].toUpperCase() + e.slice(1))
              .join(''),
          }))
      }
      return false
    },
  },
}
</script>

      