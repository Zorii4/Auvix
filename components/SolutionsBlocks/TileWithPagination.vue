<template>
  <section class="scope__articles">
    <div class="wide-container">
      <div class="scope__list-block">
        <ul class="scope__list">
          <li
            v-for="item of solutionsData?.data.slice((currentPage - 1) * countItems, currentPage * countItems)"
            :key="item.id"
          >
            <div class="article">
              <div class="article__container">
                <div class="article__inner">
                  <div class="article__text-column">
                    <div class="article__text-header">
                      <time class="article__text-date">{{item.last_published_at | formatData('toYear')}}</time>
                      <span
                        v-for="el of item.rubrics"
                        :key="el.id"
                        class="article__category"
                      >{{el.name}}</span>
                    </div>
                    <div class="article__text-content article__text-content--text-bottomed article__text-content--title-bottomed">
                      <h3 class="article__text-title">{{item.title}}</h3>
                      <p>{{item.short_description}}</p>
                    </div>
                    <router-link
                      class="article__link"
                      :to="`decisions/${item.code}`"
                    >
                      Подробнее
                      <svg
                        width="8"
                        height="10"
                        viewBox="0 0 8 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 5L-8.74228e-07 10L0 0L8 5Z"
                          fill="#202226"
                        />
                      </svg>
                    </router-link>
                  </div>
                  <div class="article__img-column">
                    <div class="article__img-wrapper">
                      <img
                        :src="$config?.baseURLImg + item.preview_image_url"
                        alt="Фото"
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <paginate
        v-if="pageProps.entire_block_as_slider && pageCount > 0"
        :style="{display: 'flex'}"
        v-model="currentPage"
        :pageCount="pageCount"
        :pageRange="3"
        :marginPages="1"
        prevText="Назад"
        nextText="Вперед"
        containerClass="pagination__solutions"
        pageClass="pagination__number"
        prevClass="pagination__button-prev"
        nextClass="pagination__button-next"
      >
      </paginate>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TileWithPagination',
  props: {
    solutionsData: Object,
    pageProps: Object,
  },
  data() {
    return {
      currentPage: 1,
      countItems: this.pageProps?.cards_before_slider,
      limit: this.pageProps?.limit,
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.limit / this.countItems)
    },
  },
}
</script>

<style lang="scss" scoped>
.scope {
  &__list-block {
    padding-top: 4rem;
    margin-bottom: 4rem;

    @media (max-width: 1199px) {
      padding-top: 3.6rem;
    }

    @media (max-width: 1023px) {
      padding-top: 3.2rem;
    }

    @media (max-width: 767px) {
      padding-top: 2.8rem;
    }

    &--last {
      padding-top: 0;
      padding-bottom: 4rem;

      @media (max-width: 767px) {
        padding-bottom: 2.8rem;
      }
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
}

.article {
  &__container {
    position: relative;

    border-radius: 2rem;
    overflow: hidden;
  }

  &__inner {
    display: flex;
    flex-direction: row;
    gap: 0.4rem;
    min-height: 48rem;

    @media (max-width: 1599px) {
      min-height: 42rem;
    }

    @media (max-width: 1199px) {
      min-height: 35.2rem;
    }

    @media (max-width: 1023px) {
      min-height: 28rem;
    }

    @media (max-width: 767px) {
      min-height: auto;
      flex-direction: column;
    }
  }

  &__text-column {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 5.2rem;

    border-radius: 0 2rem 2rem 0;
    background-color: var(--extra-light-gray);

    @media (max-width: 1599px) {
      padding: 2rem;
    }

    @media (max-width: 1023px) {
      padding: 1.6rem;
    }

    @media (max-width: 767px) {
      width: 100%;
      min-height: 28rem;
      border-radius: 1.2rem;
    }

    &--title-bottomed {
      @media (max-width: 767px) {
        min-height: 15.2rem;
      }
    }
  }

  &__text-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 47.5rem;
    margin-bottom: 5.2rem;

    @media (max-width: 1599px) {
      max-width: 41.1rem;
      margin-bottom: 4.8rem;
    }

    @media (max-width: 1199px) {
      max-width: 33.4rem;
      margin-bottom: 4rem;
    }

    @media (max-width: 1023px) {
      max-width: 27.2rem;
      margin-bottom: 2.4rem;
    }

    @media (max-width: 767px) {
      max-width: 24.2rem;
      margin-bottom: 1.6rem;
    }
  }

  &__category,
  &__text-date {
    display: flex;
    align-items: center;

    font-size: 1.8rem;
    line-height: 1.3;
    color: var(--easy-dark);

    @media (max-width: 1199px) {
      font-size: 1.6rem;
    }

    @media (max-width: 767px) {
      font-size: 1.4rem;
    }

    &::before {
      content: '';

      width: 1.2rem;
      height: 1.2rem;
      margin-right: 1.2rem;

      border-radius: 50%;
      border: 1px solid var(--easy-dark);

      @media (max-width: 1199px) {
        width: 1rem;
        height: 1rem;
        margin-right: 0.8rem;
      }
    }
  }

  .article__category::before {
    background-color: var(--easy-dark);
  }

  &__name {
    margin-bottom: 0.8rem;

    font-size: 1.8rem;
    line-height: 1.3;

    @media (max-width: 1199px) {
      font-size: 1.6rem;
      line-height: 1.25;
    }
  }

  &__text-content {
    flex-direction: column;
    gap: 2rem;
    max-width: 49rem;
    margin-bottom: 2rem;

    @media (max-width: 1199px) {
      gap: 1.6rem;
    }

    @media (max-width: 1023px) {
      gap: 1.2rem;
    }

    @media (max-width: 767px) {
      gap: 0.8rem;
    }

    p {
      font-size: 2rem;
      line-height: 1.2;

      @media (max-width: 1199px) {
        font-size: 1.8rem;
      }
    }

    &--text-bottomed {
      flex-grow: 1;
      margin-bottom: 0;

      p {
        margin-top: auto;
      }
    }

    &--title-bottomed {
      margin-bottom: 0;
      margin-top: auto;

      p {
        @media (max-width: 1199px) {
          font-size: 1.6rem;
        }
      }
    }
  }

  &__text-title {
    @extend %fs-h3;
    margin-bottom: 1.5rem;
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: auto;

    font-size: 1.8rem;
    line-height: 1.3;
    color: var(--dark);

    @media (max-width: 1199px) {
      font-size: 1.6rem;
      gap: 1.6rem;
    }

    svg {
      width: 0.8rem;
      height: 1rem;
    }
  }

  &__img-column {
    position: relative;

    width: 50%;

    border-radius: 2rem 0 0 2rem;
    background: #ccc;
    overflow: hidden;

    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 28rem;
      border-radius: 1.2rem;
    }
  }

  &__img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;

    img {
      position: absolute;

      width: 100%;
      height: 100%;
      flex-grow: 1;
      object-fit: cover;

      @media (max-width: 767px) {
        align-self: stretch;
      }
    }
  }
}
</style>