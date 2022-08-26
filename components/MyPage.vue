<template>
  <header class="header">
    <div class="container">
      <Header />
    </div>
    <Footer />
  </header>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 6;

  background-color: #fff;

  @media (max-width: 767px) {
    position: relative;
  }

  &--viewport-outside {
    position: fixed;
    transform: translateY(-100%);

    .mobile-navigation.active {
      height: 100vh;
    }

    .navigation__item:nth-child(1) {
      height: 100vh;
    }
  }
}
</style>