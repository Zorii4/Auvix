<template>
  <div
    class="request"
    :style="{backgroundImage: `url(${$config.baseURLImg}`+`${bannerProp.cover_image})`}"
  >
    <div class="request__text">
      <p :style="{color: `${bannerProp.title_color}`}">{{bannerProp.title}}</p>
    </div>
    <CommonAnchor
      :to="bannerProp.button_link"
      :className="'mini-banner__button button'"
      :color="btnTextColor"
      class="banner__link"
    >{{bannerProp.button_title}}</CommonAnchor>
  </div>

</template>

<script>
export default {
  name: 'BannerMiniWithImg',
  props: {
    bannerProp: Object,
  },
  computed: {
    btnTextColor() {
      return this.bannerProp.button_color === 'white'
        ? { '--textColor': 'black', '--btnColor': 'white' }
        : { '--textColor': 'white', '--btnColor': 'black' }
    },
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
  background-size: cover;
  height: 258px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
    height: 192px;
  }

  @media (max-width: 359px) {
    padding: 1.6rem;
    height: 160px;
  }
}

.request__text {
  max-width: 60rem;

  @media (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
  }

  p {
    @extend %fs-t1;

    @media (max-width: 767px) {
      text-align: center;
    }
  }
}
</style>