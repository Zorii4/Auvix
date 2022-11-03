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

<style lang="scss" scoped>
.range-slider {
  .noUi-handle {
    right: -1rem;
    top: -0.7rem;

    width: 1.6rem;
    height: 1.6rem;

    border: none;
    border-radius: 50%;
    box-shadow: none;
    background-color: var(--dark);
    cursor: pointer;

    &::before {
      display: none;
    }

    &::after {
      display: none;
    }
  }

  .noUi-connect {
    background: var(--dark);
  }

  .noUi-connects {
    border-radius: 0.3rem;
  }

  .noUi-handle-lower {
    right: -1.2rem;
  }
}
</style>