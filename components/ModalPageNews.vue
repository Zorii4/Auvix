<template>
  <div class="academy__news">
    <div class="container">
      <div class="academy__news-header">
        <div class="section-header">
          <h2 class="section-header__title section-title">
            {{pageProps.title}}
          </h2>
        </div>
      </div>
      <!-- {{> news}} -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalPageNews',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.academy__news {
  padding-top: 5.2rem;

  @media (max-width: 1599px) {
    padding-top: 4.8rem;
  }

  @media (max-width: 1199px) {
    padding-top: 4rem;
  }

  @media (max-width: 1023px) {
    padding-top: 3.6rem;
  }

  @media (max-width: 767px) {
    padding-top: 3.2rem;
  }
}

.academy__news-header {
  padding: 0 0 4rem;

  @media (max-width: 1599px) {
    padding-bottom: 3.6rem;
  }

  @media (max-width: 1199px) {
    padding-bottom: 3.2rem;
  }

  @media (max-width: 1023px) {
    padding-bottom: 2.8rem;
  }

  @media (max-width: 767px) {
    padding-bottom: 2rem;
  }
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  &__title {
    margin: 0;
  }
}
</style>