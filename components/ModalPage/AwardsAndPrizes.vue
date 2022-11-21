<template>
  <section class="about__awards">
    <div class="container">
      <ul class="three-card-list">
        <li
          v-for="el of pageProps.news"
          :key="el.id"
          class="three-card-list__wrapper"
        >
          <router-link
            :to="`interactive/${el.code}`"
            class="three-card-list__item"
          >
            <!-- <div class="three-card-list__item-link"> -->
            <div class="three-card-list__item-content">
              <!-- <time class="three-card-list__item-date">{{el.date | formatData('toYear')}}</time> -->
              <p>NULL</p>
              <p>{{el.title}}</p>
            </div>
            <div class="three-card-list__item-img">
              <img
                :src="$config?.baseURLImg + el.preview_image_url"
                alt="Фото награды"
              >
            </div>
            <!-- </div> -->
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AwardsAndPrizes',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.about {
  &__awards {
    padding-bottom: 8rem;

    @media (max-width: 1599px) {
      padding-bottom: 7.2rem;
    }

    @media (max-width: 1199px) {
      padding-bottom: 6.4rem;
    }

    @media (max-width: 1023px) {
      padding-bottom: 5.6rem;
    }

    @media (max-width: 767px) {
      padding-bottom: 4.8rem;
    }
  }
}

.three-card-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.4rem;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  &__item {
    position: relative;

    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    min-height: 20rem;
    padding: 2.8rem;

    background: var(--extra-light-gray);
    border-radius: 2rem;

    @media (max-width: 1599px) {
      padding: 2.4rem;
    }

    @media (max-width: 1199px) {
      min-height: 18rem;
      padding: 2rem;
    }

    @media (max-width: 1023px) {
      min-height: 15.6rem;
      padding: 1.6rem;
    }

    @media (max-width: 767px) {
      min-height: 15.2rem;
    }
  }

  &__item-link {
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;
  }

  &__item-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.2rem;

    p {
      max-width: 31.1rem;

      font-size: 1.8rem;
      line-height: 1.3;

      @media (max-width: 1599px) {
        max-width: 27.9rem;
      }

      @media (max-width: 1199px) {
        max-width: 24.3rem;

        font-size: 1.6rem;
        line-height: 1.25;
      }

      @media (max-width: 767px) {
        max-width: 26rem;
      }
    }
  }

  &__item-date {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    font-size: 1.8rem;
    line-height: 1.3;
    color: var(--jack-grey);

    @media (max-width: 1199px) {
      gap: 0.8rem;
      font-size: 1.6rem;
    }

    @media (max-width: 767px) {
      font-size: 1.4rem;
    }

    &::before {
      content: '';

      width: 1.2rem;
      height: 1.2rem;

      border: 1px solid var(--jack-grey);
      border-radius: 50%;

      @media (max-width: 1199px) {
        width: 0.8rem;
        height: 0.8rem;
      }
    }
  }

  &__item-img {
    position: absolute;
    top: 2.8rem;
    right: 2.8rem;

    display: flex;
    justify-content: center;
    justify-self: flex-end;
    align-items: center;
    width: 10.4rem;
    aspect-ratio: 1 / 1;

    border-radius: 50%;
    background: linear-gradient(212.35deg, #f0f1f5 7.66%, #ffffff 75.91%);

    @media (max-width: 1599px) {
      top: 2.4rem;
      right: 2.4rem;

      width: 8.8rem;
    }

    @media (max-width: 1199px) {
      top: 2rem;
      right: 2rem;

      width: 8rem;
    }

    @media (max-width: 1023px) {
      top: 1.6rem;
      right: 1.6rem;
    }

    @media (max-width: 767px) {
      width: 7.2rem;
    }

    img {
      aspect-ratio: 1 / 1;
      object-fit: cover;
    }
  }
}
</style>