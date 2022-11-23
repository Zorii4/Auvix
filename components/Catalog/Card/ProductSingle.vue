<template>
  <div class="single-product-card">
    <div class="single-product-card__text-column">
      <!-- <div class="single-product-card__breadcrumbs">
            {{> breadcrumbs }}
        </div> -->
      <h1 class="single-product-card__title section-title">{{ productName }}</h1>
      <span class="single-product-card__article">Артикул {{articleCode}}</span>
      <div class="single-product-card__text">
        <p v-if="anonceProductText">{{anonceProductText}}</p>
      </div>
      <p
        v-if="availability"
        class="single-product-card__availability"
      ><span>{{ availability }}</span></p>
      <div class="single-product-card__price-block">
        <span class="single-product-card__price">
          <!-- <div class="single-product-card__price-discount">
            <span class="single-product-card__price-discount-number">{{price}}</span>
            <span class="single-product-card__price-discount-size discount">-30%</span>
          </div> -->
          <template v-if="Number(price) > 0">
            <div class="single-product-card__price-number">
              <span>{{ price | priceFilter }} {{ computedCurrency }}</span>
              <!-- <a
              class="single-product-card__price-number-arrows"
              href="#currency"
            >
              <svg>
                <use xlink:href="#slider-arrow"></use>
              </svg>
              <svg>
                <use xlink:href="#slider-arrow"></use>
              </svg>
            </a> -->
            </div>
            <span class="single-product-card__price-recommend">рекомендованная розничная цена</span>

          </template>
          <div
            v-else
            class="single-product-card__price-number"
          >По запросу</div>
        </span>
        <div class="single-product-card__button-block">
          <button class="single-product-card__button button">Запросить дилерскую цену</button>
        </div>
      </div>
    </div>
    <div class="single-product-card__img-column">
      <div class="single-product-card__img-column-wrapper">
        <!-- <ul class="single-product-card__tags product-tags">
          <li>
            <a
              class="product-tags__item product-tags__item--new"
              href="search-page-tag.html"
            >новинка</a>
          </li>
        </ul> -->
        <div class="single-product-card__img-active swiper-container">
          <ul class="swiper-wrapper">
            <li class="swiper-slide swiper-slide--video">
              <img
                :src="productMainImageUrl || '/images/noimage.jpg'"
                alt="Фото товара"
              >
            </li>
          </ul>
        </div>
        <!-- <div class="single-product-card__img-pagination swiper-pagination"></div>
        <div class="single-product-card__gallery-container">
          <div class="single-product-card__gallery swiper-container">
            <ul class="single-product-card__gallery-list swiper-wrapper">
              <li class="single-product-card__gallery-item single-product-card__gallery-item--video active swiper-slide">
                <img
                  src="img/product-1.png"
                  alt="Фото товара"
                >
              </li>
              <li class="single-product-card__gallery-item swiper-slide">
                <img
                  src="img/product-2.png"
                  alt="Фото товара"
                >
              </li>
              <li class="single-product-card__gallery-item swiper-slide">
                <img
                  src="img/product-3.png"
                  alt="Фото товара"
                >
              </li>
              <li class="single-product-card__gallery-item swiper-slide">
                <img
                  src="img/product-3.png"
                  alt="Фото товара"
                >
              </li>
              <li class="single-product-card__gallery-item swiper-slide">
                <img
                  src="img/product-3.png"
                  alt="Фото товара"
                >
              </li>
            </ul>
          </div>
          <div class="single-product-card__navigation">
            <button class="single-product-card__navigation-button single-product-card__navigation-button--prev">
              <svg>
                <use xlink:href="#slider-arrow"></use>
              </svg>
            </button>
            <button class="single-product-card__navigation-button single-product-card__navigation-button--next">
              <svg>
                <use xlink:href="#slider-arrow"></use>
              </svg>
            </button>
          </div>
        </div> -->
      </div>
    </div>
    <!-- <div class="single-product-card__preview">
      <div class="single-product-card__preview-close">
        {{> close-button }}
      </div>
      <div class="single-product-card__preview-active-img swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <iframe
              src="https://www.youtube.com/embed/Y8yo6fzmEFg?rel=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </li>
          <li class="swiper-slide">
            <img
              src="img/product-preview-2.png"
              alt="Фото товара"
            >
          </li>
          <li class="swiper-slide">
            <img
              src="img/product-preview-3.png"
              alt="Фото товара"
            >
          </li>
          <li class="swiper-slide">
            <img
              src="img/product-preview-3.png"
              alt="Фото товара"
            >
          </li>
          <li class="swiper-slide">
            <img
              src="img/product-preview-3.png"
              alt="Фото товара"
            >
          </li>
        </ul>
      </div>
      <div class="single-product-card__preview-list-container swiper-container">
        <ul class="single-product-card__preview-list swiper-wrapper">
          <li class="single-product-card__preview-item single-product-card__preview-item--video swiper-slide">
            <img
              src="img/product-preview-1.png"
              alt="Фото продукта"
            >
          </li>
          <li class="single-product-card__preview-item swiper-slide">
            <img
              src="img/product-preview-2.png"
              alt="Фото продукта"
            >
          </li>
          <li class="single-product-card__preview-item swiper-slide">
            <img
              src="img/product-preview-3.png"
              alt="Фото продукта"
            >
          </li>
          <li class="single-product-card__preview-item swiper-slide">
            <img
              src="img/product-preview-3.png"
              alt="Фото продукта"
            >
          </li>
          <li class="single-product-card__preview-item swiper-slide">
            <img
              src="img/product-preview-3.png"
              alt="Фото продукта"
            >
          </li>
        </ul>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'CatalogProductSingle',

  props: {
    price: {
      type: [String, Number],
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    articleCode: {
      type: [String, Number],
      required: true,
    },
    availability: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    currecy: {
      type: String,
      required: true,
    },
    productMainImageUrl: {
      type: String,
      required: true,
    },
    anonceProductText: {
      type: String,
      default: '',
    },
  },
  computed: {
    computedCurrency() {
      if (this.currency === 'Рубль') {
        return '₽'
      }
      if (this.currency === 'USD') {
        return '$'
      }
      if (this.currency === 'Евро') {
        return '€'
      }
      return '₽'
    },
  },
}
</script>

<style lang="scss" scoped>
.single-product-card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 3.2rem;
  padding: 5.2rem;
  min-height: 48rem;

  border-radius: 2rem;
  background: var(--grey);

  @media (max-width: 1599px) {
    padding: 2rem;
    min-height: 42rem;
  }

  @media (max-width: 1199px) {
    gap: 2.8rem;
    min-height: 45.6rem;
  }

  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    padding: 0;
    min-height: auto;
    gap: 0.4rem;

    background: none;
    border-radius: 0;
  }

  @media (max-width: 767px) {
    gap: 2.8rem;

    border-radius: 1.2rem;
    background: var(--grey);
  }

  &__text-column {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 1023px) {
      min-height: 36rem;
      padding: 1.6rem;

      border-radius: 1.6rem;
      background-color: var(--grey);
    }

    @media (max-width: 767px) {
      min-height: auto;
      padding: 1.6rem 1.6rem 0;
      gap: 1.2rem;
    }
  }

  &__title {
    max-width: 61.4rem;
    margin: 0;
  }

  &__article {
    font-size: 1.4rem;
    line-height: 1.1;
    color: var(--jack-grey);
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 61.4rem;

    p {
      font-size: 2rem;
      line-height: 1.4;

      @media (max-width: 1199px) {
        font-size: 1.8rem;
      }
    }
  }

  &__availability {
    max-width: 61.4rem;
    margin-top: auto;
    padding-bottom: 1.9rem;

    border-bottom: 1px solid var(--border-grey);

    font-size: 1.8rem;
    line-height: 1.3;
    color: var(--jack-grey);

    @media (max-width: 1199px) {
      font-size: 1.6rem;
    }

    @media (max-width: 1023px) {
      max-width: none;
      padding-bottom: 1.5rem;
    }

    @media (max-width: 767px) {
      padding-bottom: 1.9rem;
    }

    span {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      @media (max-width: 1199px) {
        gap: 0.8rem;
      }

      &::before {
        content: '';

        width: 1.2rem;
        height: 1.2rem;

        border-radius: 50%;
        background: #40ce4e;

        @media (max-width: 1199px) {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }

  &__price-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    max-width: 61.4rem;

    @media (max-width: 1199px) {
      align-items: stretch;
      flex-direction: column;
      max-width: 30.8rem;
    }

    @media (max-width: 1023px) {
      align-items: flex-end;
      flex-direction: row;
      max-width: none;
    }
  }

  &__price {
    display: flex;
    flex-direction: column;
  }

  &__price-discount {
    display: flex;
    gap: 1.2rem;
    align-items: center;

    font-size: 2.4rem;
    line-height: 1.2;
    color: var(--jack-grey);

    @media (max-width: 1199px) {
      font-size: 2.2rem;
      gap: 1rem;
    }
  }

  &__price-discount-number {
    text-decoration: line-through;
  }

  &__price-number {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 0.4rem;

    font-size: 3.6rem;
    line-height: 1.1;

    @media (max-width: 1599px) {
      font-size: 3.2rem;
    }

    @media (max-width: 1023px) {
      font-size: 2.8rem;
    }
  }

  &__price-number-arrows {
    display: flex;
    flex-direction: column;

    cursor: pointer;

    &:hover {
      opacity: 1;
    }

    svg {
      width: 0.6rem;
      height: 0.8rem;

      &:first-child {
        transform: rotate(-90deg);
      }

      &:last-child {
        transform: rotate(90deg);
      }
    }
  }

  &__price-recommend {
    font-size: 1.4rem;
    line-height: 1.1;
    color: var(--jack-grey);

    @media (max-width: 767px) {
      font-size: 1.2rem;
    }
  }

  &__button-block {
    @media (max-width: 767px) {
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 2;

      width: 100vw;
      height: 14rem;
      padding: 1.6rem 2rem;

      background-color: #fff;
      border-radius: 1.2rem 1.2rem 0 0;

      transition: 0.5s;

      &.hide {
        bottom: -100%;
      }
    }
  }

  &__button {
    width: 100%;
    padding: 1.6rem 3.4rem;
    justify-content: center;

    @media (max-width: 1023px) {
      padding: 1.6rem 3.2rem;
    }

    @media (max-width: 767px) {
      padding: 1rem;
      font-size: 1.6rem;
    }
  }

  &__img-column {
    position: relative;

    padding: 1.6rem 0 2rem;

    background-color: #fff;
    border-radius: 2rem;

    @media (max-width: 1599px) {
      padding: 2.8rem 0 2rem;
    }

    @media (max-width: 1199px) {
      padding: 5.6rem 0 2rem;
    }

    @media (max-width: 1023px) {
      padding: 0.8rem;
      min-height: 36.8rem;

      background-color: var(--grey);
      border-radius: 1.6rem;
    }

    @media (max-width: 767px) {
      min-height: auto;
      padding: 0 0.8rem 0.8rem;
      border-radius: 1.2rem;
    }
  }

  &__img-column-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2.8rem;
    height: 100%;

    @media (max-width: 1023px) {
      padding: 2.4rem 0 2rem;

      border-radius: 1.6rem;
      background: #fff;
    }

    @media (max-width: 767px) {
      padding: 2.8rem 0 6rem;
    }
  }

  &__tags {
    position: absolute;
    left: 2rem;
    top: 2rem;
    z-index: 2;

    @media (max-width: 1599px) {
      top: 1.6rem;
      left: 1.6rem;
    }
  }

  &__img-active {
    position: relative;

    align-self: stretch;
    width: 100%;
    max-width: 49rem;
    margin: 0 auto;

    overflow: hidden;
    cursor: pointer;

    .swiper-slide {
      position: relative;
      aspect-ratio: 490 / 252;

      &--video {
        &::after {
          content: '';

          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;

          width: 6.4rem;
          height: 4.6rem;

          // background: url('../img/youtube.svg') no-repeat center;
          background-size: 100%;
        }
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .single-product-card__img-pagination {
    display: none;

    @media (max-width: 767px) {
      display: block;
      bottom: 2.5rem;
    }
  }

  &__gallery-container {
    position: relative;
    justify-self: flex-end;

    @media (max-width: 767px) {
      display: none;
    }

    .swiper-button-disabled {
      color: var(--border-grey);
    }
  }

  &__gallery {
    position: relative;
    overflow: hidden;
  }

  &__gallery-list {
    max-width: 29rem;

    @media (max-width: 1199px) {
      max-width: 27.2rem;
    }
  }

  &__gallery-item {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 6rem;

    border: 1px solid var(--border-grey);
    border-radius: 1.2rem;
    overflow: hidden;
    cursor: pointer;

    transition: 0.3s;

    @media (max-width: 1199px) {
      min-height: 5.6rem;
    }

    &--video {
      &::after {
        content: '';

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 2.8rem;
        height: 2rem;

        // background: url('../img/youtube.svg') no-repeat center;
        background-size: 100%;
      }
    }

    &.swiper-slide-thumb-active {
      border-color: #6666f5;
    }

    img {
      width: 100%;
      max-width: 80%;
      max-height: 80%;
    }
  }

  &__navigation {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    justify-content: space-between;
    align-self: center;
    width: calc(100% + 9.8rem);

    @media (max-width: 1199px) {
      width: calc(100% + 8rem);
    }
  }

  &__navigation-button {
    svg {
      width: 0.9rem;
      height: 1.4rem;

      @media (max-width: 1199px) {
        width: 0.8rem;
        height: 1.2rem;
      }
    }

    &--prev {
      transform: rotate(180deg);
    }
  }

  &__preview {
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    min-height: 100vh;
    padding: 2rem 6rem;

    background-color: #fff;
    opacity: 0;

    transition: 0.3s;

    @media (max-width: 1599px) {
      padding: 2rem 2.8rem;
    }

    @media (max-width: 1199px) {
      padding: 2rem 2.4rem;
    }

    @media (max-width: 1023px) {
      padding: 2rem;
    }

    &.active {
      opacity: 1;
      z-index: 1001;
    }
  }

  &__preview-close {
    position: absolute;
    right: 6rem;
    top: 3.2rem;

    @media (max-width: 1599px) {
      top: 2.8rem;
      right: 2.8rem;
    }

    @media (max-width: 1199px) {
      top: 2.4rem;
      right: 2.4rem;
    }

    @media (max-width: 1023px) {
      top: 2rem;
      right: 2rem;
    }

    .close-button {
      @media (max-width: 1023px) {
        width: 5.2rem;
        height: 5.2rem;
      }

      @media (max-width: 767px) {
        width: 4rem;
        height: 4rem;

        svg {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }

  &__preview-active-img {
    flex-grow: 1;
    width: 100%;
    height: calc(100vh - var(--gallery-height) * 2);
    margin-top: var(--gallery-height);

    video,
    iframe {
      width: 100%;
      max-height: 100%;
      max-width: 126rem;
      margin: 0 auto;
      aspect-ratio: 986 / 552;
      object-fit: contain;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      margin: 0 auto;
    }
  }

  &__preview-list-container {
    width: 100%;
    height: 15.6rem;

    overflow: hidden;

    @media (max-width: 1599px) {
      left: 2.8rem;
      right: 2.8rem;
      height: 13rem;
    }

    @media (max-width: 1199px) {
      left: 2.4rem;
      right: 2.4rem;
      height: 10.2rem;
    }

    @media (max-width: 1023px) {
      left: 2rem;
      right: 2rem;
      height: 7.4rem;
    }

    @media (max-width: 767px) {
      height: 4rem;
    }
  }

  &__preview-item {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid var(--border-grey);
    border-radius: 2rem;
    overflow: hidden;
    cursor: pointer;

    transition: 0.3s;

    @media (max-width: 767px) {
      border-radius: 0.8rem;
    }

    &.swiper-slide-thumb-active {
      border-color: #6666f5;
    }

    img {
      max-width: 85%;
      max-height: 85%;
    }

    &--video {
      &::after {
        content: '';

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 5rem;
        height: 3.6rem;

        // background: url("../img/youtube.svg") no-repeat center;
        // background-size: 100%;

        @media (max-width: 1023px) {
          width: 3.5rem;
          height: 2.5rem;
        }

        @media (max-width: 767px) {
          width: 2.1rem;
          height: 1.5rem;
        }
      }
    }
  }
}
</style>