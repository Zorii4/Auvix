<template>
  <div class="narrow-container">
    <div class="stocks-single__event-schedule">
      <ol class="digits">
        <li
          v-for="item of pageProps.steps"
          :key="item.id"
          class="digits__item"
        >
          <div class="digits__item-content">
            <span class="digits__text">{{item.description}}</span>
          </div>
          <svg
            :style="{backgroundImage: `url(${$config.baseURLImg}`+`${item.image_url})`}"
            class="digits__icon"
          ></svg>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Steps',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.stocks-single {
  &__event-schedule {
    margin-top: 6rem;
    margin-bottom: 5rem;

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

  &__event-schedule-title {
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 1.2;

    margin-bottom: 4rem;

    @media (max-width: 1199px) {
      margin-bottom: 3.6rem;
    }

    @media (max-width: 1023px) {
      margin-bottom: 3.2rem;
    }

    @media (max-width: 767px) {
      margin-bottom: 2rem;
      font-size: 2rem;
    }
  }
}

.digits {
  display: grid;
  grid-template-columns: minmax(min-content, 45.6rem) minmax(
      min-content,
      36.7rem
    );
  justify-content: space-between;
  gap: 3.6rem 2rem;

  counter-reset: digitCount;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }

  &__item {
    position: relative;
    padding-left: 4rem;
    min-height: 14.6rem;

    @media (max-width: 1599px) {
      padding-left: 3.2rem;
    }

    @media (max-width: 1199px) {
    }

    @media (max-width: 1023px) {
      padding-left: 2.4rem;
    }

    @media (max-width: 767px) {
      padding-left: 0;
      min-height: auto;
    }

    &::before {
      display: none;
    }
  }

  &__item-content {
    position: relative;

    display: flex;
    align-items: flex-start;
    gap: 1.6rem 2.4rem;

    counter-increment: digitCount;

    &::before {
      content: counter(digitCount);

      font-size: 6rem;
      line-height: 1;

      @media (max-width: 1199px) {
        font-size: 5.2rem;
      }

      @media (max-width: 767px) {
        content: counter(digitCount) '.';

        margin-top: 0.3rem;
        font-size: 1.6rem;
      }
    }

    @media (max-width: 1599px) {
      gap: 1.6rem;
    }

    @media (max-width: 767px) {
      gap: 1.4rem;
    }
  }

  &__text {
    max-width: 30rem;

    font-size: 2rem;
    line-height: 1.4;

    @media (max-width: 1199px) {
      font-size: 1.8rem;
    }

    @media (max-width: 767px) {
      max-width: none;
      font-size: 1.6rem;
    }
  }

  &__icon {
    width: 21.7rem;
    height: 20.5rem;
    position: absolute;
    left: 0;
    top: -1.5rem;
    z-index: -1;
    background-repeat: no-repeat;
    background-size: contain;

    @media (max-width: 767px) {
      display: none;
    }
  }
}
</style>