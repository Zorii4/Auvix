<template>
  <div
    ref="rangeSlider"
    class="range-slider"
  ></div>
</template>

<script>
import nouislider from 'nouislider'

export default {
  name: 'MultipleRangeinput',

  props: {
    minValue: {
      type: Number,
      required: true,
    },
    maxValue: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      required: true,
    },
    step: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      sliderInstance: null,
    }
  },
  mounted() {
    const slierContainer = this.$refs.rangeSlider
    this.sliderInstance = nouislider.create(slierContainer, {
      start: [this.minValue, this.maxValue],
      range: {
        min: [this.min],
        max: [this.max],
      },
    })
  },
}
</script>

<style>
</style>