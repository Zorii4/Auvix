<template>
  <nuxt-link
    class="search-panel__useful-item"
    :class="{'search-panel__useful-item--none-img': !article.preview_image_url}"
    :to="`/interactive/${article.code}`"
  >
    <div class="search-panel__useful-img">
      <img
        :src="$config.baseURLImg + article.preview_image_url"
        alt="Фото поста"
      >
    </div>
    <div class="search-panel__useful-content">
      <p class="search-panel__useful-text">{{article.title}}</p>
      <div class="search-panel__useful-content-footer">
        <time class="search-panel__useful-date">{{calculatedDate}}</time>
        <span class="search-panel__useful-category">{{computedArticleType}}</span>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { DateTime } from 'luxon'
import { articleTypesList } from '@/utils/articleTypes'

export default {
  name: 'SearchCardArticle',

  props: {
    article: {
      type: Object,
      required: true,
    },
  },

  computed: {
    computedArticleType() {
      return articleTypesList[this.article.type]
    },

    calculatedDate() {
      return DateTime.fromISO(
        new Date(this.article.date).toISOString()
      ).toLocaleString({
        month: 'long',
        day: 'numeric',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.search-panel {
  &__useful-item {
    display: grid;
    grid-template-columns: 6rem 1fr auto;
    align-items: center;
    gap: 1.6rem;

    font-size: 1.6rem;
    line-height: 1.25;

    @media (max-width: 767px) {
      font-size: 1.4rem;
    }

    &--none-img {
      grid-template-columns: 1fr auto;
    }
  }

  &__useful-img {
    border-radius: 1.2rem;
    overflow: hidden;

    img {
      aspect-ratio: 1 / 1;
    }
  }

  &__useful-text {
    margin-bottom: 1.2rem;

    @media (max-width: 767px) {
      margin-bottom: 0.8rem;
    }
  }

  &__useful-content-footer {
    display: flex;
    align-items: center;
    gap: 2.4rem;
    line-height: 100%;

    @media (max-width: 767px) {
      gap: 1.2rem;
    }
  }

  &__useful-date {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    color: var(--jack-grey);

    &::before {
      content: '';

      width: 1.2rem;
      height: 1.2rem;

      border-radius: 50%;
      border: 1px solid var(--jack-grey);

      @media (max-width: 767px) {
        width: 1rem;
        height: 1rem;
      }
    }
  }

  &__useful-time {
    color: var(--jack-grey);
  }

  &__useful-category {
    color: var(--jack-grey);

    @media (max-width: 767px) {
      display: none;
    }
  }
}
</style>