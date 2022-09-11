<template>
  <section class="dealer__auvix">
    <div class="dealer__auvix-lead">
      <div class="container">
        <div class="services-single__warranty-header">
          <div class="section-lead">
            <div class="section-lead__column">
              <h2 class="section-lead__title section-title">{{pageProps.title}}</h2>
            </div>
            <div class="section-lead__column">
              <h3 class="section-lead__subtitle">{{pageProps.sub_title}}</h3>
              <div
                class="section-lead__text"
                v-if="pageProps.description"
              >
                <p> {{pageProps.description}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TextSwipersBlockSwiper
      v-if="pageProps.slider_variation_type === 'slider_blocks'"
      :pageProps="pageProps"
    />
    <TextSwipersParagraphsSwiper
      v-if="pageProps.slider_variation_type === 'slider_photos' && pageProps.variation === 'paragraphs'"
      :pageProps="pageProps"
    />
    <!-- {{> article tags=false swiper=true navigationMod='slider-navigation--dark' mod='article__text-column--grey' articleCategory='Преимущества' titleBottomed=true articleHeader=true articleImg='img/auvix-article.jpg' articleText='Современный, интуитивно понятный интерфейс' articleTitle='Интерфейс' }} -->

  </section>
</template>

<script>
export default {
  name: 'TextWithSlider',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.dealer {
  &__auvix {
    padding-bottom: 6rem;

    @media (max-width: 1599px) {
      padding-bottom: 5.6rem;
    }

    @media (max-width: 1199px) {
      padding-bottom: 5.2rem;
    }

    @media (max-width: 1023px) {
      padding-bottom: 4.8rem;
    }

    @media (max-width: 767px) {
      padding-bottom: 4rem;
    }

    .article__text-content p {
      color: var(--jack-grey);
    }
  }

  &__auvix-lead {
    padding-bottom: 6rem;

    @media (max-width: 1599px) {
      padding-bottom: 5.6rem;
    }

    @media (max-width: 1199px) {
      padding-bottom: 5.2rem;
    }

    @media (max-width: 1023px) {
      padding-bottom: 4rem;
    }

    @media (max-width: 767px) {
      padding-bottom: 3.2rem;
    }
  }
}

.section-lead {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.6rem 0.4rem;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 767px) {
    gap: 2.4rem;
  }

  &__title {
    margin: 0;
  }

  &__column {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media (max-width: 1199px) {
      gap: 3.2rem;
    }

    @media (max-width: 1023px) {
      gap: 2.8rem;
    }

    @media (max-width: 767px) {
      gap: 2rem;
    }

    p {
      font-size: 2rem;
      line-height: 1.4;
      color: var(--easy-dark);

      @media (max-width: 1199px) {
        font-size: 1.8rem;
        line-height: 1.3;
      }

      @media (max-width: 767px) {
        font-size: 1.6rem;
        line-height: 1.25;
      }
    }
  }

  &__subtitle {
    font-weight: 400;
    font-size: 2.8rem;
    line-height: 1.3;

    @media (max-width: 1199px) {
      font-size: 2.4rem;
      line-height: 1.2;
    }

    @media (max-width: 767px) {
      font-size: 2rem;
    }
  }
}
</style>