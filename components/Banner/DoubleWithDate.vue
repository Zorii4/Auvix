<template>
  <div class="article__inner">
    <div
      class="article__text-column"
      :style="{backgroundColor: `${bannerProp.background_color}`}"
    >
      <div class="article__text-header">
        <p class="article__text-date">{{dateFormat}}</p>
        <span>{{bannerProp.time}} /мск</span>
        <span class="article__category">{{bannerProp.tag}}</span>
      </div>
      <div class="article__text-content">
        <h3 class="article__text-title">{{bannerProp.title}}</h3>
      </div>
      <NuxtLink
        class="article__button button"
        :to="bannerProp.button_link"
      >{{bannerProp.button_title}}</NuxtLink>
    </div>
    <div class="article__img-column">
      <div class="article__img-wrapper">
        <img :src="bannerProp.cover_image">
      </div>
    </div>
  </div>
</template>

<script>
import { DateTime } from 'luxon'

export default {
  name: 'BannerDoubleWithDate',
  props: {
    bannerProp: Object,
  },
  computed: {
    dateFormat() {
      const d = new Date(this.bannerProp.date).toISOString()
      return DateTime.fromISO(d).setLocale('ru').toFormat('dd MMMM, EEEE')
    },
  },
}
</script>
<style lang="scss" scoped>
.article__inner {
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

.article__text-column {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 5.2rem;
  border-radius: 2rem;

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

.article__text-header {
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

.article__text-date,
.article__category {
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

    background-color: var(--jack-grey);
    border-radius: 50%;
  }

  @media (max-width: 1199px) {
    width: 1rem;
    height: 1rem;
    margin-right: 0.8rem;
  }
}

.article__text-content {
  display: flex;
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
}

.article__text-title {
  @extend %fs-h3;
}

.article__button {
  position: relative;
  z-index: 2;
  width: fit-content;
  display: inline-block;
  justify-self: flex-end;
  padding: 1.6rem 4rem;
  margin-top: auto;

  @media (max-width: 1023px) {
    padding: 1.6rem 3.2rem;
    font-size: 1.6rem;
  }
}

.article__img-column {
  position: relative;
  width: 50%;
  border-radius: 2rem;
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

.article__img-wrapper {
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
</style>