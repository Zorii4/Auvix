<template>
  <section class="stocks__lead">
    <div
      v-if="pageProps.size === 'banner'"
      class="container"
    >
      <div class="product-card-tile product-card-tile--lead">
        <ul class="product-card-tile__list">
          <li
            v-for="el of dateSort.slice(0,3)"
            :key="el.id"
            class="product-card-tile__item-wrapper"
          >
            <router-link
              class="product-card-tile__item"
              :to="`interactive/${el.code}`"
            >
              <!-- <div class="product-card-tile__item-brand">
                <img src="img/barco.svg" alt="Фото бренда">
              </div> -->
              <div class="product-card-tile__item-content">
                <div class="product-card-tile__item-meta">
                  <time class="product-card-tile__item-date">{{el.date}}</time>
                  <span
                    v-for="item of el.rubrics"
                    :key="item.id"
                    class="product-card-tile__item-activity"
                  >{{item.name}}</span>
                </div>
                <span
                  v-if="el.status === 'active'"
                  class="product-card-tile__item-tag product-card-tile__item-tag--active"
                >активная</span>
                <div class="product-card-tile__item-name">
                  <p>{{el.title}}</p>
                </div>
              </div>
              <div class="product-card-tile__item-img">
                <img
                  :src="$config?.baseURLImg + el.preview_image_url"
                  alt="Фото мероприятия"
                >
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div
      v-if="pageProps.size === 'tile'"
      class="container"
    >
      <div class="product-card-tile product-card-tile--lead">
        <ul class="product-card-tile__list">
          <li
            v-for="el of dateSort"
            :key="el.id"
            class="product-card-tile__item-wrap-tile"
          >
            <router-link
              class="product-card-tile__item"
              :to="`interactive/${el.code}`"
            >
              <!-- <div class="product-card-tile__item-brand">
                <img src="img/barco.svg" alt="Фото бренда">
              </div> -->
              <div class="product-card-tile__item-content">
                <div class="product-card-tile__item-meta">
                  <time class="product-card-tile__item-date">{{el.date}}</time>
                  <span
                    v-for="item of el.rubrics"
                    :key="item.id"
                    class="product-card-tile__item-activity"
                  >{{item.name}}</span>
                </div>
                <span
                  v-if="el.status === 'active'"
                  class="product-card-tile__item-tag product-card-tile__item-tag--active"
                >активная</span>
                <div class="product-card-tile__item-name">
                  <p>{{el.title}}</p>
                </div>
              </div>
              <div class="product-card-tile__item-img">
                <img
                  :src="$config?.baseURLImg + el.preview_image_url"
                  alt="Фото мероприятия"
                >
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PromotionAndDiscounts',
  props: {
    pageProps: Object,
  },
  async fetch() {
    return await this.$store.dispatch(
      'interactive/getInteractiveData',
      this.pageProps.id
    )
  },
  computed: {
    ...mapState({
      interactiveData: (state) => state.interactive.interactiveData,
    }),
    discountData() {
      return this.interactiveData[this.pageProps.id]
    },
    dateSort() {
      return this.discountData?.data
        .map((el) => el)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    },
  },
}
</script>

<style lang="scss" scoped>
.stocks__lead {
  margin-bottom: 5rem;
}

.product-card-tile {
  &--lead {
    @media (max-width: 1023px) {
      .product-card-tile__item-meta {
        gap: 0.4rem 4rem;
      }

      .product-card-tile__item-activity {
        width: auto;
      }
    }

    @media (max-width: 767px) {
      .product-card-tile__item-wrapper {
        min-height: 25.6rem;
      }

      .product-card-tile__item-meta {
        gap: 0.4rem 1.2rem;
      }

      .product-card-tile__item-img {
        display: block;
        width: 100%;
        height: 12rem;
        margin-top: 1.2rem;
      }
      .product-card-tile__item-brand {
        display: none;
      }
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.4rem;

    @media (max-width: 1023px) {
      grid-template-columns: 1fr;
    }
  }

  &__item-wrapper {
    max-height: 24rem;

    @media (max-width: 1599px) {
      max-height: 20.2rem;
    }

    @media (max-width: 1023px) {
      max-height: 15rem;
      grid-row: span 1;
    }

    @media (max-width: 767px) {
      max-height: 12.8rem;
    }
  }

  &__item-wrapper:nth-child(1) {
    grid-row: span 2;
    max-height: 48rem;

    @media (max-width: 1599px) {
      max-height: 40.4rem;
    }

    @media (max-width: 1023px) {
      max-height: 30rem;
      grid-row: span 1;
    }

    @media (max-width: 767px) {
      max-height: 25.6rem;
    }

    .product-card-tile__item {
      padding: 0.8rem;

      @media (max-width: 767px) {
        padding: 0.4rem;
      }
    }

    .product-card-tile__item-meta {
      gap: 0.4rem 9.6rem;

      @media (max-width: 1599px) {
        gap: 0.4rem 5.4rem;
      }

      @media (max-width: 1199px) {
        gap: 0.4rem 1.6rem;
      }

      @media (max-width: 1023px) {
        gap: 0.4rem 1.2rem;
      }

      @media (max-width: 767px) {
      }
    }

    .product-card-tile__item-activity {
      width: auto;
    }

    .product-card-tile__item-img {
      position: absolute;
      left: 0;
      top: 0;

      width: 100%;
      height: 100%;
      margin-top: 0;
    }

    .product-card-tile__item-content {
      position: relative;
      z-index: 1;

      max-width: 48.3rem;
      min-height: 20.8rem;
      padding: 2.8rem 2.8rem 2.4rem;
      margin-left: auto;
      margin-top: auto;

      border-radius: 1.6rem;
      background-color: #fff;

      @media (max-width: 1599px) {
        max-width: 39.7rem;
        padding: 2.4rem 2.4rem 2rem;
      }

      @media (max-width: 1199px) {
        max-width: 31.5rem;
        min-height: 18.4rem;
        padding: 2rem 2rem 1.6rem;
      }

      @media (max-width: 1023px) {
        max-width: 35.4rem;
        min-height: 17.6rem;
        padding: 2rem;
      }

      @media (max-width: 767px) {
        min-height: 12rem;
        border-radius: 1.2rem;
        padding: 1.2rem;
      }
    }
  }

  &__item {
    position: relative;

    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0;
    height: 100%;
    padding: 0.8rem;

    border-radius: 2rem;
    background: #f2f3f7;

    @media (max-width: 1023px) {
      border-radius: 1.6rem;
    }

    @media (max-width: 767px) {
      min-height: 13.2rem;
      grid-template-columns: 1fr;
      padding: 1.6rem;
      border-radius: 1.2rem;
    }
  }

  &__item-content {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding: 2rem 2.8rem 2rem 2rem;

    @media (max-width: 1599px) {
      gap: 0.8rem;
      padding: 1.6rem 2.4rem 1.6rem 1.6rem;
    }

    @media (max-width: 1199px) {
      padding: 1.2rem 2rem 0.8rem 1.2rem;
    }

    @media (max-width: 1023px) {
      padding-bottom: 1.2rem;
    }

    @media (max-width: 767px) {
      padding: 0;
    }
  }

  &__item-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem 1rem;

    font-size: 1.8rem;
    line-height: 1.3;
    color: var(--easy-dark);

    @media (max-width: 1199px) {
      font-size: 1.6rem;
    }

    @media (max-width: 767px) {
      font-size: 1.4rem;
    }
  }

  &__item-date,
  &__item-activity {
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

      border: 1px solid var(--jack-grey);
      border-radius: 50%;

      @media (max-width: 1199px) {
        width: 1rem;
        height: 1rem;
      }
    }
  }

  &__item-activity {
    &::before {
      background: var(--jack-grey);
    }
  }

  &__item-activity {
    width: 100%;
  }

  &__item-tag {
    display: flex;
    align-items: center;
    align-self: flex-start;
    padding: 0.1rem 1.2rem;

    background: var(--hit);
    border-radius: 1.6rem;

    font-size: 1.6rem;
    line-height: 1.25;
    color: #fff;

    @media (max-width: 1023px) {
      font-size: 1.4rem;
    }

    &--active {
      background: #1ed130;
    }
  }

  &__item-name {
    margin-top: auto;

    font-size: 2rem;
    line-height: 1.4;
    color: var(--easy-dark);

    @media (max-width: 1199px) {
      font-size: 1.8rem;
      line-height: 1.3;
    }

    @media (max-width: 767px) {
      font-size: 1.6rem;
    }
  }

  &__item-img {
    width: 35.1rem;
    height: 100%;
    overflow: hidden;

    @media (max-width: 1599px) {
      width: 29.5rem;
    }

    @media (max-width: 1199px) {
      width: 22.5rem;
    }

    @media (max-width: 1023px) {
      width: 25.4rem;
    }

    @media (max-width: 767px) {
      display: none;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;

      border-radius: 1.6rem;

      @media (max-width: 767px) {
        border-radius: 1.2rem;
      }
    }
  }

  &__item-brand {
    position: absolute;
    top: 2.8rem;
    right: 2.8rem;
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 10.4rem;
    height: 5.6rem;

    border-radius: 1.2rem;
    background: #fcfeff;

    @media (max-width: 1599px) {
      top: 2.4rem;
      right: 2.4rem;
    }

    @media (max-width: 1199px) {
      top: 2rem;
      right: 2rem;

      width: 7.4rem;
      height: 4rem;
      border-radius: 0.8rem;
    }

    @media (max-width: 767px) {
      top: 1.6rem;
      right: 1.6rem;
    }

    img {
      max-width: 80%;
      max-height: 60%;
    }
  }
}

.product-card-tile__item-wrap-tile {
  max-height: 24rem;

  @media (max-width: 1599px) {
    max-height: 20.2rem;
  }

  @media (max-width: 1023px) {
    max-height: 15rem;
    grid-row: span 1;
  }

  @media (max-width: 767px) {
    max-height: 12.8rem;
  }
}
</style>