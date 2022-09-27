<template>
  <section>
    <SectionLead
      :title="pageProps.title"
      :sub_title="pageProps.sub_title"
      :description="pageProps.description"
    />
    <div class="container">
      <ul class="services-single__services-list">
        <li
          v-for="item of pageProps.paragraphs"
          :key="item.id"
          class="services-single__services-item"
        >
          <h3 class="services-single__services-item-title">{{item.title}}</h3>
          <p class="services-single__services-item-text">{{item.description}}</p>
        </li>
      </ul>
    </div>
    <div class="services-single__img">
      <img
        :src="$config.baseURLImg + pageProps.image_url"
        :alt="pageProps.image_alt || 'Фото'"
      >
    </div>
  </section>
</template>

<script>
export default {
  name: 'TextWithBigPhoto',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.services-single {
  &__services-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.8rem 0.4rem;
    margin-top: 6rem;
    margin-bottom: 6rem;

    @media (max-width: 1599px) {
      margin-top: 5.6rem;
    }

    @media (max-width: 1199px) {
      gap: 2.4rem 0.4rem;
      margin-top: 5.2rem;
    }

    @media (max-width: 1023px) {
      gap: 2rem 2.4rem;
      margin-top: 4rem;
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      margin-top: 3.2rem;
    }
  }

  &__services-item {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 2.8rem;

    border-bottom: 1px solid var(--border-grey);

    @media (max-width: 1199px) {
      gap: 1.6rem;
      padding-bottom: 2.4rem;
    }

    @media (max-width: 1023px) {
      gap: 1.2rem;
      padding-bottom: 2rem;
    }

    @media (max-width: 767px) {
      gap: 0.8rem;
    }

    &:nth-child(2n + 1) {
      margin-right: 3.2rem;

      @media (max-width: 1023px) {
        margin-right: 0;
      }
    }
  }

  &__services-item-title {
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.4;

    @media (max-width: 1199px) {
      font-size: 1.8rem;
      line-height: 1.3;
    }
  }

  &__services-item-text {
    font-size: 1.8rem;
    line-height: 1.3;
    color: var(--easy-dark);

    @media (max-width: 1199px) {
      font-size: 1.6rem;
      line-height: 1.25;
    }

    @media (max-width: 767px) {
      font-size: 1.4rem;
      line-height: 1.1;
    }
  }

  &__img {
    margin-bottom: 8rem;
    height: 49.2rem;

    border-radius: 2rem;
    overflow: hidden;

    @media (max-width: 1599px) {
      margin-bottom: 7.2rem;
    }

    @media (max-width: 1199px) {
      margin-bottom: 6.4rem;
      height: 45.6rem;
    }

    @media (max-width: 1023px) {
      margin-bottom: 5.6rem;
      height: 36rem;

      border-radius: 1.6rem;
    }

    @media (max-width: 767px) {
      margin-bottom: 4.8rem;
      height: 20rem;

      border-radius: 1.2rem;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>