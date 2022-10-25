<template>
  <div class="catalog-list__item">
    <div class="catalog-list__item-img">
      <img
        :src="previwImageUrl || '/images/noimage.jpg'"
        alt="Фото товара"
      >
    </div>
    <div class="catalog-list__item-content">
      <div class="catalog-list__item-tags">
        <div class="catalog-list__item-tags-list">
          <ul class="product-tags">
            <!-- Большене не выпускается -->
            <li
              v-if="false"
              class="product-tags__item-wrapper"
            >
              <div class="product-tags__item product-tags__item--grey">
                снят с производства
              </div>
            </li>
            <template v-else>
              <!-- Тэги: новый, лучшая цена и тп -->
              <li
                v-for="tag in tags"
                :key="tag"
                class="product-tags__item-wrapper"
              >
                <a
                  :class="`product-tags__item product-tags__item--${tag.tag}`"
                  href="search-page-tag.html"
                >
                  {{tag.caption}}
                </a>
              </li>
              <li class="product-tags__show-wrapper">
                <button class="product-tags__show">
                  0
                </button>
              </li>
              <li class="product-tags__hide-wrapper">
                <button class="product-tags__hide">
                  <SliderArrow />
                </button>
              </li>
            </template>
          </ul>
        </div>
      </div>
      <nuxt-link :to="{name: 'ProductPage', params: {id: productId}}">
        <h3 class="catalog-list__item-title">{{ name }}</h3>
      </nuxt-link>
      <span
        v-if="articleCode"
        class="catalog-list__item-article"
      >Артикул {{ articleCode }}</span>

      <ul class="catalog-list__item-property-list">
        <!-- Данные под Артикулом Технология, яркость и тп -->
        <li
          v-for="characteristic of characteristics"
          :key="characteristic.id"
        >
          <div class="catalog-list__item-property-item">
            <span class="catalog-list__item-property">{{characteristic.property}}</span>
            <span class="catalog-list__item-property-value">{{characteristic.value}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="catalog-list__item-price-block">
      <!-- Большене не выпускается -->
      <a
        v-if="false"
        class="catalog-list__item-button button"
        href="#"
      >Посмотреть аналоги</a>
      <span
        v-else
        class="catalog-list__item-price"
      >
        <!-- <div class="catalog-list__item-price-discount">
          <span class="catalog-list__item-price-discount-number">7 430 000 ₽</span>
          <span class="catalog-list__item-price-discount-size discount">{{discount}}</span>
        </div> -->
        <template v-if="mappedPrice">
          <span class="catalog-list__item-price-number">{{Math.floor(price) | priceFilter}} ₽</span>
          <span class="catalog-list__item-price-recommend">рекомендованная розничная цена</span>
        </template>
      </span>
      <a
        v-if="mappedPrice"
        class="catalog-list__item-button button"
        href="#price"
      >Запросить диллерскую цену</a>
      <a
        v-else
        class="catalog-list__item-button button"
        href="#"
      >Узнать о поступлении</a>
    </div>
  </div>
</template>

<script>
import SliderArrow from '@/assets/icons/slider-arrow.svg'

export default {
  name: 'ProductCard',

  components: {
    SliderArrow,
  },

  props: {
    productId: {
      type: [String, Number],
      required: true,
    },
    previwImageUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    articleCode: {
      type: [String, Number],
      required: true,
    },
    price: {
      type: [String, Number],
      required: true,
    },
    rawTagsInfo: {
      type: Object,
      default: null,
    },
    characteristics: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    tags() {
      if (this.rawTagsInfo) {
        return []
      }
      return []
    },

    mappedPrice() {
      return Number(this.price)
    },
  },
}
</script>

<style lang="scss">
.catalog-list {
  box-sizing: border-box;

  &-container {
    position: relative;
  }

  &-slider {
    overflow: hidden;
  }

  &__item {
    position: relative;

    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    padding: 2.8rem 0;

    border-bottom: 1px solid var(--border-grey);

    @media (max-width: 1199px) {
      padding: 2rem 0;
    }

    @media (max-width: 1023px) {
      padding: 2.8rem 0;
    }

    @media (max-width: 767px) {
      grid-template-columns: auto 1fr;
      padding: 1.2rem 1.6rem;

      border-radius: 1.6rem;
      border-bottom: 0;
      background-color: #fff;
    }

    &:hover {
      .catalog-list__item-title {
        opacity: 0.7;
      }
    }
  }

  &__item-link {
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;
  }

  &__item-img {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 18rem;
    height: 18rem;
    padding: 0 1.2rem;

    @media (max-width: 1599px) {
      width: 14.8rem;
    }

    @media (max-width: 1199px) {
      width: 15.9rem;
    }

    @media (max-width: 1023px) {
      width: 16.3rem;
    }

    @media (max-width: 767px) {
      width: 10.4rem;
      height: 10.4rem;
    }

    img {
      width: 100%;
      max-width: 80%;
      max-height: 70%;
      object-fit: contain;
    }
  }

  &__item-content {
    display: flex;
    flex-direction: column;
    max-width: 51.9rem;
    margin-left: 4rem;
    margin-right: auto;

    @media (max-width: 1599px) {
      margin-left: 2.8rem;
    }

    @media (max-width: 1199px) {
      margin-left: 4rem;
    }

    @media (max-width: 1023px) {
      margin-left: 2rem;
    }

    @media (max-width: 767px) {
      height: auto !important;
      margin-left: 0.4rem;
    }
  }

  &__item-tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.8rem 1.2rem;
    margin-bottom: 0.8rem;

    @media (max-width: 767px) {
      margin-bottom: 0.4rem;
    }
  }

  &__item-article {
    margin-bottom: 0.8rem;

    font-size: 1.4rem;
    line-height: 1.1;
    color: var(--jack-grey);
  }

  &__item-tags-list {
    @media (max-width: 767px) {
      position: absolute;
      top: 1.2rem;
      left: 1.6rem;

      max-width: 10rem;
    }
  }

  &__item-title {
    max-width: 41.3rem;
    margin-bottom: 0.4rem;

    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.3;
    color: var(--easy-dark);

    transition: 0.3s;

    @media (max-width: 1023px) {
      font-size: 1.6rem;
    }
  }

  &__item-property-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;

    @media (max-width: 1023px) {
      gap: 0.4rem;
    }
  }

  &__item-property-item {
    display: flex;
    gap: 0.8rem;
    padding: 0.4rem 0.6rem;

    border-radius: 0.6rem;
    background-color: var(--extra-light-gray);

    font-size: 1.4rem;
    line-height: 1.1;

    @media (max-width: 1023px) {
      font-size: 1.2rem;
    }
  }

  &__item-property {
    color: var(--jack-grey);
  }

  &__item-price-block {
    display: flex;
    flex-direction: column;
    gap: 2.8rem;
    margin-left: 1rem;
    justify-content: flex-end;
    flex-grow: 1;
    max-width: 26rem;

    @media (max-width: 1023px) {
      gap: 2rem;
    }

    @media (max-width: 767px) {
      height: auto !important;
      grid-column: 1 / -1;
      align-items: center;
      max-width: none;
      margin-top: 2rem;
      gap: 0.8rem;
    }
  }

  &__item-price {
    display: flex;
    flex-direction: column;

    font-size: 2.4rem;
    line-height: 1.2;

    @media (max-width: 1023px) {
      font-size: 2rem;
    }

    @media (max-width: 767px) {
      align-self: center;
      font-size: 2rem;
    }
  }

  &__item-price-discount {
    display: flex;
    gap: 1.2rem;
    align-items: center;

    font-size: 1.8rem;
    line-height: 1.3;
    color: var(--jack-grey);

    @media (max-width: 1023px) {
      font-size: 1.6rem;
      gap: 0.8rem;
    }
  }

  &__item-price-discount-number {
    text-decoration: line-through;
  }

  &__item-price-discount-size {
    font-size: 1.6rem;
    line-height: 1.25;

    @media (max-width: 1023px) {
      font-size: 1.4rem;
    }
  }

  &__item-price-number {
    margin-bottom: 0.4rem;
  }

  &__item-price-recommend {
    font-size: 1.6rem;
    line-height: 1.25;
    color: var(--jack-grey);

    @media (max-width: 1599px) {
      font-size: 1.4rem;
    }

    @media (max-width: 767px) {
      font-size: 1.2rem;
    }
  }

  &__item-button {
    position: relative;
    z-index: 2;

    padding: 1.4rem;
    justify-content: center;

    background-color: var(--extra-light-gray);
    border-color: var(--grey);

    font-size: 1.6rem;
    line-height: 1.25;
    color: var(--easy-dark) !important;
    text-align: center;

    @media (max-width: 1023px) {
      padding: 1.2rem 1.6rem;
    }

    @media (max-width: 767px) {
      align-self: stretch;
      padding: 1rem;
    }

    &:hover {
      opacity: 0.9;
      background-color: var(--extra-light-gray);
      border-color: var(--grey);
    }
  }

  &--tile {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 0.4rem;

    .catalog-list__item-wrapper {
      width: 36.7rem;

      @media (max-width: 1599px) {
        width: 30.3rem;
      }

      @media (max-width: 1199px) {
        width: 32.3rem;
      }

      @media (max-width: 1023px) {
        width: 27.1rem;
      }

      @media (max-width: 767px) {
        width: 28rem;
      }
    }

    .catalog-list__item {
      position: relative;

      display: flex;
      flex-direction: column;
      align-items: stretch;
      padding: 0.8rem;
      height: 100%;

      border-bottom: none;
      border-radius: 2rem;
      background: var(--light-grey);

      @media (max-width: 767px) {
        padding: 0.4rem;
      }
    }

    .catalog-list__item-img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      aspect-ratio: 351 / 208;

      border-radius: 1.6rem;
      background: #fff;

      @media (max-width: 1599px) {
        max-height: 17.2rem;
      }

      @media (max-width: 1199px) {
        max-height: 16rem;
      }

      @media (max-width: 1023px) {
        max-height: 12.8rem;
      }

      img {
        width: 100%;
        max-width: 50%;
        max-height: 60%;
        object-fit: contain;
      }
    }

    .catalog-list__item-content {
      height: auto !important;
      max-width: none;
      margin: 0 0 1rem;
      padding: 2.8rem 2rem 0;

      @media (max-width: 1599px) {
        padding: 2.4rem 1.6rem 0;
      }

      @media (max-width: 1199px) {
        padding: 2rem 1.2rem 0;
      }

      @media (max-width: 1023px) {
        padding: 1.8rem 0.8rem 0;
      }

      @media (max-width: 767px) {
        padding: 1.6rem 1.2rem 0;
      }
    }

    .catalog-list__item-title {
      margin-bottom: 0;
      order: -1;
    }

    .catalog-list__item-tags {
      margin-bottom: 0;

      .product-tags__item {
        font-size: 1.8rem;
        line-height: 1.25;

        @media (max-width: 1023px) {
          font-size: 1.6rem;
        }

        @media (max-width: 767px) {
          font-size: 1.4rem;
        }
      }
    }

    .catalog-list__item-article {
      margin-top: 1.2rem;
    }

    .catalog-list__item-tags-list {
      position: absolute;
      left: 1.6rem;
      top: 1.6rem;
      right: 1.6rem;

      @media (max-width: 1023px) {
        top: 1.4rem;
        left: 1.4rem;
        right: 1.4rem;
      }

      @media (max-width: 767px) {
        top: 0.8rem;
        left: 0.8rem;
        right: 0.8rem;
      }
    }

    .catalog-list__item-property-list {
      display: none;
    }

    .catalog-list__item-price-block {
      height: auto !important;
      max-width: none;
      margin-left: 0;
      padding: 0 2rem 2rem;
      flex-grow: 1;
      gap: 2rem;

      @media (max-width: 1599px) {
        padding: 0 1.6rem 1.6rem;
        gap: 1.6rem;
      }

      @media (max-width: 1199px) {
        padding: 0 1.2rem 1.2rem;
      }

      @media (max-width: 1023px) {
        padding: 0 0.8rem 0.8rem;
        gap: 1.2rem;
      }

      @media (max-width: 767px) {
        align-items: stretch;
        margin-top: 0;
        gap: 0.8rem;
      }
    }

    .catalog-list__item-price {
      align-self: stretch;
    }

    .catalog-list__item-button {
      border: 1px solid var(--border-grey);
      font-size: 1.6rem;

      @media (max-width: 1023px) {
        padding: 1.4rem 1rem;
      }
    }
  }

  &--swiper {
    display: flex;
    gap: 0;
  }

  &__navigation {
    position: absolute;
    bottom: calc(100% + 4rem);
    right: 0;

    @media (max-width: 1599px) {
      bottom: calc(100% + 3.6rem);
    }

    @media (max-width: 1199px) {
      bottom: calc(100% + 3.2rem);
    }

    @media (max-width: 1023px) {
      display: none;
    }
  }
}
.product-tags {
  display: flex;
  flex-wrap: wrap;

  .product-tags__item-wrapper {
    position: relative;
    z-index: 1;

    &.hidden {
      display: none;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    min-height: 2.4rem;
    padding: 0 1.2rem;
    border-radius: 1.6rem;

    font-size: 1.6rem;
    line-height: 1.25;
    color: #fff;
    text-align: center;

    @media (max-width: 1023px) {
      font-size: 1.4rem;
      min-height: 2.2rem;
      padding: 0 0.8rem;
    }

    &--project {
      background-color: #981ed1;
    }

    &--new {
      background-color: #1ed130;
    }

    &--hit {
      background-color: var(--hit);
    }

    &--grey {
      background-color: var(--border-grey);
      color: #fff;
    }

    &--medium {
      font-size: 1.8rem;
      line-height: 1.25;
    }
  }

  .product-tags__show-wrapper {
    position: relative;
    z-index: 1;

    display: none;

    &.active {
      display: block;
    }
  }

  &__show {
    display: flex;
    align-items: center;
    padding: 0 1.2rem;
    border-radius: 1.6rem;
    height: 2.4rem;

    font-size: 1.6rem;
    line-height: 1.25;
    color: var(--hit);
    text-align: center;

    border: 1px solid var(--hit);

    @media (max-width: 1023px) {
      font-size: 1.4rem;
      height: 2.2rem;
    }
  }

  li.product-tags__hide-wrapper {
    position: relative;
    z-index: 1;

    display: none;

    &.active {
      display: block;
    }
  }

  &__hide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 2.4rem;

    border-radius: 1.6rem;
    border: 1px solid var(--border-grey);

    svg {
      width: 0.6rem;
      height: 1rem;
      transform: rotate(180deg);
    }

    @media (max-width: 1023px) {
      height: 2.2rem;
    }
  }
}
</style>