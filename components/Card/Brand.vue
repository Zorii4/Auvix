<template>
  <div class="brand">
    <nuxt-link
      class="brand__link"
      :to="{name: 'BrandItem', params: {slug: slug}}"
    >
      <div class="brand__img">
        <img
          :src="$config.baseURLImg + logoUrl"
          :alt="logoImgAlt"
        >
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'BrandCard',

  props: {
    logoUrl: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    logoImgAlt: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.brand {
  &__link {
    display: block;
    padding: 2rem;
    height: 12rem;

    border-radius: 6rem;
    background-image: linear-gradient(
      212.35deg,
      rgb(233, 234, 238) 7.66%,
      rgba(255, 255, 255, 1) 68.91%
    );
    background-size: 250% 250%;

    transition: 0.3s;

    @media (max-width: 1599px) {
      height: 10rem;
      padding: 1.6rem;
    }

    @media (max-width: 1199px) {
      height: 8rem;
      padding: 1.2rem;
    }

    @media (max-width: 1023px) {
      height: 10rem;
      border-radius: 6.7rem;
    }

    @media (max-width: 767px) {
      height: 8rem;
      border-radius: 5.6rem;
    }

    &:hover {
      opacity: 1;
      background-position: 100% 0;
    }
  }

  &__img {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    background: rgba(255, 255, 255, 0.75);
    border-radius: 6rem;

    @media (max-width: 1023px) {
      border-radius: 6.7rem;
    }

    @media (max-width: 767px) {
      border-radius: 5.6rem;
    }

    img {
      max-width: 80%;
      max-height: 80%;
    }
  }
}
</style>