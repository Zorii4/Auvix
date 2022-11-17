<template>
  <section class="articles-single__news">
    <div class="articles-single__news-header">
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
              fill="white"
            />
          </svg>
        </CommonAnchor>
      </div>
      <NewsBlocksHeaderNews
        :title="pageProps.title"
        :link_url="pageProps.link_url"
        :link_title="pageProps.link_title"
      />
    </div>
    <NewsBlocksSmallNews
      :dark='true'
      :newsData='newsData'
    />
    <!-- {{> news mod='news--dark news--large-img-shortened' }} -->
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NewsArticles',
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
    newsData() {
      return this.interactiveData[this.pageProps.id]
    },
  },
}
</script>

<style lang="scss" scoped>
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