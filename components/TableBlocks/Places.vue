<template>
  <div class="stocks-single__prizes-row">
    <div class="prizes">
      <ul class="prizes__list">
        <li
          v-for="item of pageProps.table.rows"
          :key="item.id"
          class="prizes__item-wrapper"
        >
          <div class="prizes__item">
            <span class="prizes__item-title">{{item.place}}</span>
            <span class="prizes__item-prize">{{item.title}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Places',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.stocks-single {
  &__prizes-row {
    margin-top: 6rem;

    @media (max-width: 1599px) {
      margin-top: 5.6rem;
    }

    @media (max-width: 1199px) {
      margin-top: 5.2rem;
    }

    @media (max-width: 1023px) {
      margin-top: 4.8rem;
    }

    @media (max-width: 767px) {
      margin-top: 4rem;
    }
  }
}

.prizes {
  &__header {
    margin-bottom: 4rem;
    border-bottom: 1px solid var(--grey);

    @media (max-width: 1599px) {
      margin-bottom: 2.8rem;
    }

    @media (max-width: 1199px) {
      margin-bottom: 2.4rem;
    }

    @media (max-width: 1023px) {
      margin-bottom: 2rem;
    }
  }

  &__item-wrapper {
    padding: 2.8rem 0;

    border-top: 1px solid var(--grey);

    @media (max-width: 1599px) {
    }

    @media (max-width: 1199px) {
      padding: 2.4rem 0;
    }

    @media (max-width: 1023px) {
      padding: 2rem 0;
    }

    &:last-child {
      border-bottom: 1px solid var(--grey);
    }
  }

  &__item {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: flex-start;
    gap: 17.5rem;

    font-size: 2rem;
    line-height: 1.4;

    @media (max-width: 1599px) {
      gap: 13rem;
    }

    @media (max-width: 1199px) {
      gap: 10rem;
      font-size: 1.8rem;
    }

    @media (max-width: 1023px) {
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      gap: 1.6rem;
    }
  }

  &__item-title {
    color: var(--easy-dark);

    @media (max-width: 767px) {
      font-size: 1.6rem;
    }
  }
}
</style>