<template>
  <div class="partners-single">
    <section class="partners-single__lead">
      <ModalPageTypeTextWithAccentPhoto
        v-if="brandTopSliderData"
        :pageProps="brandTopSliderData"
      />
    </section>
    <section class="partners-single__features">
      <div class="container">
        <div class="partners-single__features-header">
          <ModalPageTypeTextWithSteps
            v-if="brandTopBenefits"
            :pageProps="brandTopBenefits"
          />
        </div>
        <!-- {{> digits-row data=features }} -->
      </div>
    </section>
    <!-- <section class="partners-single__categories">
            <div class="container">
                <h2 class="partners-single__categories-title section-title">Категории бренда</h2>
                {{> categories-list data=categoriesData }}
            </div>
        </section> -->
  </div>
</template>

<script>
import { fetchBrandById } from '@/API-services/brandsService'
export default {
  name: 'DetailBrandPage',
  async fetch() {
    const slug = this.$route.params.slug
    if (slug) {
      const [err, brand] = await fetchBrandById(slug)
      if (brand) {
        this.currentBrand = brand
        return brand
      }
      // TODO Сделать обработку ошибки, если бренд не найден
      console.error(err)
    }
    // TODO Сделать редирект на страницу ошибки, если нет id
  },

  data() {
    return {
      currentBrand: null,
    }
  },

  computed: {
    brandTopSliderData() {
      if (this.currentBrand) {
        return {
          id: this.currentBrand.id || null,
          title: this.currentBrand.header || null,
          title_color: '#202226',
          description: this.currentBrand.description || null,
          description_color: '#5B5E66',
          type: 'type_text_with_accent_photo',
          background_color: '#EFF0F4',
          use_button: false,
          button_title: null,
          button_link_url: null,
          image_url:
            '/storage/2022/9/30/bXfksojw3Fm3fwK3BlJEi7SLE22kDf6EicGIWebQ.jpg' ||
            null,
          image_alt: this.currentBrand.title || null,
          logo_url: this.currentBrand.img || null,
        }
      }
      return null
    },
    brandTopBenefits() {
      if (this.currentBrand) {
        return {
          variation: 'in-four-col',
          id: this.currentBrand.id || null,
          title: this.currentBrand.header_2 || null,
          sub_title: this.currentBrand.text_2 || null,
          description: this.currentBrand.description || null,
          paragraphs: [],
          steps: this.benefitSteps,
        }
      }
      return null
    },
    benefitSteps() {
      if (this.currentBrand) {
        const values = Object.keys(this.currentBrand).filter((el) =>
          el.match(/value_\d/gi)
        )
        return values.map((el) => ({
          description: this.currentBrand[el],
        }))
      }
      return null
    },
  },
}
</script>

<style lang="scss" scoped>
.partners-single {
  &__lead {
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

  &__features {
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

  &__categories {
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

    .categories-list__item {
      @media (max-width: 767px) {
        min-height: 6rem;
      }
    }

    .categories-list__header {
      @media (max-width: 767px) {
        margin-top: 0.5rem;
      }
    }
  }
}
</style>