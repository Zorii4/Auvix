<template>
  <div class="stats__inner">
    <div
      class="stats__left-column"
      v-for="item of pageProps.numbers"
      :key="item.id"
    >
      <span class="stats__number">{{item.value}}</span>
      <div class="stats__number-caption">
        <p>{{item.description}}
        </p>
      </div>
    </div>
    <div class="stats__right-column">
      <h3 class="stats__title">
        {{pageProps.sub_title}}
      </h3>
      <p>
        {{pageProps.description}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WithOneNumber',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.stats {
  padding-bottom: 6rem;

  @media (max-width: 767px) {
    padding-bottom: 4rem;
  }

  &__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 30px;

    @media (max-width: 1023px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 6.8rem;
    }

    @media (max-width: 767px) {
      gap: 5.2rem;
    }
  }

  &__left-column {
    position: relative;

    display: flex;
    flex-direction: column;
    padding-top: 8rem;
    padding-left: 12.4rem;
    margin-right: 3rem;
    max-width: 415px;

    @media (max-width: 1199px) {
      padding-top: 6.8rem;
      padding-left: 8.2rem;
    }

    @media (max-width: 1023px) {
      padding-top: 4.8rem;
      padding-left: 9.2rem;
      padding-right: 9.2rem;
    }

    @media (max-width: 767px) {
      padding-top: 5rem;
      padding-left: 5.4rem;
      padding-right: 0;
    }

    @media (max-width: 359px) {
      padding-left: 0;
    }

    &::before {
      content: '';

      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;

      width: 24.4rem;
      height: 24.4rem;
      background: linear-gradient(
        89.98deg,
        #f0e2dd 27.14%,
        rgba(255, 255, 255, 0) 80%
      );

      border-radius: 50%;

      @media (max-width: 1199px) {
        width: 22rem;
        height: 22rem;
      }

      @media (max-width: 1023px) {
        left: auto;
        right: -2rem;

        width: 18rem;
        height: 18rem;

        background: linear-gradient(
          -89.98deg,
          #f0e2dd 27.14%,
          rgba(255, 255, 255, 0) 80%
        );
      }

      @media (max-width: 767px) {
        left: 0;
        right: 0;

        width: 15.8rem;
        height: 15.8rem;

        background: linear-gradient(
          89.98deg,
          #f0e2dd 27.14%,
          rgba(255, 255, 255, 0) 80%
        );
      }
    }
  }

  &__number {
    display: block;
    margin-bottom: 1.6rem;

    font-size: 6rem;
    line-height: 1;

    @media (max-width: 1199px) {
      font-size: 5.2rem;
      margin-bottom: 1.2rem;
    }

    @media (max-width: 1023px) {
      font-size: 4.8rem;
    }

    @media (max-width: 767px) {
      font-size: 4rem;
    }
  }

  &__number-caption {
    p {
      font-size: 1.6rem;
      line-height: 1.25;

      @media (max-width: 1023px) {
        font-size: 1.4rem;
      }
    }
  }

  &__right-column {
    max-width: 73.8rem;

    p {
      margin-bottom: 2rem;

      @extend %fs-t2;

      &:last-of-type {
        margin-bottom: 0;
      }

      @media (max-width: 1199px) {
        font-size: 1.8rem;
      }

      @media (max-width: 767px) {
        font-size: 1.8rem;
        line-height: 1.3;
      }
    }

    @media (max-width: 1023px) {
      padding-left: 9.2rem;
      max-width: 55.5rem;
    }

    @media (max-width: 767px) {
      padding-left: 0;
    }
  }

  &__title {
    max-width: 57.5rem;
    margin: 2rem 0 4rem;

    font-weight: 400;
    font-size: 2.8rem;
    line-height: 1.1;

    @media (max-width: 1599px) {
      margin-bottom: 3.6rem;
    }

    @media (max-width: 1199px) {
      margin-bottom: 2.8rem;
      font-size: 2.4rem;
    }

    @media (max-width: 1023px) {
      margin-top: 0;
      margin-bottom: 2rem;
    }

    @media (max-width: 767px) {
      margin-bottom: 1.2rem;

      font-size: 2rem;
      line-height: 1.2;
    }
  }
}
</style>

