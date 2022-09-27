<template>
  <div class="narrow-container">
    <div class="text-container">
      <h2>
        {{pageProps.title}}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.text-container {
  max-width: 86.4rem;

  h2 {
    margin-bottom: 4rem;

    font-weight: 400;
    font-size: 2.8rem;
    line-height: 1.1;

    @media (max-width: 1199px) {
      margin-bottom: 3.2rem;
      font-size: 2.4rem;
    }

    @media (max-width: 1023px) {
      margin-bottom: 2.8rem;
    }

    @media (max-width: 767px) {
      margin-bottom: 2rem;
      font-size: 2rem;
    }
  }
}
</style>