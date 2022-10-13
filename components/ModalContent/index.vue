<template>
  <div>
    <div v-if="pageData.length === 0">Новостей нет</div>
    <div
      v-else
      v-for="item of typeToPageIndentificator"
      :key="item.id"
    >
      <!-- {{item.componentName}} -->
      <component
        :is="item.componentType + item.componentName"
        :pageProps="item.componentData"
      >
      </component>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalContent',
  props: {
    pageData: Array,
  },
  computed: {
    typeToPageIndentificator() {
      if (this.pageData.length > 0) {
        return this.pageData
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