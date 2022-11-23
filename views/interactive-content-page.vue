<template>

  <div>
    <ModalContent
      v-if="newData"
      :pageData="newData"
    />
  </div>

</template>

<script>
export default {
  name: 'InteractiveContentPage',

  data: () => ({
    newData: null,
  }),

  methods: {
    async getInteractiveContent() {
      const codeItem = this.$route.params.code
      try {
        const itemData = await this.$axios.$get(
          `/interactive-content/${codeItem}`
        )
        if (itemData) {
          this.newData = itemData?.data?.config?.blocks
          return itemData
        }
        return
      } catch (e) {
        console.error(e)
        this.$router.push('/')
      }
    },
  },

  mounted() {
    this.getInteractiveContent()
  },
}
</script>

<style lang="scss" scoped>
</style>