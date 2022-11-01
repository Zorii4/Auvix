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
      </div>
    </section>
    <section
      v-if="currentProjectCategories.length"
      class="partners-single__categories"
    >
      <div class="container">
        <h2 class="partners-single__categories-title section-title">Категории бренда</h2>
        <div class="categories__categories-list">

          <ul class="categories-list">
            <li
              v-for="category in currentProjectCategories"
              :key="category.id"
              class="categories-list__item-wrapper"
            >
              <CatalogCardCategory
                :isShowCounters="false"
                :category="category"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { fetchBrandById } from '@/API-services/brandsService'
export default {
  name: 'DetailBrandPage',

  data() {
    return {
      currentBrand: null,
    }
  },

  async fetch() {
    // Получение списка категорий для парсинга внутри детальной страницы бренда и отображения, привяззных к бренду категорий
    if (!this.categoriesList.length) {
      await this.$store.dispatch('catalog/fetchCategoriesList')
    }
    const brandSlug = this.$route.params.slug
    if (brandSlug) {
      const [err, brand] = await fetchBrandById(brandSlug)
      if (brand) {
        this.currentBrand = brand
        return brand
      }
      // TODO Сделать обработку ошибки, если бренд не найден
      console.error(err)
    }
    // TODO Сделать редирект на страницу ошибки, если нет id
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
            this.currentBrand.slider?.length > 0
              ? this.currentBrand.slider
              : null,
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
          description: this.currentBrand.description_2 || null,
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
    categoriesList() {
      return this.$store.state.catalog.categoriesList
    },
    currentProjectCategories() {
      if (
        this.currentBrand &&
        'categories' in this.currentBrand &&
        this.categoriesList.length
      ) {
        return this.categoriesList
          .filter(
            (el) =>
              this.currentBrand.categories.includes(el.id) ||
              el.children.filter((subEl) =>
                this.currentBrand.categories.includes(subEl.id)
              ).length
          )
          .map((el) => ({
            ...el,
            children: el.children.filter((el) =>
              this.currentBrand.categories.includes(el.id)
            ),
          }))
      }
      return []
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
.categories-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.4rem;
  margin-bottom: -0.4rem;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }

  &__item-wrapper {
    display: inline-block;
    width: 100%;
    margin-bottom: 0.4rem;
  }
}
</style>