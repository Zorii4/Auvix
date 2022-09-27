<template>

  <div class="narrow-container">
    <div class="text-container">
      <div
        v-if="pageProps.list.type === 'bullet'"
        class="text-container"
      >
        <h3></h3>
        <ul>
          <li
            v-for="item of pageProps.list.data"
            :key="item.id"
          >{{item.value}}</li>
        </ul>
      </div>
      <div
        v-if="pageProps.list.type === 'numeric'"
        class="text-container"
      >
        <h2></h2>
        <ol>
          <li
            v-for="item of pageProps.list.data"
            :key="item.id"
          >{{item.value}}</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.text-container {
  max-width: 86.4rem;

  h3 {
    margin-bottom: 2.8rem;

    font-weight: 400;
    font-size: 2.4rem;
    line-height: 1.2;

    @media (max-width: 1199px) {
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    @media (max-width: 767px) {
      font-size: 1.8rem;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-left: 4.8rem;

    @media (max-width: 1599px) {
    }

    @media (max-width: 1199px) {
      margin-left: 3.2rem;
    }

    @media (max-width: 767px) {
      margin-left: 0;
      gap: 1.6rem;
    }

    li {
      display: flex;
      align-items: flex-start;
      gap: 2.2rem;

      font-size: 1.8rem;
      line-height: 1.3;
      color: var(--easy-dark);

      @media (max-width: 1199px) {
        gap: 2rem;
      }

      @media (max-width: 767px) {
        gap: 1.2rem;
        font-size: 1.6rem;
      }

      &::before {
        content: '';

        width: 1.2rem;
        height: 1.2rem;
        margin-top: 0.8rem;
        flex-shrink: 0;

        border-radius: 50%;
        background: var(--easy-dark);

        @media (max-width: 1023px) {
          margin-top: 0.7rem;
        }

        @media (max-width: 767px) {
          width: 1rem;
          height: 1rem;
          margin-top: 0.6rem;
        }
      }
    }
  }

  h2 {
    margin-bottom: 4rem;

    font-weight: 400;
    font-size: 2.8rem;
    line-height: 1.1;

    @media (max-width: 1199px) {
      margin-bottom: 3.2rem;
      font-size: 2.4rem;
    }

    @media (max-width: 1023px) {
      margin-bottom: 2.8rem;
    }

    @media (max-width: 767px) {
      margin-bottom: 2rem;
      font-size: 2rem;
    }
  }

  ol {
    display: flex;
    flex-direction: column;
    gap: 2.8rem;
    margin-left: 2rem;

    counter-reset: olCounter;

    @media (max-width: 1599px) {
      margin-left: 2.2rem;
    }

    @media (max-width: 1199px) {
      gap: 2.4rem;
      margin-left: 2.4rem;
    }

    @media (max-width: 767px) {
      gap: 2rem;
      margin-left: 0;
    }

    li {
      display: flex;
      align-items: flex-start;
      gap: 2.8rem;

      font-size: 2rem;
      line-height: 1.4;
      color: var(--easy-dark);

      @media (max-width: 1199px) {
        gap: 2.1rem;
        font-size: 1.8rem;
      }

      @media (max-width: 767px) {
        gap: 1.4rem;
        font-size: 1.6rem;
      }

      &::before {
        counter-increment: olCounter;
        content: counter(olCounter) '.';
      }
    }
  }
}
</style>
