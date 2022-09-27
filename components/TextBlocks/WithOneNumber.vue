<template>

  <div class="career__stats-wrapper">
    <div
      class="career__stats-digit"
      v-for="item of pageProps.numbers"
      :key="item.id"
      :class="{'center': textCenterPosition}"
    >
      <span
        class="career__stats-number"
        :class="{'center': textCenterPosition}"
      >{{item.value}}</span>
      <p
        class="career__stats-description"
        :class="{'center': textCenterPosition}"
      >{{item.description}}</p>
    </div>
    <div class="career__stats-content">
      <h3>
        {{pageProps.sub_title}}
      </h3>
      <p v-html="descriptionReplacer"></p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'WithOneNumber',
  props: {
    pageProps: Object,
  },
  computed: {
    textCenterPosition() {
      return this.pageProps.content_position === 'center'
    },

    descriptionReplacer() {
      if (
        this.pageProps.description &&
        typeof this.pageProps.description === 'string'
      ) {
        return this.pageProps.description.replace(/\n/g, '<p></p><br>')
      }
      return false
    },
  },
}
</script>

<style lang="scss" scoped>
.career {
  &__stats-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.6rem 0.4rem;
    margin-bottom: 50px;

    @media (max-width: 1023px) {
      grid-template-columns: 1fr;
      align-items: stretch;
    }

    @media (max-width: 767px) {
      gap: 2.4rem;
    }
  }

  &__stats-digit {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    max-width: 65rem;
    background-repeat: no-repeat;
    background-size: contain;
    justify-content: flex-start;
    position: relative;

    &.center {
      align-items: flex-start;
      justify-content: center;
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

    @media (max-width: 1199px) {
      max-width: 32.1rem;
      padding-bottom: 3.6rem;
    }

    @media (max-width: 1023px) {
      max-width: 36.2rem;
    }

    @media (max-width: 767px) {
      gap: 0.8rem;
      max-width: 26.6rem;
      margin-left: auto;
      margin-right: auto;
      padding-bottom: 4rem;
    }
  }

  &__stats-number {
    font-size: 6rem;
    line-height: 1;

    &.center {
      margin-left: 12rem;
    }

    @media (max-width: 1199px) {
      font-size: 5.2rem;
    }

    @media (max-width: 767px) {
      font-size: 4rem;
    }
  }

  &__stats-description {
    max-width: 26.5rem;
    font-size: 1.6rem;
    line-height: 1.25;
    color: var(--easy-dark);

    &.center {
      margin-left: 12rem;
    }

    @media (max-width: 1199px) {
      max-width: 21.7rem;

      font-size: 1.8rem;
      line-height: 1.3;
    }

    @media (max-width: 767px) {
      font-size: 1.6rem;
    }
  }

  &__stats-content {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media (max-width: 1199px) {
      gap: 3.2rem;
    }

    @media (max-width: 1023px) {
      gap: 2.8rem;
    }

    @media (max-width: 767px) {
      gap: 2rem;
    }

    h3 {
      font-weight: 400;
      font-size: 2.8rem;
      line-height: 1.1;

      @media (max-width: 1199px) {
        font-size: 2.4rem;
        line-height: 1.2;
      }

      @media (max-width: 767px) {
        font-size: 2rem;
      }
    }

    p {
      font-size: 2rem;
      line-height: 1.4;
      color: var(--easy-dark);

      @media (max-width: 1199px) {
        font-size: 1.8rem;
        line-height: 1.3;
      }

      @media (max-width: 767px) {
        font-size: 1.6rem;
        line-height: 1.25;
      }
    }
  }
}
</style>

