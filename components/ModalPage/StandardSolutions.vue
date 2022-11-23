<template>
  <section class="index__decisions">
    <div class="wide-container">
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
      <SolutionsBlocksRubrics
        v-if="pageProps.size === 'rubrics'"
        :solutionsData="dateSort"
      />
      <SolutionsBlocksTileWithPagination
        v-if="pageProps.size === 'tile' && pageProps.entire_block_as_slider"
        :solutionsData="dateSort"
        :pageProps="pageProps"
      />
      <SolutionsBlocksTileWithoutPagination
        v-if="pageProps.size === 'tile' && !pageProps.entire_block_as_slider"
        :solutionsData="dateSort"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'StandartSolutions',
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
    solutionsData() {
      return this.interactiveData[this.pageProps.id]
    },
    dateSort() {
      return this.solutionsData?.data
        .map((el) => el)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    },
  },
}
</script>

<style lang="scss" scoped>
.index__decisions {
  padding-bottom: 6rem;

  @media (max-width: 1599px) {
    padding-bottom: 5.6rem;
  }

  @media (max-width: 1199px) {
    padding-bottom: 5.2rem;
  }

  @media (max-width: 1023px) {
    padding-bottom: 4.8rem;
  }

  @media (max-width: 767px) {
    padding-bottom: 4rem;
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
    width: 24rem;
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