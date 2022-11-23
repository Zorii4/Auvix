<template>
  <div class="events-single__speakers">
    <div class="speakers">
      <ul class="speakers__list">
        <li
          v-for="item of pageProps.table.rows"
          :key="item.id"
          class="speakers__item"
        >
          <div class="speakers__item-img">
            <img
              :src="$config.baseURLImg + item.image_url"
              alt="Фото спикера"
            >
          </div>
          <div class="speakers__item-text">
            <span class="speakers__item-name">{{item.person_name}}</span>
            <p class="speakers__item-position">{{item.person_occupation}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Persons',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.events-single {
  &__speakers {
    margin: 6rem 0;

    @media (max-width: 1599px) {
      margin: 4.8rem 0;
    }

    @media (max-width: 1199px) {
      margin: 4rem 0;
    }

    @media (max-width: 1023px) {
      margin: 3.6rem 0;
    }

    @media (max-width: 767px) {
      margin: 3.2rem 0;
    }
  }
}

.speakers {
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 1199px) {
      grid-template-columns: 1fr;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 2.8rem;
    padding: 4.8rem 0;

    border-top: 1px solid var(--grey);
    border-bottom: 1px solid var(--grey);

    @media (max-width: 1599px) {
      padding: 4rem 0;
      gap: 2rem;
    }

    @media (max-width: 1199px) {
      padding: 2.4rem 0;
      border-bottom: 0;

      &:last-child {
        border-bottom: 1px solid var(--grey);
      }
    }

    @media (max-width: 1023px) {
      padding: 2rem 0;
    }

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: stretch;
      gap: 1.2rem;
    }

    &:nth-child(2n + 1) {
      padding-right: 2rem;

      @media (max-width: 1199px) {
        padding-right: 0;
      }
    }
  }

  &__item-img {
    flex-shrink: 0;
    width: 8rem;

    @media (max-width: 1199px) {
      width: 7.2rem;
    }

    @media (max-width: 767px) {
      width: 7.6rem;
    }

    img {
      width: 100%;
      border-radius: 50%;
      aspect-ratio: 1 / 1;
    }
  }

  &__item-name {
    display: inline-block;
    margin-bottom: 0.8rem;

    font-size: 1.8rem;
    line-height: 1.3;

    @media (max-width: 1199px) {
      font-size: 1.6rem;
    }
  }

  &__item-position {
    font-size: 1.6rem;
    line-height: 1.25;
    color: var(--jack-grey);

    @media (max-width: 1199px) {
      font-size: 1.4rem;
    }
  }
}
</style>