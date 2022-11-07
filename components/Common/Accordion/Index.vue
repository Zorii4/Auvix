<template>
  <ul
    class="accordion"
    :class="containerClass"
  >
    <slot></slot>
  </ul>
</template>

<script>
export default {
  provide() {
    return { accordion: this.accordion }
  },

  props: {
    containerClass: {
      type: String,
      default: 'accordion-container',
    },
  },

  data() {
    return {
      accordion: {
        active: [],
        idCount: 0,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.accordion {
  list-style: none;
  margin: 0;
  padding: 0;
}
.accordion-container {
  display: flex;
  flex-direction: column;
  gap: 5.2rem;
}
</style>
