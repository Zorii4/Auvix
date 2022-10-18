<template>
  <section class="dealer__auvix">
    <div class="wide-container">
      <div class="dealer__auvix-lead">
        <div class="container">
          <div class="services-single__warranty-header">
            <SectionLead
              :title="pageProps.title"
              :sub_title="pageProps.sub_title"
              :description="pageProps.description"
            />
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
      <TextSwipersIconsSwiper
        v-if="pageProps.slider_variation_type === 'slider_photos' && pageProps.variation === 'inp'"
        :pageProps="pageProps"
      />
      <!-- {{> article tags=false swiper=true navigationMod='slider-navigation--dark' mod='article__text-column--grey' articleCategory='Преимущества' titleBottomed=true articleHeader=true articleImg='img/auvix-article.jpg' articleText='Современный, интуитивно понятный интерфейс' articleTitle='Интерфейс' }} -->
    </div>
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
</style>