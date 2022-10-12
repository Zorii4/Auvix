<template>
  <section class="partners">
    <div class="container">
      <div class="partners__header">
        <h1 class="partners__title section-title">Производители</h1>
        <span
          v-if="computedAllBrandsLength > 0"
          class="partners__count"
        >{{ computedAllBrandsLength }}</span>
      </div>
    </div>
    <!-- TODO Добавить баннер для брендов -->
    <div class="partners__filter">
      <div class="container">
        <FiltersWordsPicker v-model="pickedWords" />
      </div>
    </div>
    <div class="container">
      <ul class="partners__list">
        <template v-if="filteredBrands.length > 0">
          <li
            v-for="brand in filteredBrands"
            :key="brand.id"
            class="partners__item"
            :title="brand.title"
          >
            <nuxt-link
              class="partners__link"
              :to="{name: 'BrandItem', params: {slug: brand.slug}}"
            >
              <div class="partners__img">
                <img
                  :src="$config.baseURLImg + brand.img"
                  :alt="brand.title"
                >
              </div>
            </nuxt-link>
          </li>
        </template>
        <template v-if="filteredBrands.length === 0">
          <div class="partners__empty">
            Брендов не найдено
          </div>
        </template>
      </ul>
    </div>
  </section>
</template>

<script>
import { fetchBrands } from '@/API-services/brandsService'

export default {
  name: 'AllBrandsPage',

  data() {
    return {
      allBrands: [],
      pickedWords: [],
    }
  },

  async fetch() {
    const [err, data] = await fetchBrands()
    if (data) {
      this.allBrands = data
      return data
    }
    // TODO Обработка ошибки в случае если бренды не вернулись
    console.error(err)
  },

  computed: {
    computedAllBrandsLength() {
      return this.allBrands.length
    },

    filteredBrands() {
      if (this.pickedWords.length > 0) {
        const pattern = `[${this.pickedWords.join('')}]`
        const regExp = new RegExp(pattern, 'gi')
        return this.allBrands.filter((el) => el.title.match(regExp))
      }
      return this.allBrands
    },
  },
}
</script>

<style lang="scss" scoped>
.partners {
  display: block;

  &__breadcrumbs {
    margin-bottom: 2rem;

    @media (max-width: 1023px) {
      margin-bottom: 1.2rem;
    }
  }

  &__header {
    display: flex;
    gap: 2rem;
    align-items: baseline;
    margin-bottom: 4rem;

    @media (max-width: 1599px) {
      margin-bottom: 3.6rem;
    }

    @media (max-width: 1199px) {
      margin-bottom: 3.2rem;
      gap: 1.2rem;
    }

    @media (max-width: 1023px) {
      margin-bottom: 2.8rem;
    }

    @media (max-width: 767px) {
      margin-bottom: 2rem;
    }
  }

  &__title {
    margin: 0;
  }

  &__empty {
    font-size: 22px;
  }

  &__count {
    font-size: 2rem;
    line-height: 1.2;
    color: var(--jack-grey);
  }

  &__partner-poster {
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

  &__filter-inner {
    padding-bottom: 4rem;
    border-bottom: 1px solid var(--grey);

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

  &__filter-tabs {
    display: flex;
    column-gap: 1rem;
    &:first-child {
      margin-bottom: 2rem;
    }
  }

  &__filter-label {
    cursor: pointer;
    font-size: 16px;
    line-height: 100%;
    font-weight: 400;
    border-radius: 4px;
    padding: 4px 8px;
    white-space: nowrap;
    &.active {
      background-color: #eff0f4;
    }
    input {
      position: absolute;
      visibility: hidden;
    }
  }

  &__filter-tab {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.4rem;
    font-size: 1.4rem;
    line-height: 1.1;
    transition: 0.3s;

    &.active {
      background-color: var(--grey);
    }
  }

  &__filter-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.8rem;
    padding: 0 1.2rem;

    border-radius: 0.6rem;

    font-size: 1.6rem;
    line-height: 1.25;

    transition: 0.3s;

    @media (max-width: 767px) {
      height: 2.4rem;
      padding: 0 0.8rem;

      border-radius: 0.4rem;

      font-size: 1.4rem;
      line-height: 1.1;
    }

    &.active {
      background-color: var(--grey);
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0.4rem;
    padding: 6rem 0;

    @media (max-width: 1599px) {
      padding: 5.6rem 0;
    }

    @media (max-width: 1199px) {
      padding: 5.2rem 0;
    }

    @media (max-width: 1023px) {
      grid-template-columns: repeat(4, 1fr);
      padding: 4.8rem 0;
    }

    @media (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
      padding: 4rem 0;
    }

    @media (max-width: 320px) {
      grid-template-columns: 1fr;
    }
  }

  &__link {
    display: block;
    padding: 2rem;
    height: 12rem;

    border-radius: 6rem;
    background-image: linear-gradient(
      212.35deg,
      rgb(233, 234, 238) 7.66%,
      rgba(255, 255, 255, 1) 68.91%
    );
    background-size: 250% 250%;

    transition: 0.3s;

    @media (max-width: 1599px) {
      height: 10rem;
      padding: 1.6rem;
    }

    @media (max-width: 1199px) {
      height: 8rem;
      padding: 1.2rem;
    }

    @media (max-width: 1023px) {
      height: 10rem;
      border-radius: 6.7rem;
    }

    @media (max-width: 767px) {
      height: 8rem;
      border-radius: 5.6rem;
    }

    &:hover {
      opacity: 1;
      background-position: 100% 0;
    }
  }

  &__img {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    background: rgba(255, 255, 255, 0.75);
    border-radius: 6rem;

    @media (max-width: 1023px) {
      border-radius: 6.7rem;
    }

    @media (max-width: 767px) {
      border-radius: 5.6rem;
    }

    img {
      max-width: 80%;
      max-height: 80%;
    }
  }
}
</style>