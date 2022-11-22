<template>
  <ul
    :class="{dark: 'news-dark'}"
    class="news"
  >
    <li
      class="news__item-wrapper"
      v-for="news of newsData?.data?.slice(0,3)"
      :key="news.id"
    >
      <router-link
        class="news__item"
        :to="`/interactive/${news.code}`"
      >
        <div class="news__item-content">
          <time class="news__item-time">{{news.last_published_at | formatData('fullData')}}</time>
          <p>{{news.title}}</p>
        </div>
        <div
          class="news__item-img"
          v-if="news.preview_image_url"
        >
          <img
            :src="$config?.baseURLImg + news.preview_image_url"
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
</template>

<script>
export default {
  name: 'SmallNews',
  props: {
    newsData: Object,
    dark: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.news {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.4rem;
  margin-bottom: 5rem;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }

  &--large-reversed {
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

  &__item-header {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: auto;

    @media (max-width: 1599px) {
      gap: 1rem;
    }

    @media (max-width: 1199px) {
      flex-direction: column;
      align-items: flex-start;
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
}

.news-dark {
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
}
</style>