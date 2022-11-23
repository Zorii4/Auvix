<template>
  <section class="partners-single__features">
    <div class="partners-single__features-header">
      <SectionLead
        :title="pageProps.title"
        :sub_title="pageProps.sub_title"
        :description="pageProps.description"
      />
    </div>
    <ol class="digits-row">
      <li
        v-for="item of pageProps.steps"
        :key="item.id"
        class="digits-row__item"
      > шаг
        <div
          class="icon-img"
          :style="{backgroundImage: `url(${$config.baseURLImg}`+`${item.image_url})`}"
        ></div>
        <p class="digits-row__text">{{item.description}}</p>
      </li>
    </ol>
  </section>
</template>

<script>
export default {
  name: 'WithStepsTiles',
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
    margin-bottom: 4rem;

    @media (max-width: 1023px) {
      margin-bottom: 0;
    }
  }
}

.digits-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.4rem;
  counter-reset: digitRow;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  &__item {
    // display: flex;
    // flex-direction: column;
    position: relative;
    gap: 0.4rem;
    padding: 2.4rem;
    background-color: #eff0f4;
    border-radius: 20px;
    min-width: 405px;
    min-height: 200px;

    @media (max-width: 1599px) {
      gap: 1.6rem;
      min-width: initial;
      min-height: initial;
    }

    @media (max-width: 767px) {
      min-width: 400px;
      height: 150px;
      margin: 0 auto;
    }

    @media (max-width: 450px) {
      width: 100%;
      min-width: initial;
    }

    &::before {
      counter-increment: digitRow;
      content: counter(digitRow);
      font-family: 'Arial';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      color: #353940;
    }
  }

  &__text {
    margin-top: 10rem;
    font-size: 1.8rem;
    line-height: 24px;
    color: var(--easy-dark);
    width: 280px;

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
      margin-top: 5rem;
    }
  }
}

.icon-img {
  position: absolute;
  top: 12%;
  right: 7%;
  width: 100px;
  height: 100px;
  background-position: 0 0;
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 767px) {
    width: 80px;
    height: 80px;
  }
}
</style>