<template>
  <section class="services-single__warranty">
    <div class="container">
      <div v-if="!pageProps.use_slider">
        <div class="services-single__warranty-header">
          <SectionLead
            :title="pageProps.title"
            :sub_title="pageProps.sub_title"
            :description="pageProps.description"
          />
        </div>
      </div>

      <CardSwiper
        v-if="pageProps.use_slider"
        :slides="pageProps"
      />

      <ServiceCardsTwoColumnCard
        v-if="pageProps.column_type === '2-col'"
        :pageProps="pageProps"
      />

      <ServiceCardsFourColumnCard
        v-if="pageProps.column_type === '4-col'"
        :pageProps="pageProps"
      />

    </div>
  </section>
</template>

<script>
export default {
  /* eslint-disable */
  name: 'Service',
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
    margin-bottom: 6rem;

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
}
</style>