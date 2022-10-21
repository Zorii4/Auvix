<template>
  <section class="dealer__section">
    <div class="container">
      <div class="dealer__partner-lead">
        <div>
          <div class="services-single__warranty-header">
            <SectionLead
              :title="pageProps.title"
              :sub_title="pageProps.sub_title"
              :description="pageProps.description"
            />
          </div>
        </div>
      </div>

      <ul class="dealer__partner-list">
        <li
          class="dealer__partner-item-wrapper"
          v-for="item of pageProps.paragraphs"
          :key="item.id"
        >
          <div class="dealer__partner-item">
            <div class="dealer__partner-icon">
              <img :src="$config.baseURLImg + item.image_url">
            </div>
            <p class="dealer__partner-text">{{item.description}}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  /* eslint-disable */
  name: 'TextWithIcon',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.dealer__section {
  margin-bottom: 5rem;
}

.dealer {
  &__partner-lead {
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

  &__partner-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem 0.4rem;

    @media (max-width: 1199px) {
      gap: 3.6rem 0.4rem;
    }

    @media (max-width: 1023px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 2.8rem 0.4rem;
    }

    @media (max-width: 340px) {
      grid-template-columns: 1fr;
      gap: 2.4rem 0.4rem;
    }
  }

  &__partner-item {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 767px) {
      gap: 1.6rem;
    }
  }

  &__partner-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10.5rem;
    aspect-ratio: 1 / 1;

    @media (max-width: 1199px) {
      width: 8.8rem;
    }

    @media (max-width: 767px) {
      width: 7.2rem;
    }

    img {
      width: 10rem;
      aspect-ratio: 1 / 1;
    }
  }

  &__partner-text {
    max-width: 33rem;
    padding-right: 1rem;

    font-size: 1.8rem;
    line-height: 1.3;
    color: var(--easy-dark);

    @media (max-width: 1199px) {
      max-width: 23.1rem;

      font-size: 1.6rem;
      line-height: 1.25;
    }

    @media (max-width: 1023px) {
      max-width: 30rem;
    }

    @media (max-width: 767px) {
      font-size: 1.4rem;
    }
  }
}
</style>