<template>
  <div class="narrow-container">
    <div class="text-container">
      <h3>
        {{pageProps.sub_title}}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubTitle',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.text-container {
  max-width: 86.4rem;

  h3 {
    margin-bottom: 2.8rem;

    font-weight: 400;
    font-size: 2.4rem;
    line-height: 1.2;

    @media (max-width: 1199px) {
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    @media (max-width: 767px) {
      font-size: 1.8rem;
    }
  }
}
</style>