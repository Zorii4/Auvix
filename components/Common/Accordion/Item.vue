<template>
  <li class="accordion__item">
    <div
      class="accordion__trigger"
      :class="{'accordion__trigger_active': visible}"
      @click="open"
    >
      <slot
        :visible="visible"
        name="accordion-trigger"
      ></slot>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >

      <div
        v-show="visible"
        class="accordion__content"
      >
        <ul>
          <slot name="accordion-content"></slot>
        </ul>
      </div>
    </transition>
  </li>
</template>


<script>
export default {
  inject: ['accordion'],

  props: {
    initialOpened: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      index: null,
    }
  },
  computed: {
    visible() {
      return this.accordion.active.includes(this.index)
    },
  },
  created() {
    this.index = this.accordion.idCount++
    if (this.initialOpened) {
      this.open()
    }
  },
  methods: {
    open() {
      if (this.visible) {
        this.accordion.active = this.accordion.active.filter(
          (el) => el !== this.index
        )
      } else {
        this.accordion.active.push(this.index)
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    end(el) {
      el.style.height = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.accordion__item {
  cursor: pointer;
  position: relative;
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
