<template>
  <div
    class="request"
    :style="{backgroundImage: `url(${bannerProp.cover_image})`}"
  >
    <div class="request__text">
      <p :style="{color: `${bannerProp.title_color}`}">{{bannerProp.title}}</p>
    </div>
    <button class="request__button button">{{bannerProp.button_title}}</button>
  </div>

</template>

<script>
export default {
  name: 'BannerMiniWithImg',
  props: {
    bannerProp: Object,
  },
}
</script>

<style lang="scss" scoped>
.request {
  position: relative;
  padding: 5.4rem 5.2rem;
  border-radius: 2rem;
  overflow: hidden;
  color: #fff;
  background-repeat: no-repeat;

  @media (max-width: 1599px) {
    padding: 4.4rem 4rem 4rem;
  }

  @media (max-width: 1199px) {
    padding: 4rem 3.6rem 3.6rem;
  }

  @media (max-width: 1023px) {
    padding: 3.2rem 2rem;
  }

  @media (max-width: 767px) {
    padding: 1.6rem;
  }
}

.request__text {
  max-width: 55.2rem;
  margin-bottom: 4rem;

  @media (max-width: 1599px) {
    margin-bottom: 3.2rem;
  }

  @media (max-width: 1199px) {
    margin-bottom: 2.8rem;
  }

  @media (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.6rem;
  }

  p {
    @extend %fs-t1;

    @media (max-width: 767px) {
      text-align: center;
    }
  }
}

.request__button {
  padding: 1.6rem 4rem;

  @media (max-width: 1023px) {
    padding: 1.6rem 3.2rem;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 1.6rem 3.4rem;

    justify-content: center;
  }

  @media (max-width: 359px) {
    padding: 1.4rem;
  }
}
</style>