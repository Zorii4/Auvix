<template>
  <div class="search-page__empty">
    <EmptyIcon class="search-page__empty-icon" />
    <h3 class="search-page__empty-title">По вашему запросу ничего не найдено</h3>
    <p class="search-page__empty-text">
      Попробуйте задать другие значения и повторить поиск
    </p>
  </div>
</template>

<script>
import EmptyIcon from '@/assets/icons/empty-icon.svg'
export default {
  name: 'SearchEmptyResults',

  components: {
    EmptyIcon,
  },
}
</script>

<style lang="scss" scoped>
.search-page {
  &__empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6.4rem;

    border-radius: 2rem;
    background-color: var(--grey);

    text-align: center;
  }

  &__empty-icon {
    width: 23.2rem;
    aspect-ratio: 1 / 1;
    margin-bottom: 4rem;
  }

  &__empty-title {
    margin-bottom: 1.2rem;

    font-weight: 400;
    font-size: 2.4rem;
    line-height: 1.2;
  }

  &__empty-text {
    max-width: 28rem;

    font-size: 1.6rem;
    line-height: 1.25;
  }
}
</style>