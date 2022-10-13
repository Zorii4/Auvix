<template>
  <section class="partners-single__features">
    <div class="container">
      <div v-if="pageProps.variation === 'in-four-col'">
        <div class="partners-single__features-header">
          <SectionLead
            :title="pageProps.title"
            :sub_title="pageProps.sub_title"
            :description="pageProps.description"
          />
        </div>
        <div
          v-if="pageProps.paragraphs"
          class="services-single__warranty-wrapper"
        >
          <ul class="services-single__warranty-list">
            <li
              v-for="item of pageProps.paragraphs"
              :key="item.id"
              class="services-single__warranty-item"
            >
              <h3 class="services-single__warranty-title">{{item.title}}</h3>
              <p class="services-single__warranty-text">{{item.description}}</p>
            </li>
          </ul>
        </div>
        <ol class="digits-row">
          <li
            v-for="(item, idx) in pageProps.steps"
            :key="item.id"
            class="digits-row__item"
            :style="item.image_url ? {backgroundImage: `url(${$config.baseURLImg}`+`${item.image_url})`} : {backgroundImage: `url(/images/steps-img/${idx + 1}.svg`}"
          >
            <p class="digits-row__text">{{item.description}}</p>
          </li>
        </ol>
      </div>
      <TextBlocksWithStepsAndIcons
        v-if="pageProps.variation === 'icons'"
        :pageProps="pageProps"
      />
      <TextBlocksWithStepsTiles
        v-if="pageProps.variation === 'tiles'"
        :pageProps="pageProps"
      />
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
    padding: 1.6rem 1rem 6.5rem 4rem;

    background-position: 0 0;
    background-size: contain;
    background-repeat: no-repeat;

    @media (max-width: 1599px) {
      gap: 1.6rem;
      padding: 1.6rem 1rem 5.5rem 2.4rem;
    }

    @media (max-width: 1199px) {
      padding-right: 0;
      padding-bottom: 5.6rem;
    }

    @media (max-width: 1023px) {
      padding: 1.6rem 1rem 5rem 1.6rem;
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

.services-single__warranty-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.4rem;
  margin-bottom: 4rem;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
}

.services-single__warranty-list {
  grid-column: 2 / -1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.8rem 1.5rem;

  @media (max-width: 1199px) {
    gap: 2.4rem 1.5rem;
  }

  @media (max-width: 1023px) {
    grid-column: 1 / -1;
    gap: 2rem 1.5rem;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}

.services-single__warranty-item {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-width: 767px) {
    gap: 0.4rem;
  }
}

.services-single__warranty-title {
  font-weight: 400;
  font-size: 2rem;
  line-height: 1.4;
  color: var(--easy-dark);

  @media (max-width: 1199px) {
    font-size: 1.8rem;
    line-height: 1.3;
  }
}

.services-single__warranty-text {
  padding-right: 3rem;

  font-size: 1.6rem;
  line-height: 1.25;
  color: var(--jack-grey);

  @media (max-width: 1599px) {
    padding-right: 0;
  }

  @media (max-width: 1199px) {
    font-size: 1.6rem;
    line-height: 1.25;
  }

  @media (max-width: 767px) {
    font-size: 1.4rem;
    line-height: 1.1;
  }
}
</style>