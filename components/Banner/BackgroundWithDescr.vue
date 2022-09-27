<template>
  <div
    class="promotion__inner"
    :style="{backgroundImage: `url(${$config.baseURLImg}`+`${bannerProp.cover_image})`}"
  >
    <div class="promotion__text-column">
      <p class="promotion__caption">{{bannerProp.tag}}</p>
      <div class="promotion__content">
        <h2
          class="promotion__title section-title"
          :style="{color: `${bannerProp.title_color}`}"
        >{{bannerProp.title}}</h2>
        <p
          :style="{color: `${bannerProp.description_color}`}"
          v-html="descriptionReplacer"
        ></p>
      </div>
      <CommonAnchor
        :to="bannerProp.button_link"
        :className="'banner__button button'"
        :color="btnTextColor"
        class="banner__link"
      >{{bannerProp.button_title}}</CommonAnchor>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerWithDescription',
  props: {
    bannerProp: Object,
  },
  computed: {
    descriptionReplacer() {
      if (
        this.bannerProp.description &&
        typeof this.bannerProp.description === 'string'
      ) {
        return this.bannerProp.description.replace(/\n/g, '<br>')
      }
      return false
    },
    btnTextColor() {
      return this.bannerProp.button_color === 'white'
        ? { '--textColor': 'black', '--btnColor': 'white' }
        : { '--textColor': 'white', '--btnColor': 'black' }
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
  height: 100%;
  flex-grow: 1;
  border-radius: 2rem;
  background-repeat: no-repeat;
  background-size: cover;

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

.banner__link {
  margin-top: auto;
}
</style>