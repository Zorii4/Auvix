<template>
  <section>
    <ul
      class="news"
      :class="{'large-reversed':pageProps.accent_news === 'right' }"
    >
      <li
        class="news__item-wrapper"
        v-for="news of newsData?.data?.slice(0, pageProps?.limit)"
        :key="news.id"
      >
        <router-link
          class="news__item"
          :to="`news/${news.code}`"
        >
          <div class="news__item-content">
            <time class="news__item-time">{{news.last_published_at | formatData('fullData')}}</time>
            <p>{{news.title}}</p>
          </div>
          <div
            v-if="news.preview_image_url"
            class="news__item-img"
          >
            <img
              :src="($config?.baseURLImg + news.preview_image_url) || '~/assets/img/default.png'"
              alt="Фото новости"
            >
          </div>
          <div
            v-if="!news.preview_image_url"
            class="news__item-img"
          >
            <img
              src="~/assets/img/default.png"
              alt="Фото новости"
            >
          </div>
        </router-link>
      </li>
    </ul>
    <!-- <button
      v-if="pageProps.show_more_button"
      class="more-button"
    >Показать еще <span>&nbsp; {{pageProps.limit}}</span></button> -->
  </section>
</template>

<script>
export default {
  name: 'LargeNews',
  props: {
    newsData: Object,
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.news {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.4rem;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }

  &.large-reversed {
    li:nth-child(-n + 3) {
      order: -2;
    }

    li:nth-child(1) {
      order: -1;
    }
  }

  &__item-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;

    @media (max-width: 1023px) {
      grid-column: span 2;
    }
  }

  &__item {
    position: relative;

    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 48rem;
    height: 100%;
    padding: 2.8rem 0.8rem 0.8rem;

    border-radius: 20px;
    background-color: var(--light-grey);
    overflow: hidden;

    @media (max-width: 1599px) {
      min-height: 40rem;
    }

    @media (max-width: 1199px) {
      min-height: 32rem;
    }

    @media (max-width: 767px) {
      padding: 1.6rem;
      min-height: auto;
    }

    &:hover {
      opacity: 1;

      img {
        transform: scale(1.2);
      }
    }
  }

  li:nth-child(1) {
    grid-column: span 2;

    @media (max-width: 1023px) {
      grid-column: span 4;
      min-height: 30rem;
    }

    @media (max-width: 767px) {
      min-height: 21.6rem;
    }

    & .news__item {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      @media (max-width: 767px) {
        height: 100%;
        padding: 10rem 0.4rem 0.4rem;
      }
    }

    .news__item-content {
      position: relative;
      z-index: 1;

      flex-grow: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 2rem;
      max-width: 48.3rem;
      min-height: 20.8rem;
      padding: 2.8rem 2.8rem 2.4rem;
      margin-bottom: 0;

      border-radius: 1.6rem;
      background-color: #fff;

      @media (max-width: 1599px) {
        max-width: 39.7rem;
      }

      @media (max-width: 1199px) {
        max-width: 31.5rem;
        min-height: 18.4rem;
      }

      @media (max-width: 1023px) {
        padding: 2rem;
        max-width: 35.4rem;
        min-height: 17.6rem;
      }

      @media (max-width: 767px) {
        min-height: auto;
        max-width: none;
        width: 100%;
      }
    }

    .news__item-img {
      position: absolute;
      left: 0;
      top: 0;

      display: block;
      width: 100%;
      height: 100%;
      max-height: none;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  &__item-content {
    height: auto;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 0 2rem 2.4rem;
    margin-bottom: auto;

    @media (max-width: 1599px) {
      padding-bottom: 2rem;
    }

    @media (max-width: 767px) {
      padding: 0;
    }

    time {
      display: flex;
      align-items: center;
      margin-bottom: auto;

      font-size: 1.8rem;
      line-height: 1.3;
      color: var(--jack-grey);

      @media (max-width: 1199px) {
        font-size: 1.7rem;
      }

      @media (max-width: 767px) {
        font-size: 1.4rem;
      }

      &::before {
        content: '';

        width: 1.2rem;
        height: 1.2rem;
        margin-right: 1.2rem;

        border: 1px solid #5b5e66;
        border-radius: 50%;

        @media (max-width: 1199px) {
          width: 1rem;
          height: 1rem;
          margin-right: 0.8rem;
        }
      }
    }

    p {
      margin-bottom: 2rem;

      @extend %fs-t3;

      @media (max-width: 1199px) {
        font-size: 1.8rem;
      }

      @media (max-width: 767px) {
        font-size: 1.6rem;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  &__item-img {
    overflow: hidden;
    border-radius: 1.6rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.4s;
    }

    @media (max-width: 1023px) {
      max-height: 13.2rem;
    }

    @media (max-width: 767px) {
      display: none;
    }
  }

  &__item-button {
    position: absolute;
    bottom: 1.6rem;
    left: 2rem;

    width: 5.6rem;
    height: 3.6rem;

    border-radius: 2rem;
    // background: var(--grey) url('../img/icons/photo-icon.svg') no-repeat center;
    background-size: 2.4rem 2.4rem;

    @media (max-width: 767px) {
      display: none;
    }
  }

  &--dark {
    .news__item {
      background-color: var(--easy-dark);
      color: #fff;
    }

    .news__item-time {
      color: rgba(255, 255, 255, 0.75);

      &::before {
        border-color: rgba(255, 255, 255, 0.75);
      }
    }

    li:first-child {
      .news__item {
        color: var(--dark);
      }

      .news__item-time {
        color: var(--jack-grey);

        &::before {
          border-color: var(--jack-grey);
        }
      }
    }
  }

  &--large-img-shortened {
    li:first-child {
      .news__item {
        justify-content: flex-end;
        align-items: stretch;
        padding-top: 0.8rem;
        color: #fff;
      }

      .news__item-content {
        max-width: none;
        width: 100%;
        padding: 2.8rem 2rem 2.4rem;
        background: var(--easy-dark);

        @media (max-width: 1599px) {
          padding: 2.8rem 2rem 2rem;
        }

        @media (max-width: 1199px) {
          padding: 2rem;
        }

        @media (max-width: 1023px) {
          padding: 1.6rem 1.2rem 1.2rem;
        }

        @media (max-width: 767px) {
          padding: 0.8rem 0.8rem 1.2rem;
        }

        p {
          max-width: 40.3rem;
        }
      }

      .news__item-time {
        color: rgba(255, 255, 255, 0.75);

        &::before {
          border-color: rgba(255, 255, 255, 0.75);
        }
      }

      .news__item-img {
        position: static;

        order: -1;
        max-height: 26.4rem;

        border-radius: 1.6rem;

        @media (max-width: 767px) {
          order: 1;
          max-height: 13.2rem;
        }
      }
    }
  }
}

.more-button {
  width: 100%;
  justify-content: center;
  padding: 1.6rem;
  margin-top: 1.2rem;

  border: 1px solid var(--border-grey);
  border-radius: 1.2rem;

  font-size: 1.8rem;
  line-height: 1.3;

  @media (max-width: 1023px) {
    font-size: 1.6rem;
  }
}
</style>