<template>
  <section class="news__section">
    <div class="academy__news">
      <div class="container">
        <div class="academy__news-header">
          <div class="section-header">
            <h2
              v-if="pageProps.title"
              class="section-header__title section-title"
            >
              {{pageProps.title}}
            </h2>
            <CommonAnchor
              v-if="pageProps.link_url"
              :to="pageProps.link_url"
              :className="'header-link'"
              class="header-link__text"
            >
              {{pageProps.link_title}}
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
            </CommonAnchor>
          </div>
        </div>
        <NewsBlocksSmallNews
          v-if="pageProps.size === 'small'"
          :newsData="newsData"
        />

        <NewsBlocksLargeNews
          v-if="pageProps.size === 'large'"
          :newsData="newsData"
          :pageProps="pageProps"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'News',
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
    newsData() {
      return this.$store.state.interactive?.interactiveData[this.idNumber]
    },
    idNumber() {
      return Number(this.pageProps.id)
    },
  },
}
</script>

<style lang="scss" scoped>
.news__section {
  margin-bottom: 6rem;
}

.academy__news {
  padding-top: 5.2rem;

  @media (max-width: 1599px) {
    padding-top: 4.8rem;
  }

  @media (max-width: 1199px) {
    padding-top: 4rem;
  }

  @media (max-width: 1023px) {
    padding-top: 3.6rem;
  }

  @media (max-width: 767px) {
    padding-top: 3.2rem;
  }
}

.academy__news-header {
  padding: 0 0 4rem;

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
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  &__title {
    margin: 0;
  }
}

.header-link__text {
  span:last-child {
    display: none;
  }

  @media (max-width: 767px) {
    span:first-child {
      display: none;
    }

    span:last-child {
      display: block;
    }
  }

  svg {
    width: 0.8rem;
    height: 1rem;
  }

  &:hover {
    color: var(--jack-grey) !important;
  }

  &:active {
    color: var(--easy-dark) !important;
  }
}
</style>