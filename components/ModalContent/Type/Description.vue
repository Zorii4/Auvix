<template>
  <div class="narrow-container">
    <div class="text-container">
      <p>
        {{pageProps.description}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Description',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.text-container {
  max-width: 86.4rem;

  p {
    font-size: 2rem;
    line-height: 1.4;
    color: var(--easy-dark);

    @media (max-width: 767px) {
      font-size: 1.6rem;
    }
  }
}
