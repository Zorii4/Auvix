<template>
  <div class="search-panel__history-box">
    <div class="search-panel__history">
      <div class="search-panel__history-header">
        <h3 class="search-panel__history-title">История поиска</h3>
        <button
          class="search-panel__history-reset"
          @click="clearHistory"
        >Очистить</button>
      </div>
      <ul class="search-panel__history-list">
        <li
          v-for="historyItem of historySearchList"
          :key="historyItem"
        >
          <div
            class="search-panel__history-item"
            @click="pickItem(historyItem)"
          >
            <HistoryIcon class="search-panel__history-icon" />
            <p class="search-panel__history-text">{{historyItem}}</p>
            <button
              class="search-panel__history-delete"
              @click.stop="deleteItemFromHistory(historyItem)"
            >
              <CrossIcon />
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CrossIcon from '@/assets/icons/cross-icon.svg'
import HistoryIcon from '@/assets/icons/history-icon.svg'
export default {
  name: 'SearchHistorySearch',

  components: {
    CrossIcon,
    HistoryIcon,
  },

  props: {
    historySearchList: {
      type: Array,
      required: true,
    },
  },

  methods: {
    deleteItemFromHistory(item) {
      this.$emit('deleteItemFromHistory', item)
    },
    pickItem(item) {
      this.$emit('pickItem', item)
    },
    clearHistory() {
      this.$emit('clearHistory')
    },
  },
}
</script>

<style lang="scss" scoped>
.search-panel {
  &__history-box {
    max-height: 75vh;
    max-width: 98.6rem;
    width: 100%;
    overflow: hidden;
    background-color: #fff;
    border-radius: 0px 0px 24px 24px;
  }
  &__history {
    max-height: 75vh;
    overflow-y: scroll;
    position: relative;
    width: 100%;
    padding: 4.3rem 12rem;
    &::-webkit-scrollbar {
      width: 0.6rem;

      background-color: var(--light-grey);
      border-radius: 0.3rem;
      overflow: hidden;
    }

    &::-webkit-scrollbar-thumb {
      width: 100%;

      background-clip: content-box;
      background: linear-gradient(
        180deg,
        #b659ff 0%,
        #99f5a2 49.42%,
        #79dfff 100%
      );
      border-radius: 0.3rem;
    }
    &::after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 4rem;
      background: linear-gradient(
        180deg,
        #858383 0%,
        rgba(217, 217, 217, 0) 50%
      );
    }
  }
  &__history-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem 0.8rem 1.4rem;

    @media (max-width: 767px) {
      padding-bottom: 1.6rem;
      padding-left: 0;
      padding-right: 0;
    }
  }

  &__history-title {
    font-size: 1.4rem;
    line-height: 1.1;
    font-weight: 400;
    color: var(--jack-grey);
  }

  &__history-reset {
    font-size: 1.4rem;
    line-height: 1.1;
    color: #4a52ff;
  }

  &__history-list {
    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }
  }

  &__history-item {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 0.6rem 0.8rem;

    border-radius: 0.6rem;
    cursor: pointer;

    font-size: 1.6rem;
    line-height: 1.25;

    transition: 0.3s;

    @media (max-width: 767px) {
      padding: 0;

      &:hover {
        background: transparent;
      }
    }

    &:hover {
      background: var(--grey);
    }
  }

  &__history-icon {
    width: 2.4rem;
    height: 2.4rem;
    fill: none !important;
  }

  &__history-text {
    flex-grow: 1;
  }

  &__history-delete {
    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
}
</style>