<template>
  <div class="container">
    <h1 class="title">{{pageProps.title}}</h1>
  </div>

</template>

<script>
export default {
  /* eslint-disable */
  name: 'Title',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.title {
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 40px;
  color: #202226;
  margin-bottom: 50px;

  @media (max-width: 767px) {
    font-size: 24px;
  }
}
</style>