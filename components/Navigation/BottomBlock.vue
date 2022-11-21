<template>
  <ul class="navigation">
    <div
      class="navigation__wrapper"
      @mouseleave="$emit('closeNavBottom')"
    >
      <li
        v-if="acitveItem.uri === '/catalog'"
        class="navigation__item"
      >
        <ul class="navigation__category">
          <li class="navigation__category-item-wrapper">
            <nuxt-link
              class="navigation__category-item"
              to="/catalog/brands"
            >
              <div class="navigation__category-item-icon">
                <BrandNavIcon />
              </div>
              <span>Бренды</span>
            </nuxt-link>
          </li>
        </ul>
        <ul class="navigation__subcategory">
          <li
            v-for="category of allCategories"
            :key="category.id"
          >
            <nuxt-link
              class="navigation__subcategory-item"
              :to="{
                name: 'CatalogByCategory',
                params: {category: category.slug || category.id}}"
            >{{ category.name }}</nuxt-link>
          </li>
        </ul>
      </li>

      <li
        v-else
        class="navigation__item"
      >
        <div class="navigation__inner">
          <ul
            class="navigation__inner-list"
            :class="{'navigation__box': calculateColumn > 1}"
            :style="{'grid-template-columns': `repeat(${calculateColumn}, 1fr)`}"
          >
            <li
              v-for="childItem of acitveItem.children"
              :key="childItem.id"
            >
              <nuxt-link
                class="navigation__inner-item"
                :to="childItem.uri"
              >{{childItem.name}}</nuxt-link>
            </li>
          </ul>
        </div>
      </li>
    </div>
  </ul>
</template>

<script>
import BrandNavIcon from '@/assets/icons/navigation-2.svg'
export default {
  name: 'NavigationBottomBlock',

  components: {
    BrandNavIcon,
  },

  props: {
    acitveItem: {
      type: Object,
      default: null,
    },
  },

  computed: {
    allCategories() {
      return this.$store.state.catalog.categoriesList.slice(0, 23)
    },

    calculateColumn() {
      return Math.ceil(this.acitveItem.children.length / 10)
    },
  },
}
</script>

<style lang="scss" scope>
.navigation {
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  z-index: 999;
  height: 100vh;
  background: rgba(32, 34, 38, 0.7);
  transition: all 0.4s;

  &__item {
    position: absolute;
    left: 0;
    right: 0;
    top: -1px;

    padding: 2rem 6rem 6rem;

    background-color: #fff;
    border-radius: 0 0 2.4rem 2.4rem;

    transition: opacity 0.4s;

    @media (max-width: 767px) {
      height: 83vh;
      overflow-y: auto;

      border-radius: 0;
    }

    &::before {
      content: '';

      position: absolute;
      bottom: 100%;
      left: 0;
      right: 0;

      height: 2.8rem;
    }

    @media (max-width: 1599px) {
      padding: 2rem 2.8rem 5.6rem;
    }

    @media (max-width: 1199px) {
      padding: 2rem 2.4rem 4.8rem;
    }

    @media (max-width: 1023px) {
      padding: 1.6rem 2rem 4rem;
    }

    @media (max-width: 767px) {
      padding: 0.8rem 0.8rem 7.5rem;
    }

    &.active {
      visibility: visible;
      opacity: 1;
    }
  }

  &__box {
    display: grid !important;
    gap: 1.2rem;
  }

  &__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    justify-content: space-between;
  }

  &__inner-list {
    display: flex;
    flex-direction: column;
    gap: 3.6rem 0.4rem;

    @media (max-width: 1199px) {
      gap: 2.4rem;
    }
  }

  &__inner-item {
    display: block;

    font-size: 2rem;
    line-height: 1.4;

    @media (max-width: 1199px) {
      font-size: 1.8rem;
    }

    @media (max-width: 767px) {
      font-size: 1.6rem;
    }
  }

  &__post {
    display: flex;
    justify-content: space-between;
    min-height: 24rem;
    padding: 0.8rem;

    border-radius: 2rem;
    background-color: var(--light-grey);

    @media (max-width: 1599px) {
      min-height: 20rem;
    }

    @media (max-width: 1199px) {
      min-height: 15.8rem;
    }

    @media (max-width: 1023px) {
      flex-direction: column;
      min-height: 30rem;
    }

    @media (max-width: 767px) {
      display: none;
    }

    &:hover {
      opacity: 1;

      .navigation__post-img img {
        transform: scale(1.2);
      }
    }
  }

  &__post-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    max-width: 34.3rem;
    padding: 2rem 0 2rem 2rem;
    margin-right: 2.8rem;

    @media (max-width: 1599px) {
      padding: 1.6rem 0 0.8rem 1.6rem;
      margin-right: 2.4rem;
    }

    @media (max-width: 1199px) {
      padding: 1.2rem 0 0.8rem 1.2rem;
      margin-right: 2rem;
    }

    @media (max-width: 1023px) {
      margin-right: 0;
    }
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem 1.2rem;

    span {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      font-size: 1.8rem;
      line-height: 1.3;

      @media (max-width: 1199px) {
        font-size: 1.6rem;
        gap: 0.8rem;
      }

      &::before {
        content: '';

        width: 1.2rem;
        height: 1.2rem;

        border-radius: 50%;
        border: 1px solid var(--jack-grey);

        @media (max-width: 1199px) {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }

  &__tags-clock {
    & + span {
      width: 100%;
    }

    &::before {
      display: none;
    }
  }

  &__tags-category {
    width: 100%;

    @media (max-width: 1023px) {
      width: auto;
    }

    &::before {
      background-color: var(--jack-grey);
    }
  }

  &__post-text {
    font-size: 2rem;
    line-height: 1.4;

    @media (max-width: 1199px) {
      font-size: 1.8rem;
    }
  }

  &__post-img {
    position: relative;

    width: 35.1rem;
    aspect-ratio: 351 / 224;
    flex-shrink: 0;

    border-radius: 1.6rem;
    overflow: hidden;

    @media (max-width: 1599px) {
      width: 29.5rem;
    }

    @media (max-width: 1199px) {
      width: 22.5rem;
    }

    @media (max-width: 1023px) {
      width: 100%;
      max-height: 13.2rem;
      aspect-ratio: 0;
    }

    &--captioned {
      &::before {
        content: 'доступная запись';

        position: absolute;
        right: 1.2rem;
        top: 1.2rem;
        z-index: 5;

        padding: 0.3rem 1.2rem 0.5rem;

        border-radius: 1.6rem;
        background-color: #1ed130;

        font-size: 1.6rem;
        line-height: 1.25;
        color: #fff;

        @media (max-width: 1599px) {
          font-size: 1.8rem;
        }

        @media (max-width: 1199px) {
          font-size: 1.6rem;
        }
      }
    }

    img {
      width: 100%;
      height: 100%;
      max-height: 100%;
      object-fit: cover;

      transition: 0.4s;
    }
  }

  &__large-link {
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex-grow: 1;
    min-height: 24rem;
    padding: 2.8rem 2.8rem 2rem;

    border-radius: 2rem;
    background-color: #dfeef2;
    overflow: hidden;

    @media (max-width: 1599px) {
      padding: 2.4rem;
      min-height: 20rem;
    }

    @media (max-width: 1199px) {
      padding: 2rem;
      min-height: 15.8rem;
    }

    @media (max-width: 1023px) {
      min-height: 30rem;
    }

    @media (max-width: 767px) {
      display: none;
    }

    &:hover {
      opacity: 1;

      .navigation__link-more svg {
        transform: translateX(10px);
      }

      .navigation__link-icon {
        transform: scale(1.2);
      }
    }
  }

  &__link-content {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    max-width: 31rem;

    p {
      font-size: 1.6rem;
      line-height: 1.25;

      @media (max-width: 1199px) {
        font-size: 1.4rem;
      }
    }
  }

  &__link-title {
    font-size: 2rem;
    line-height: 1.4;

    @media (max-width: 1199px) {
      font-size: 1.8rem;
    }
  }

  &__link-more {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-top: auto;

    font-size: 1.8rem;
    line-height: 1.3;

    @media (max-width: 1199px) {
      font-size: 1.6rem;
      gap: 1.6rem;
    }

    svg {
      width: 0.8rem;
      height: 1rem;

      transition: 0.4s;
    }
  }

  &__link-icon {
    position: absolute;
    right: -22.3rem;
    bottom: -13.7rem;

    width: 59rem;
    height: 34.9rem;

    transition: 0.4s;

    @media (max-width: 1599px) {
      right: -20.5rem;
      bottom: -12.5rem;

      width: 50.8rem;
      height: 30.1rem;
    }

    @media (max-width: 1199px) {
      right: -16rem;
      bottom: -10.1rem;

      width: 40.3rem;
      height: 23.9rem;
    }

    @media (max-width: 1023px) {
      right: -13.3rem;
      bottom: -5.1rem;
    }
  }

  &__category {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.4rem;
    margin-bottom: 3.6rem;

    @media (max-width: 1599px) {
      margin-bottom: 3.2rem;
    }

    @media (max-width: 1199px) {
      margin-bottom: 2.8rem;
    }

    @media (max-width: 1023px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 767px) {
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
    }
  }

  &__category-item-wrapper {
    @media (max-width: 767px) {
      flex-grow: 1;
      max-width: 10.4rem;
      height: 4.8rem;
    }

    &:first-child {
      @media (max-width: 767px) {
        display: none;
      }
    }
  }

  &__category-item {
    display: flex;
    gap: 0.4rem;
    padding: 0.4rem;
    width: 100%;
    height: 100%;

    border-radius: 2rem;
    background: linear-gradient(212.35deg, #f0f1f5 7.66%, #ffffff 75.91%);

    @media (max-width: 767px) {
      justify-content: center;
      align-items: center;
      border-radius: 1.2rem;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;

      font-size: 1.8rem;
      line-height: 1.3rem;

      @media (max-width: 1199px) {
        font-size: 1.6rem;
      }

      @media (max-width: 767px) {
        display: none;
      }
    }
  }

  &__category-item-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12.8rem;
    height: 7.2rem;

    border-radius: 2rem;
    background: #fff;

    @media (max-width: 1599px) {
      width: 10.6rem;
      height: 7.2rem;
    }

    @media (max-width: 1199px) {
      width: 8.6rem;
      height: 6.4rem;
    }

    @media (max-width: 1023px) {
      width: 9.6rem;
      height: 6.4rem;
    }

    @media (max-width: 767px) {
      width: 100%;
      height: 100%;
      border-radius: 1.2rem;
    }

    svg {
      width: 3.2rem;
      height: 3.2rem;

      @media (max-width: 767px) {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }

  &__subcategory {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 3.6rem 0.4rem;
    max-height: 34.8rem;

    @media (max-width: 1599px) {
      max-height: 38.4rem;
      gap: 3.2rem 0.4rem;
    }

    @media (max-width: 1199px) {
      max-height: 38rem;
      gap: 2.8rem 0.4rem;
    }

    @media (max-width: 1023px) {
      max-height: 59.6rem;
    }

    @media (max-width: 767px) {
      display: none;
    }

    & > li {
      max-width: 36.7rem;

      @media (max-width: 1599px) {
        max-width: 30.3rem;
      }

      @media (max-width: 1199px) {
        max-width: 24.1rem;
      }

      @media (max-width: 1023px) {
        max-width: none;
        width: 50%;
      }
    }
  }

  &__subcategory-item {
    display: block;

    font-size: 2rem;
    line-height: 1.4;

    @media (max-width: 1199px) {
      font-size: 1.8rem;
    }

    @media (max-width: 767px) {
      font-size: 1.6rem;
    }
  }

  .categories-list {
    display: none;

    @media (max-width: 767px) {
      display: block;
    }
  }
}
</style>