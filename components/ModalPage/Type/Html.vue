<template>
  <section class="html-section">
    <div class="container">
      <SectionLead
        :title="pageProps.title"
        :sub_title="pageProps.sub_title"
        :description="null"
        class="html-lead"
      />
      <div v-html="pageProps.description"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Html',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.html-section {
  margin-bottom: 5rem;
}

.html-lead {
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
</style>