<template>
  <div>
    <section class="product__card">
      <div class="wide-container">
        <CatalogCardProductSingle
          availability='в наличии на складе'
          :price='product.price_retail'
          :articleCode="product.vendor_code"
          :productName='product.name'
          :currecy="product.currency_name"
          :productMainImageUrl="product.image_main_url"
        />
      </div>
    </section>
    <!-- <div class="product__tabs">
            <div class="container">
                {{> tabs tabId=true data=productTabs gap=40 gaps='1280:40,1024:28,280:20' }}
            </div>
        </div>
        <div class="product__tabs-content">
            <section class="product__description tabs-item-js" id="tab_1">
                <div class="container">
                    <div class="product-description">
                        <div class="product-description__text-column">
                            <div class="product-description__text">
                                <p>
                                    Проектор Projectiondesign F82 1080 подходит для использования в разных областях, в том
                                    числе с большими экранами в обширных аудиториях и на сценах. Виртуозное управление
                                    цветом обеспечивают технологии RealColor™ и улучшенная оптическая обработка цвета ACOP,
                                    уникальный динамический диапазон для трехчипового проектора обеспечивает функция
                                    DynamicBlack™. Проектор имеет разрешение 1080р. Проектор rojectiondesign F82 1080 готов
                                    к работе в непрерывном режиме 24/7, что покрывается его гарантией.
                                </p>
                            </div>
                            <button class="product-description__more-button">
                                Показать полное описание
                                <svg>
                                    <use xlink:href="#slider-arrow"></use>
                                </svg>
                            </button>
                        </div>
                        <div class="product-description__img-column">
                            <a class="product-description__img-block" href="#">
                                <img src="img/product-description.svg" alt="Фото бренда">
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="product__characteristic tabs-item-js" id="tab_2">
                <div class="container">
                    <div class="product-characteristic">
                        <div class="product-characteristic__row">
                            <h3 class="product-characteristic__row-title">Основные</h3>
                            <ul class="product-characteristic__properties">
                                {{#each mainProperty }}
                                    <li class="product-characteristic__property-wrapper">
                                        <div class="product-characteristic__property">
                                            <span class="product-characteristic__property-name">{{this.name}}</span>
                                            <span class="product-characteristic__property-value">{{this.value}}</span>
                                        </div>
                                    </li>
                                {{/each}}
                            </ul>
                        </div>
                        <div class="product-characteristic__row">
                            <h3 class="product-characteristic__row-title">Экран и яркость</h3>
                            <ul class="product-characteristic__properties">
                                {{#each displayProperty }}
                                    <li class="product-characteristic__property-wrapper">
                                        <div class="product-characteristic__property">
                                            <span class="product-characteristic__property-name">{{this.name}}</span>
                                            <span class="product-characteristic__property-value">{{this.value}}</span>
                                        </div>
                                    </li>
                                {{/each}}
                            </ul>
                        </div>
                        <div class="product-characteristic__row">
                            <h3 class="product-characteristic__row-title">Лампа</h3>
                            <ul class="product-characteristic__properties">
                                {{#each lampProperty }}
                                    <li class="product-characteristic__property-wrapper">
                                        <div class="product-characteristic__property">
                                            <span class="product-characteristic__property-name">{{this.name}}</span>
                                            <span class="product-characteristic__property-value">{{this.value}}</span>
                                        </div>
                                    </li>
                                {{/each}}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="product__options active tabs-item-js" id="tab_3">
                <div class="container">
                    <div class="product-options">
                        <h3 class="product-options__title">Сменные входные модули</h3>
                        <ul class="product-options__list">
                            {{#each inputModules }}
                                <li>
                                    <div class="product-options__item">
                                        <div class="product-options__item-img">
                                            <img src="{{this.img}}" alt="Фото товара">
                                        </div>
                                        <div class="product-options__item-content">
                                            <div class="product-options__item-content-block">
                                                <h4 class="product-options__item-title">{{this.title}}</h4>
                                                <div class="product-options__item-price">
                                                    <span class="product-options__item-price-number">{{this.price}}</span>
                                                    <span class="product-options__item-price-recommend">рекомендованная розничная цена</span>
                                                </div>
                                            </div>
                                            <button class="product-options__item-button button button--white">Запросить диллерскую цену</button>
                                        </div>
                                    </div>
                                </li>
                            {{/each}}
                        </ul>
                        <h3 class="product-options__title">Модули-вставки</h3>
                        <ul class="product-options__list">
                            {{#each insertionModules }}
                                <li>
                                    <div class="product-options__item">
                                        <div class="product-options__item-img">
                                            <img src="{{this.img}}" alt="Фото товара">
                                        </div>
                                        <div class="product-options__item-content">
                                            <div class="product-options__item-content-block">
                                                <h4 class="product-options__item-title">{{this.title}}</h4>
                                                <div class="product-options__item-price">
                                                    <span class="product-options__item-price-number">{{this.price}}</span>
                                                    <span class="product-options__item-price-recommend">рекомендованная розничная цена</span>
                                                </div>
                                            </div>
                                            <button class="product-options__item-button button button--white">Запросить диллерскую цену</button>
                                        </div>
                                    </div>
                                </li>
                            {{/each}}
                        </ul>
                    </div>
                </div>
            </section>
            <section class="product__review tabs-item-js" id="tab_4">
                <div class="container">
                    {{> articles mod='articles--light' data=articles }}
                </div>
            </section>
            <section class="product__documentation tabs-item-js" id="tab_5">
                <div class="container">
                    <ul class="product-documentation">
                        {{#each documentation }}
                            <li>
                                <div class="product-documentation__item">
                                    <div class="product-documentation__item-header">
                                        <span class="product-documentation__item-format">{{format}}</span>
                                        <span class="product-documentation__item-weight">{{weight}}</span>
                                    </div>
                                    <h3 class="product-documentation__item-title">{{this.title}}</h3>
                                    <button class="product-documentation__item-button">
                                        <svg>
                                            <use xlink:href="#download-arrow"></use>
                                        </svg>
                                    </button>
                                </div>
                            </li>
                        {{/each}}
                    </ul>
                </div>
            </section>
        </div> -->
  </div>
</template>

<script>
import { fetchProductById } from '@/API-services/productService'
export default {
  name: 'ProductPage',
  data() {
    return {
      product: null,
    }
  },

  async fetch() {
    const productId = this.$route.params.id

    const [productErr, productData] = await fetchProductById(productId)

    if (productData) {
      this.product = productData
    } else {
      console.error(productErr)
    }
  },
}
</script>

<style lang="scss" scoped>
.product {
  &__card {
    padding: 0.4rem 0 0;
  }

  &__tabs {
    border-bottom: 1px solid var(--border-grey);
  }

  &__tabs-content section {
    position: absolute;
    opacity: 0;
    visibility: hidden;

    width: 100%;

    transition: 0.2s;

    &.active {
      position: static;
      opacity: 1;
      visibility: visible;
    }
  }

  &__description {
    padding: 5.2rem 0 6rem;

    @media (max-width: 1599px) {
      padding: 4.8rem 0 5.6rem;
    }

    @media (max-width: 1199px) {
      padding: 4rem 0 5.2rem;
    }

    @media (max-width: 1023px) {
      padding: 3.6rem 0 5.2rem;
    }

    @media (max-width: 767px) {
      padding: 3.2rem 0 4rem;
    }
  }

  &__accessories {
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

  &__accessories-header {
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

    h2 {
      max-width: 36.7rem;
    }
  }

  &__application {
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

    .article__text-content {
      max-width: 64.5rem;

      p {
        max-width: 57.5rem;
      }
    }
  }

  &__application-header {
    padding-bottom: 4rem;

    @media (max-width: 1599px) {
      padding-bottom: 3.6rem;
    }

    @media (max-width: 1199px) {
      display: none;
    }

    h2 {
      max-width: 36.7rem;
    }
  }

  &__analog {
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

  &__analog-header {
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

    h2 {
      max-width: 36.7rem;
    }
  }

  &__characteristic {
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

  &__documentation {
    padding: 5.2rem 0 6rem;

    @media (max-width: 1599px) {
      padding: 4.8rem 0 5.6rem;
    }

    @media (max-width: 1199px) {
      padding: 4rem 0 5.2rem;
    }

    @media (max-width: 1023px) {
      padding: 3.6rem 0 4.8rem;
    }

    @media (max-width: 767px) {
      padding: 3.2rem 0 4rem;
    }
  }

  &__review {
    padding: 5.2rem 0 6rem;

    @media (max-width: 1599px) {
      padding: 4.8rem 0 6rem;
    }

    @media (max-width: 1199px) {
      padding: 4rem 0 5.2rem;
    }

    @media (max-width: 1023px) {
      padding: 3.6rem 0 4.8rem;
    }

    @media (max-width: 767px) {
      padding: 3.2rem 0 4rem;
    }
  }

  &__options {
    padding: 5.2rem 0 6rem;

    @media (max-width: 1599px) {
      padding: 4.8rem 0 5.6rem;
    }

    @media (max-width: 1199px) {
      padding: 4rem 0 5.2rem;
    }

    @media (max-width: 1023px) {
      padding: 3.6rem 0 4.8rem;
    }

    @media (max-width: 767px) {
      padding: 3.2rem 0 4rem;
    }
  }

  &__visited {
    padding-bottom: 0.8rem;
  }
}
</style>