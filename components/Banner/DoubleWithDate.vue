<template>
  <div class="article__inner">
    <div
      class="article__text-column"
      :style="backgroundColorVariable"
    >
      <div class="article__text-header">
        <p class="article__text-date">{{this.bannerProp.date | formatData('toFormat')}}</p>
        <span>{{bannerProp.time}} /мск</span>
        <span class="article__category">{{bannerProp.tag}}</span>
      </div>
      <div class="article__text-content">
        <h3
          class="article__text-title"
          :style="{color: `${bannerProp.title_color}`}"
        >{{bannerProp.title}}</h3>
      </div>
      <CommonAnchor
        :to="bannerProp.button_link"
        :className="'banner__button button'"
        :color="btnTextColor"
        class="banner__link"
      >{{bannerProp.button_title}}</CommonAnchor>
    </div>
    <div class="article__img-column">
      <div class="article__img-wrapper">
        <img :src="$config.baseURLImg + bannerProp.cover_image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerDoubleWithDate',
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
.article__inner {
  display: flex;
  flex-direction: row;
  gap: 0.4rem;
  height: 480px;
  box-sizing: border-box;

  @media (max-width: 1023px) {
    flex-direction: column;
    gap: 0.4rem;
    height: 676px;
    padding: 0;
    background-color: transparent;
  }

  @media (max-width: 767px) {
    height: 352px;
    flex-direction: column;
  }

  @media (max-width: 479px) {
    height: 280px;
  }
}

.article__text-column {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 5.2rem;
  border-radius: 2rem;
  background-color: var(--BGColor);

  @media (max-width: 1599px) {
    padding: 2rem;
  }

  @media (max-width: 1023px) {
    padding: 1.6rem;
    height: 50%;
    background-color: var(--BGColor);
    border-radius: 1.6rem;
    width: initial;
  }

  @media (max-width: 767px) {
    width: 100%;
    min-height: 100%;
    border-radius: 1.2rem;
  }

  &--title-bottomed {
    @media (max-width: 767px) {
      min-height: 15.2rem;
    }
  }
}

.article__text-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 47.5rem;
  margin-bottom: 5.2rem;

  @media (max-width: 1199px) {
    margin-bottom: 4rem;
  }

  @media (max-width: 767px) {
    max-width: initial;
    margin-bottom: 1.6rem;
  }
}

.article__text-date,
.article__category {
  display: flex;
  align-items: center;

  font-size: 1.8rem;
  line-height: 1.3;
  color: var(--easy-dark);

  @media (max-width: 1199px) {
    font-size: 1.6rem;
  }

  @media (max-width: 767px) {
    font-size: 1.4rem;
  }

  &::before {
    content: '';

    width: 1.2rem;
    height: 1.2rem;
    margin-right: 1.2rem;

    background-color: var(--jack-grey);
    border-radius: 50%;
  }

  @media (max-width: 1199px) {
    margin-right: 0.8rem;
  }
}

.article__text-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 49rem;
  margin-bottom: 2rem;

  @media (max-width: 1199px) {
    gap: 1.6rem;
  }

  @media (max-width: 1023px) {
    gap: 1.2rem;
  }

  @media (max-width: 767px) {
    gap: 0.8rem;
  }

  p {
    font-size: 2rem;
    line-height: 1.2;

    @media (max-width: 1199px) {
      font-size: 1.8rem;
    }
  }
}

.article__text-title {
  @extend %fs-h3;
}

.article__img-column {
  position: relative;
  width: 50%;
  border-radius: 2rem;
  background: #ccc;
  overflow: hidden;

  @media (max-width: 1023px) {
    justify-content: center;
    align-items: center;
    max-width: none;
    height: 50%;
    border-radius: 1.6rem;
    margin-right: 0;
    width: initial;
  }

  @media (max-width: 767px) {
    display: none;
  }
}

.article__img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;

  @media (max-width: 1023px) {
    object-fit: cover;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    flex-grow: 1;
    object-fit: cover;

    @media (max-width: 767px) {
      align-self: stretch;
    }
  }
}

.banner__link {
  margin-top: auto;
}
</style>