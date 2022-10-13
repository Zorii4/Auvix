<template>
  <div class="events-single__schedule">
    <div class="schedule">
      <ul class="schedule__list">
        <li
          v-for="item of pageProps.table.rows"
          :key="item.id"
          class="schedule__item-wrapper"
        >
          <div class="schedule__item">
            <time class="schedule__item-time">{{item.date | formatData('toHour')}} - {{item.date_end | formatData('toHour')}}</time>
            <div class="schedule__item-description">
              <h4 class="schedule__item-title">{{item.title}}</h4>
              <div class="schedule__item-text">
                <p>{{item.description}}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Events',
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

.schedule {
  &__item-wrapper {
    border-top: 1px solid var(--grey);
    border-bottom: 1px solid var(--grey);

    &:last-child {
      border-bottom: 0;
    }
  }

  &__item {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: flex-start;
    gap: 9.2rem;
    padding: 2.8rem 0;

    @media (max-width: 1599px) {
      gap: 4.7rem;
    }

    @media (max-width: 1199px) {
      gap: 2.7rem;
      padding: 2.4rem 0;
    }

    @media (max-width: 1023px) {
      gap: 5rem;
      padding: 2rem 0;
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      align-items: stretch;
      gap: 1.6rem;
    }
  }

  &__item-time {
    display: flex;
    align-items: center;
    gap: 2.8rem;

    font-size: 2rem;
    line-height: 1.4;

    @media (max-width: 1199px) {
      font-size: 1.8rem;
      gap: 2rem;
    }

    @media (max-width: 767px) {
      font-size: 1.6rem;
      gap: 1.2rem;
    }

    &::before {
      content: '';

      width: 1.2rem;
      height: 1.2rem;

      background: var(--easy-dark);
      border-radius: 50%;

      @media (max-width: 1199px) {
        width: 1rem;
        height: 1rem;
      }
    }
  }

  &__item-title {
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.4;
    margin-bottom: 2.8rem;

    @media (max-width: 1199px) {
      font-size: 1.8rem;
      margin-bottom: 2rem;
    }

    @media (max-width: 767px) {
      margin-bottom: 0.8rem;
    }
  }

  &__item-text {
    max-width: 66.6rem;

    p {
      font-size: 1.8rem;
      line-height: 1.3;
      color: var(--easy-dark);

      @media (max-width: 1199px) {
        font-size: 1.6rem;
      }

      @media (max-width: 767px) {
        font-size: 1.4rem;
      }
    }
  }
}
</style>