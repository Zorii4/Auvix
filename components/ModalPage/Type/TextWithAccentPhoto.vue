<template>
  <section class="dealer__article">
    <div class="wide-container">
      <div class="article__container">
        <div class="article__inner">
          <div
            class="article__text-column"
            :style="{backgroundColor: `${pageProps.background_color}`}"
          >
            <div class="article__text-content article__text-content--text-bottomed">
              <h3
                class="article__text-title"
                :style="{color:`${pageProps.title_color}`}"
              >{{pageProps.title}}</h3>
              <p
                v-if="!pageProps.use_button"
                :style="{color:`${pageProps.description_color}`}"
              >{{pageProps.description}}</p>
              <CommonAnchor
                v-if="pageProps.use_button"
                :to="pageProps.button_link_url"
                :className="'accent-photo-button button'"
              >{{pageProps.button_title}}</CommonAnchor>
            </div>
          </div>
          <div class="article__img-column">
            <div class="article__img-wrapper">
              <img :src="$config.baseURLImg + pageProps.image_url">
              <div
                class="article__logo"
                v-if="pageProps.logo_url"
              >
                <div class="article__image-wrapper">
                  <img
                    :src="$config.baseURLImg + pageProps.logo_url"
                    :alt="pageProps.image_alt"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TextWithAccentPhoto',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.article {
  &__container {
    position: relative;
    border-radius: 2rem;
    overflow: hidden;
    margin-bottom: 50px;
  }

  &__inner {
    display: flex;
    flex-direction: row;
    gap: 0.4rem;
    min-height: 48rem;

    @media (max-width: 1599px) {
      min-height: 42rem;
    }

    @media (max-width: 1199px) {
      min-height: 35.2rem;
    }

    @media (max-width: 1023px) {
      min-height: 28rem;
    }

    @media (max-width: 767px) {
      min-height: auto;
      flex-direction: column;
    }
  }

  &__text-column {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 5.2rem;
    border-radius: 0 2rem 2rem 0;
    background: #ff8c59;

    @media (max-width: 1599px) {
      padding: 2rem;
    }

    @media (max-width: 1023px) {
      padding: 1.6rem;
    }

    @media (max-width: 767px) {
      width: 100%;
      min-height: 28rem;
      border-radius: 1.2rem;
    }

    &--title-bottomed {
      @media (max-width: 767px) {
        min-height: 15.2rem;
      }
    }
  }

  &__text-title {
    @extend %fs-h3;
  }

  &__img-column {
    position: relative;
    width: 50%;
    border-radius: 2rem 0 0 2rem;
    background: #ccc;
    overflow: hidden;

    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 28rem;
      border-radius: 1.2rem;
    }
  }

  &__text-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 49rem;
    margin-bottom: 2rem;
    justify-content: space-between;

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

    &--text-bottomed {
      flex-grow: 1;

      p {
        margin-top: auto;
      }
    }

    &--title-bottomed {
      margin-bottom: 0;
      margin-top: auto;

      p {
        @media (max-width: 1199px) {
          font-size: 1.6rem;
        }
      }
    }
  }

  &__img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;

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
  &__logo {
    position: absolute;
    top: 5rem;
    right: 5rem;
    width: 15rem;
    height: 9rem;
    padding: 1.8rem 1rem;
    border-radius: 2rem;
    background-color: #fcfeff;
  }
  &__image-wrapper {
    width: 100%;
    height: 100%;
    img {
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center center;
    }
  }
}
</style>