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
      type: [Number, String],
      required: true,
    },
    maxValue: {
      type: [Number, String],
      required: true,
    },
    min: {
      type: [Number, String],
      default: 0,
    },
    max: {
      type: [Number, String],
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

  watch: {
    minValue(value) {
      this.setMinMaxValueRange(value, this.maxValue)
    },
    maxValue(value) {
      this.setMinMaxValueRange(this.minValue, value)
    },
  },
  mounted() {
    const slierContainer = this.$refs.rangeSlider
    this.initRangeSlider(slierContainer)
    this.sliderInstance.on('change', this.emitChangedNewValues)
    // TODO improve perfomance for slide event
    this.sliderInstance.on('slide', this.emitTempNewValues)
  },

  methods: {
    initRangeSlider(rangeContainer) {
      this.sliderInstance = nouislider.create(rangeContainer, {
        start: [this.minValue, this.maxValue],
        connect: true,
        step: this.step,
        range: {
          min: [this.min],
          max: [this.max],
        },
      })
    },
    setMinMaxValueRange(min, max) {
      if (this.sliderInstance) {
        this.sliderInstance.set([min, max])
      }
    },
    emitChangedNewValues(values) {
      this.$emit('changeValues', values)
    },
    emitTempNewValues(values) {
      this.$emit('setTempValues', values)
    },
  },
}
</script>

<style lang="scss">
.range-slider {
  position: relative;
  left: 0.5rem;
  margin: 10px 0;
  width: calc(100% - 1.5rem);
  grid-column: span 2;
  height: 0.2rem;

  border: none;
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
    background-color: var(--dark);
  }

  .noUi-connects {
    border-radius: 0.3rem;
  }

  .noUi-handle-lower {
    right: -1.2rem;
  }
}
</style>