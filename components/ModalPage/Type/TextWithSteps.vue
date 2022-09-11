<template>
  <section
    class="partners-single__features"
    style="display:none"
  >
    <div class="container">
      <div class="partners-single__features-header">
        <div class="section-lead">
          <div class="section-lead__column">
            <h2 class="section-lead__title section-title">{{pageProps.title}}</h2>
          </div>
          <div class="section-lead__column">
            <h3 class="section-lead__subtitle">{{pageProps.sub_title}}</h3>
            <div class="section-lead__text">
              <p>{{pageProps.description}} </p>
            </div>
          </div>
        </div>

      </div>
      <ol class="digits-row">
        <li
          class="digits-row__item"
          v-for="item of pageProps.steps"
          :key="item.id"
          :style="{backgroundImage: `url(${item.image_url})`}"
        >
          <p class="digits-row__text">{{item.description}}</p>
        </li>
      </ol>

    </div>
  </section>

</template>

<script>
export default {
  /* eslint-disable */
  name: 'TextWithSteps',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.partners-single {
  &__features {
    padding-bottom: 6rem;

    @media (max-width: 1599px) {
      padding-bottom: 5.6rem;
    }

    @media (max-width: 1199px) {
      padding-bottom: 5.2rem;
    }

    @media (max-width: 1023px) {
      padding-bottom: 4rem;
    }

    @media (max-width: 767px) {
      padding-bottom: 3.2rem;
    }
  }

  &__features-header {
    margin-bottom: 6rem;

    @media (max-width: 1599px) {
      margin-bottom: 5.6rem;
    }

    @media (max-width: 1199px) {
      margin-bottom: 5.2rem;
    }

    @media (max-width: 1023px) {
      margin-bottom: 4rem;
    }

    @media (max-width: 767px) {
      margin-bottom: 3.2rem;
    }
  }
}

.section-lead {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.6rem 0.4rem;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 767px) {
    gap: 2.4rem;
  }

  &__title {
    margin: 0;
  }

  &__column {
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

  &__subtitle {
    font-weight: 400;
    font-size: 2.8rem;
    line-height: 1.3;

    @media (max-width: 1199px) {
      font-size: 2.4rem;
      line-height: 1.2;
    }

    @media (max-width: 767px) {
      font-size: 2rem;
    }
  }
}

.digits-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.4rem;

  counter-reset: digitRow;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3.2rem 1rem;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 2.4rem;
  }

  &__item {
    display: flex;
    gap: 2.4rem;
    padding: 1.6rem 1rem 7.4rem 4rem;

    background-position: 0 0;
    background-size: contain;
    background-repeat: no-repeat;

    @media (max-width: 1599px) {
      gap: 1.6rem;
      padding: 1.6rem 1rem 7.2rem 2.4rem;
    }

    @media (max-width: 1199px) {
      padding-right: 0;
      padding-bottom: 5.6rem;
    }

    @media (max-width: 1023px) {
      padding: 1.6rem 1rem 7.4rem 1.6rem;
    }

    @media (max-width: 767px) {
      max-width: 22.4rem;
      margin: 0 auto;
      gap: 1.2rem;
      padding: 1.2rem 1.2rem 6.8rem;
    }

    &::before {
      counter-increment: digitRow;
      content: counter(digitRow);

      font-size: 6rem;
      line-height: 6rem;

      @media (max-width: 1199px) {
        font-size: 5.2rem;
      }

      @media (max-width: 767px) {
        font-size: 4rem;
      }
    }
  }

  &__text {
    margin-top: 0.8rem;

    font-size: 2rem;
    line-height: 1.2;
    color: var(--easy-dark);

    @media (max-width: 1599px) {
      margin-top: 0;
    }

    @media (max-width: 1199px) {
      font-size: 1.8rem;
      line-height: 1.3;
    }

    @media (max-width: 1023px) {
      max-width: 30rem;
    }

    @media (max-width: 767px) {
      font-size: 1.6rem;
      line-height: 1.25;
    }
  }
}
</style>