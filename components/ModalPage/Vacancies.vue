<template>
  <section class="career__vacancy">
    <div class="container">
      <div class="career__vacancy-header">
        <h2 class="career__vacancy-title section-title">{{pageProps.title}}</h2>
        <span class="career__vacancy-count">{{vacanciesData?.data.length}}</span>
      </div>
      <ul class="career__vacancy-list">
        <li
          v-for="vacancy of vacanciesData?.data"
          :key="vacancy.id"
          class="career__vacancy-item"
        >
          <router-link
            :to="`interactive/${vacancy.code}`"
            class="career__vacancy-link"
          >
            <h3 class="career__vacancy-item-title">{{vacancy.title}}</h3>
            <div class="svg-wrapper">
              <span class="career__vacancy-item-button">Подробнее</span>
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
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Vacancies',
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
    vacanciesData() {
      return this.interactiveData[this.pageProps.id]
    },
  },
}
</script>

<style lang="scss" scoped>
.career {
  &__vacancy {
    padding: 6rem 0;

    @media (max-width: 1599px) {
      padding: 5.6rem 0;
    }

    @media (max-width: 1199px) {
      padding: 5.2rem 0;
    }

    @media (max-width: 1023px) {
      padding: 4rem 0;
    }

    @media (max-width: 767px) {
      padding: 3.2rem 0;
    }
  }

  &__vacancy-header {
    display: flex;
    align-items: baseline;
    gap: 2rem;
    margin-bottom: 4rem;

    @media (max-width: 1599px) {
      margin-bottom: 3.6rem;
    }

    @media (max-width: 1199px) {
      margin-bottom: 3.2rem;
    }

    @media (max-width: 1023px) {
      margin-bottom: 2.8rem;
    }

    @media (max-width: 767px) {
      margin-bottom: 2rem;
    }
  }

  &__vacancy-title {
    margin: 0;
  }

  &__vacancy-count {
    font-size: 2rem;
    line-height: 1.2;
    color: var(--jack-grey);

    @media (max-width: 1199px) {
      font-size: 1.8rem;
      line-height: 1.3;
    }

    @media (max-width: 767px) {
      font-size: 1.4rem;
      line-height: 1.1;
    }
  }

  &__vacancy-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.4rem;

    @media (max-width: 1023px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  &__vacancy-item {
    display: flex;
  }

  &__vacancy-link {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 20rem;
    width: 100%;
    padding: 2.8rem;

    border-radius: 2rem;
    background-color: var(--grey);

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

      border-radius: 1.6rem;
    }

    @media (max-width: 767px) {
      min-height: 15.2rem;

      border-radius: 1.2rem;
    }
  }

  &__vacancy-item-title {
    max-width: 29rem;

    opacity: 0.9;

    font-weight: 400;
    font-size: 2rem;
    line-height: 1.4;
    color: var(--dark);

    @media (max-width: 1199px) {
      max-width: 26rem;

      font-size: 1.8rem;
      line-height: 1.3;
    }
  }

  &__vacancy-item-button {
    position: relative;

    font-size: 1.8rem;
    line-height: 1.3;

    @media (max-width: 1023px) {
      font-size: 1.6rem;
    }
  }
}

.svg-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
</style>