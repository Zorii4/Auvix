<template>
  <div
    class="promotion__inner"
    :style="backgroundColorVariable"
  >
    <div class="promotion__text-column">
      <p class="promotion__caption">{{bannerProp.tag}}</p>
      <div class="promotion__content">
        <h2
          class="promotion__title section-title"
          :style="{color: `${bannerProp.title_color}`}"
        >{{bannerProp.title}}</h2>
        <p>{{this.bannerProp.date | formatData('fullData')}} - {{this.bannerProp.date_end | formatData('fullData')}}</p>
      </div>
      <CommonAnchor
        :to="bannerProp.button_link"
        :className="'banner__button button'"
        :color="btnTextColor"
        class="banner__link"
      >{{bannerProp.button_title}}</CommonAnchor>
    </div>
    <div
      class="promotion__img-column"
      :style="backgroundColorVariable"
    >
      <div class="promotion__img-wrapper">
        <div class="promotion__img-block">
          <img
            :src="$config.baseURLImg + bannerProp.equipment_image"
            class="promotion__img"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerWithDate',
  props: {
    bannerProp: Object,
  },
  computed: {
    btnTextColor() {
      return this.bannerProp.button_color === 'white'
        ? { '--textColor': 'black', '--btnColor': 'white' }
        : { '--textColor': 'white', '--btnColor': 'black' }
    },
    backgroundColorVariable() {
      return { '--BGColor': this.bannerProp.background_color }
    },
  },
}
</script>

<style lang="scss" scoped>
.promotion__inner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5.2rem;
  flex-grow: 1;
  border-radius: 2rem;
  background-color: var(--BGColor);
  height: 480px;
  box-sizing: border-box;

  @media (max-width: 1599px) {
    padding: 2rem;
  }

  @media (max-width: 1023px) {
    flex-direction: column;
    gap: 0.4rem;
    height: 676px;
    padding: 0;
    background-color: transparent;
  }

  @media (max-width: 767px) {
    height: 352px;
  }

  @media (max-width: 479px) {
    height: 280px;
  }
}

.promotion__text-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1023px) {
    padding: 1.6rem;
    height: 50%;
    background-color: var(--BGColor);
    border-radius: 1.6rem;
  }

  @media (max-width: 767px) {
    min-height: 100%;
  }
}

.promotion__caption {
  display: flex;
  align-items: center;
  margin: 0 0 5.2rem;

  font-size: 1.8rem;
  line-height: 1.3;
  color: var(--jack-grey);

  &::before {
    content: '';
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 1.2rem;
    background-color: var(--jack-grey);
    border-radius: 50%;
  }

  @media (max-width: 1599px) {
    margin-bottom: 4.8rem;
  }

  @media (max-width: 1199px) {
    margin-bottom: 4rem;
    font-size: 1.6rem;

    &::before {
      width: 1rem;
      height: 1rem;
      margin-right: 0.8rem;
    }
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
    max-width: 40rem;

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

.promotion__img-column {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  max-width: 100rem;
  margin-right: 8rem;

  @media (max-width: 1023px) {
    justify-content: center;
    align-items: center;
    max-width: none;
    padding: 1.6rem;
    height: 50%;
    border-radius: 1.6rem;
    background-color: var(--BGColor);
    margin-right: 0;
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

  @media (max-width: 1023px) {
    justify-content: center;
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

.banner__link {
  margin-top: auto;
}
</style>

