<template>
  <div class="post-two-columns">
    <div class="post-two-columns__left">
      <div class="post-two-columns__large-text"><span>{{pageProps.number}}</span></div>
      <div class="post-two-columns__large-text-caption"><span>{{pageProps.number_description}}</span>
      </div>
    </div>
    <div class="post-two-columns__right">
      <p>{{pageProps.textarea_description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Numbers',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.post-two-columns {
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  gap: 16.7rem;
  max-width: 123.5rem;
  margin: 0 auto;
  margin-bottom: 4rem;

  @media (max-width: 1599px) {
    gap: 8.3rem;
  }

  @media (max-width: 1199px) {
    gap: 4.3rem;
  }

  @media (max-width: 1023px) {
    gap: 3.5rem;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  &__left {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    @media (max-width: 1599px) {
      gap: 2.8rem;
    }

    @media (max-width: 1199px) {
      gap: 2rem;
    }

    @media (max-width: 1023px) {
      gap: 1.6rem;
    }

    @media (max-width: 767px) {
      gap: 1.2rem;
    }
  }

  &__large-text {
    font-size: 6rem;
    line-height: 1;

    @media (max-width: 1199px) {
      font-size: 5.2rem;
    }

    @media (max-width: 1023px) {
      font-size: 4.4rem;
    }

    @media (max-width: 767px) {
      font-size: 4.8rem;
    }
  }

  &__large-text-caption {
    font-size: 1.6rem;
    line-height: 1.25;
    color: var(--jack-grey);

    @media (max-width: 1023px) {
      font-size: 1.4rem;
    }
  }

  &__right {
    max-width: 74.1rem;

    p {
      font-size: 2rem;
      line-height: 1.4;
      color: var(--easy-dark);

      @media (max-width: 1199px) {
        font-size: 1.8rem;
      }

      @media (max-width: 767px) {
        font-size: 1.6rem;
      }
    }
  }
}
</style>