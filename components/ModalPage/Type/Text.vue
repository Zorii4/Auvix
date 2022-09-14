<template>
  <section class="services-single__warranty">
    <div class="container--without-padding">
      <div class="services-single__warranty-header">
        <SectionLead
          :title="pageProps.title"
          :sub_title="pageProps.sub_title"
          :description="pageProps.description"
        />
      </div>

      <div class="services-single__warranty-wrapper">
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
      <!-- 
      <ul class="services-single__warranty-features">
        {{#each warrantyFeatures }}
        <li class="services-single__warranty-feature">{{{this}}}</li>
        {{/each}}
      </ul> -->
    </div>
  </section>

</template>

<script>
export default {
  /* eslint-disable */
  name: 'Text',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.services-single {
  &__warranty {
    padding-bottom: 8rem;

    @media (max-width: 1599px) {
      padding-bottom: 7.2rem;
    }

    @media (max-width: 1199px) {
      padding-bottom: 6.4rem;
    }

    @media (max-width: 1023px) {
      padding-bottom: 5.6rem;
    }

    @media (max-width: 767px) {
      padding-bottom: 4.8rem;
    }
  }

  &__warranty-header {
    margin-bottom: 4rem;

    @media (max-width: 1599px) {
      margin-bottom: 3.6rem;
    }

    @media (max-width: 1199px) {
      margin-bottom: 3.2rem;
    }

    @media (max-width: 1023px) {
      margin-bottom: 2.8rem;
    }

    @media (max-width: 767px) {
      margin-bottom: 2rem;
    }
  }
  &__warranty-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.4rem;

    @media (max-width: 1023px) {
      grid-template-columns: 1fr;
    }
  }

  &__warranty-list {
    grid-column: 2 / -1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.8rem 0.4rem;

    @media (max-width: 1599px) {
    }

    @media (max-width: 1199px) {
      gap: 2.4rem 0.4rem;
    }

    @media (max-width: 1023px) {
      grid-column: 1 / -1;
      gap: 2rem 0.4rem;
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  &__warranty-item {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    @media (max-width: 767px) {
      gap: 0.4rem;
    }
  }

  &__warranty-title {
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.4;
    color: var(--easy-dark);

    @media (max-width: 1199px) {
      font-size: 1.8rem;
      line-height: 1.3;
    }
  }

  &__warranty-text {
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
}
</style>