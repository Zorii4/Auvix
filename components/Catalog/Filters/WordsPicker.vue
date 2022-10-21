<template>
  <div class="words">
    <div class="words__filter-inner">
      <div class="words__filter-tabs">
        <button
          @click="resetWords"
          :class="{'active' : pickedWords.length === 0}"
          class="words__filter-label"
        >Все</button>
        <label
          v-for="word of computedTopRowVariants"
          :key="word"
          class="words__filter-label"
          :class="{'active' : pickedWords.includes(word)}"
        >
          <span>{{ word }}</span>
          <input
            type="checkbox"
            :value="word"
            v-model="pickedWords"
            class="words__filter-tab"
            data-href="tab-content-2"
          />
        </label>
        <input
          class="words__filter-tab"
          data-href="tab-content-1"
        />
      </div>

      <div class="words__filter-tabs">
        <label
          class="words__filter-label"
          v-for="word of computedBottomRowVariants"
          :key="word"
          :class="{'active' : pickedWords.includes(word)}"
        >
          <span>{{ word }}</span>
          <input
            type="checkbox"
            :value="word"
            v-model="pickedWords"
            class="words__filter-tab"
            data-href="tab-content-2"
          />
        </label>
        <input
          class="words__filter-tab"
          data-href="tab-content-1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { alphabetAndNumbers, rusAlphabet } from '@/utils/alhabetVariants'
export default {
  name: 'WordFilter',

  props: {
    topRowVariants: {
      type: Array,
    },
    bottomRowVariants: {
      type: Array,
    },
    value: {
      type: Array,
      required: true,
    },
  },

  computed: {
    pickedWords: {
      get() {
        return this.value
      },

      set(value) {
        this.$emit('input', value)
      },
    },
    computedTopRowVariants() {
      return this.topRowVariants || alphabetAndNumbers
    },
    computedBottomRowVariants() {
      return this.bottomRowVariants || rusAlphabet
    },
  },

  methods: {
    resetWords() {
      this.pickedWords = []
    },
  },
}
</script>

<style lang="scss" scoped>
.words {
  display: block;

  &__filter-inner {
    padding-bottom: 4rem;
    border-bottom: 1px solid var(--grey);

    @media (max-width: 1199px) {
      padding-bottom: 3.2rem;
    }

    @media (max-width: 1023px) {
      padding-bottom: 2.8rem;
    }

    @media (max-width: 767px) {
      padding-bottom: 2rem;
    }
  }

  &__filter-tabs {
    display: flex;
    column-gap: 1rem;
    &:first-child {
      margin-bottom: 2rem;
    }
  }

  &__filter-label {
    cursor: pointer;
    font-size: 16px;
    line-height: 100%;
    font-weight: 400;
    border-radius: 4px;
    padding: 4px 8px;
    white-space: nowrap;
    &.active {
      background-color: #eff0f4;
    }
    input {
      position: absolute;
      visibility: hidden;
    }
  }

  &__filter-tab {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.4rem;
    font-size: 1.4rem;
    line-height: 1.1;
    transition: 0.3s;

    &.active {
      background-color: var(--grey);
    }
  }

  &__filter-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.8rem;
    padding: 0 1.2rem;

    border-radius: 0.6rem;

    font-size: 1.6rem;
    line-height: 1.25;

    transition: 0.3s;

    @media (max-width: 767px) {
      height: 2.4rem;
      padding: 0 0.8rem;

      border-radius: 0.4rem;

      font-size: 1.4rem;
      line-height: 1.1;
    }

    &.active {
      background-color: var(--grey);
    }
  }
}
</style>