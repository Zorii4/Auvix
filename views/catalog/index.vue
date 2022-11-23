<template>
  <div class="categories">
    <div class="container">
      <h1 class="categories__title section-title">Каталог оборудования</h1>
    </div>
    <div
      v-if="loadingCategories"
      class="categories__loader"
    >
      <CommonLoader />
    </div>
    <section
      v-else
      class="categories__categories-list"
    >
      <div class="container">
        <ul class="categories-list">
          <li
            v-for="category in filteredCategories"
            :key="category.id"
            class="categories-list__item-wrapper"
          >
            <CatalogCardCategory :category="category" />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CatalogPage',

  data() {
    return {
      loadingCategories: false,
    }
  },

  async fetch() {
    if (!this.allCategories.length) {
      this.loadingCategories = true
      await this.$store.dispatch('catalog/fetchCategoriesList')
      this.loadingCategories = false
    }
  },

  computed: {
    allCategories() {
      return this.$store.state.catalog.categoriesList
    },

    filteredCategories() {
      return this.allCategories.filter((el) => el.count > 0)
    },
  },
}
</script>

<style lang="scss" scoped>
.categories {
  &__title {
    margin: 0 0 4rem;

    font-weight: 400;

    @media (max-width: 1599px) {
      margin-bottom: 3.6rem;
    }

    @media (max-width: 1199px) {
      margin-bottom: 3.2rem;
    }

    @media (max-width: 1023px) {
      margin-bottom: 2.8rem;
    }

    @media (max-width: 767px) {
      margin-bottom: 2rem;
    }
  }

  &__categories-list {
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
  }

  &__brands-header {
    padding-bottom: 4rem;

    @media (max-width: 1599px) {
      padding-bottom: 3.6rem;
    }

    @media (max-width: 1199px) {
      padding-bottom: 3.2rem;
    }

    @media (max-width: 1023px) {
      padding-bottom: 2.8rem;
    }

    @media (max-width: 767px) {
      padding-bottom: 2rem;
    }
  }

  &__brands {
    padding-bottom: 6rem;

    @media (max-width: 1599px) {
      padding-bottom: 5.6rem;
    }

    @media (max-width: 1199px) {
      padding-bottom: 4.8rem;
    }

    @media (max-width: 1023px) {
      padding-bottom: 4rem;
    }

    @media (max-width: 767px) {
      padding-bottom: 3.2rem;
    }
  }
}

.categories__loader {
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.categories-list {
  column-count: 3;
  column-gap: 0.4rem;
  margin-bottom: -0.4rem;

  @media (max-width: 1023px) {
    column-count: 2;
  }

  @media (max-width: 767px) {
    column-count: 1;
  }

  &__item-wrapper {
    display: inline-block;
    width: 100%;
    margin-bottom: 0.4rem;
  }

  &__item {
    position: relative;

    padding: 3.6rem 2rem 2.8rem 2.8rem;

    border-radius: 2rem;
    background: var(--extra-light-gray);

    @media (max-width: 1599px) {
      padding: 3.2rem 2rem 2.4rem 2.4rem;
    }

    @media (max-width: 1199px) {
      padding: 2.4rem 2rem 2.8rem 2rem;
    }

    @media (max-width: 1023px) {
      padding: 2.8rem 2rem 2.4rem 2.4rem;
      border-radius: 1.6rem;
    }

    @media (max-width: 767px) {
      min-height: 7.2rem;
      padding: 1.6rem;
      border-radius: 1.2rem;
    }
  }

  &__header {
    @media (max-width: 767px) {
      position: relative;

      display: flex;
      align-items: center;
      gap: 1.4rem;
    }
  }

  &__title {
    margin: 0 10.4rem 2rem 0;

    font-weight: 400;
    font-size: 2.4rem;
    line-height: 1.1;

    @media (max-width: 1599px) {
      margin-right: 8.8rem;
    }

    @media (max-width: 1199px) {
      margin-right: 7.2rem;
      margin-bottom: 1.6rem;
      font-size: 2rem;
    }

    @media (max-width: 767px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex-grow: 1;
      height: 100%;
      margin-right: 0;
      margin-bottom: 0;

      font-size: 1.6rem;

      cursor: pointer;

      &::before {
        content: '';

        position: absolute;
        left: 0;
        top: 0;

        width: 100%;
        height: 100%;
      }
    }
  }

  &__button {
    position: relative;
    transform: rotate(90deg);

    display: none;

    @media (max-width: 767px) {
      display: block;

      svg {
        width: 0.6rem;
        height: 0.8rem;
      }
    }
  }

  &__content-block {
    @media (max-width: 767px) {
      height: 0;
      overflow: hidden;
    }
  }

  &__subcategories {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin: 0 0 3.2rem;

    @media (max-width: 1599px) {
      margin-bottom: 2.8rem;
    }

    @media (max-width: 1199px) {
      margin-bottom: 2.4rem;
    }

    @media (max-width: 767px) {
      margin-top: 1.6rem;
      margin-bottom: 2rem;
    }
  }

  &__subcategory {
    font-size: 1.8rem;
    line-height: 1.3;
    color: var(--easy-dark);

    @media (max-width: 1199px) {
      font-size: 1.6rem;
    }

    span {
      font-size: 1.6rem;
      line-height: 1.25;
      color: var(--jack-grey);

      @media (max-width: 1199px) {
        font-size: 1.4rem;
      }
    }
  }

  &__count {
    font-size: 1.6rem;
    line-height: 1.25;
    color: var(--jack-grey);

    @media (max-width: 1199px) {
      font-size: 1.4rem;
    }
  }

  &__img-wrapper {
    position: absolute;
    top: 2rem;
    right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10.4rem;
    height: 10.4rem;
    border-radius: 50%;
    background: linear-gradient(
      178.28deg,
      #ffffff 39.83%,
      rgba(255, 255, 255, 0) 100.57%
    );

    @media (max-width: 1599px) {
      width: 8.8rem;
      height: 8.8rem;
    }

    @media (max-width: 1199px) {
      width: 7.2rem;
      height: 7.2rem;
    }

    @media (max-width: 767px) {
      position: static;

      width: 4rem;
      height: 4rem;
    }

    img {
      width: 6.4rem;
      height: 6.4rem;
      object-fit: contain;
      object-position: center;

      @media (max-width: 1599px) {
        width: 5.6rem;
        height: 5.6rem;
      }

      @media (max-width: 1199px) {
        width: 4.8rem;
        height: 4.8rem;
      }

      @media (max-width: 767px) {
        width: 3.2rem;
        height: 3.2rem;
      }
    }
  }
}
</style>