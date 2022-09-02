<template>
  <div
    class="promotion__inner"
    :style="{backgroundImage: `url(${bannerProp.cover_image})`}"
  >
    <div class="promotion__text-column">
      <p class="promotion__caption">{{bannerProp.tag}}</p>
      <div class="promotion__content">
        <h2
          class="promotion__title section-title"
          :style="{color: `${bannerProp.title_color}`}"
        >{{bannerProp.title}}</h2>
        <p :style="{color: `${bannerProp.description_color}`}">{{bannerProp.description}}</p>
      </div>
      <NuxtLink
        class="promotion__button button"
        to="#"
      >{{bannerProp.button_title}}</NuxtLink>
    </div>
    <div class="promotion__img-column">
      <div class="promotion__img-wrapper">
        <div class="promotion__img-block">
          <img
            :src="bannerProp.equipment_image"
            class="promotion__img"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerWithDescription',
  props: {
    bannerProp: Object,
  },
}
</script>

<style lang="scss" scoped>
.promotion__inner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5.2rem;
  height: 100%;
  flex-grow: 1;
  border-radius: 2rem;

  @media (max-width: 1599px) {
    padding: 2rem;
  }

  @media (max-width: 1023px) {
    flex-direction: column;
    gap: 0.4rem;
    padding: 0;

    background-color: transparent;
  }
}

.promotion__text-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1023px) {
    padding: 1.6rem;
    min-height: 33.6rem;

    background-color: var(--green);
    border-radius: 1.6rem;
  }

  @media (max-width: 767px) {
    min-height: 28rem;
  }
}

.promotion__caption {
  display: flex;
  align-items: center;
  margin: 0 0 5.2rem;
  font-size: 1.8rem;
  line-height: 1.3;
  color: var(--jack-grey);
  padding: 5px 25px;
  background-color: #fff;
  border-radius: 16px;

  @media (max-width: 1599px) {
    margin-bottom: 4.8rem;
  }

  @media (max-width: 1199px) {
    margin-bottom: 4rem;
    font-size: 1.6rem;
  }

  @media (max-width: 1023px) {
    margin-bottom: 3.2rem;
  }

  @media (max-width: 767px) {
    margin-bottom: 1.6rem;
    font-size: 1.4rem;
  }
}

.promotion__content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;

  p {
    max-width: 47rem;

    @extend %fs-t2;
    color: var(--jack-grey);

    @media (max-width: 1199px) {
      font-size: 1.8rem;
    }

    @media (max-width: 767px) {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 1023px) {
    gap: 1.2rem;
  }

  @media (max-width: 767px) {
    gap: 0.8rem;
  }
}

.promotion__title {
  max-width: 61.4rem;
  margin: 0;

  @extend %fs-h2;
  color: var(--dark);

  @media (max-width: 1199px) {
    font-size: 3.6rem;
  }

  @media (max-width: 1023px) {
    font-size: 3.2rem;
  }

  @media (max-width: 767px) {
    font-size: 2.4rem;
  }
}

.promotion__button {
  position: relative;
  z-index: 2;

  display: inline-block;
  justify-self: flex-end;
  padding: 1.6rem 4rem;
  margin-top: auto;

  @media (max-width: 1023px) {
    padding: 1.6rem 3.2rem;
    font-size: 1.6rem;
  }
}

.promotion__img-column {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  max-width: 100rem;

  @media (max-width: 1023px) {
    justify-content: center;
    align-items: center;
    max-width: none;
    padding: 1.6rem;
    height: 33.6rem;

    background-color: var(--green);
    border-radius: 1.6rem;
  }

  @media (max-width: 767px) {
    display: none;
  }
}

.promotion__img-wrapper {
  display: flex;
}

.promotion__img-block {
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: 1599px) {
    width: 20rem;
    height: 20rem;
  }

  @media (max-width: 1199px) {
    width: 16rem;
    height: 16rem;
  }

  @media (max-width: 1023px) {
    width: 18rem;
    height: 18rem;
  }

  img {
    width: 100%;
    max-width: 80%;
    max-height: 60%;
  }
}

.promotion__img {
  max-width: 50rem;
  width: 100%;
  max-height: 90%;

  @media (max-width: 1599px) {
    margin-right: 8.1rem;
  }

  @media (max-width: 1199px) {
    margin-right: 0;
  }

  @media (max-width: 1023px) {
    max-width: 36rem;
  }

  @media (max-width: 767px) {
    max-width: 24rem;
    max-height: 17rem;
  }
}
</style>