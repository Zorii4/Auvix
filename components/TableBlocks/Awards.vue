<template>
  <div class="events-single__schedule">
    <ul class="awards-modal__list">
      <li
        v-for="item of pageProps.table.rows"
        :key="item.id"
        class="awards-modal__item"
      >
        <p class="awards-modal__text">{{item.title}}</p>
        <span class="awards-modal__date">{{item.date | formatData('toYear')}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Awards',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.events-single {
  &__schedule {
    margin-bottom: 6rem;

    @media (max-width: 1599px) {
      margin-bottom: 4.8rem;
    }

    @media (max-width: 1199px) {
      margin-bottom: 4rem;
    }

    @media (max-width: 1023px) {
      margin-bottom: 3.6rem;
    }

    @media (max-width: 767px) {
      margin-bottom: 3.2rem;
    }
  }
}

.awards-modal {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    padding-bottom: 2rem;

    border-bottom: 1px solid var(--border-grey);

    font-size: 2rem;
    line-height: 1.4;

    @media (max-width: 1599px) {
    }

    @media (max-width: 1199px) {
      font-size: 1.8rem;
      line-height: 1.3;
    }

    @media (max-width: 1023px) {
    }

    @media (max-width: 767px) {
      flex-direction: column;
      gap: 1.2rem;

      font-size: 1.6rem;
      line-height: 1.25;
    }
  }

  &__text {
    max-width: 98rem;

    @media (max-width: 1599px) {
      max-width: 85rem;
    }

    @media (max-width: 1199px) {
      max-width: 65rem;
    }

    @media (max-width: 1023px) {
      max-width: 64rem;
    }
  }

  &__date {
    color: var(--jack-grey);
  }
}
</style>