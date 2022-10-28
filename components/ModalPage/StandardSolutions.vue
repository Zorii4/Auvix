<template>
  <section class="index__decisions">
    <div class="container">
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
      <SolutionsBlocksRubrics
        v-if="pageProps.size === 'rubrics'"
        :solutionsData="solutionsData"
      />
      <SolutionsBlocksTile
        v-if="pageProps.size === 'tile'"
        :solutionsData="solutionsData"
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
  fetch() {
    return this.$store.dispatch(
      'interactive/getInteractiveData',
      this.pageProps.id
    )
  },
  computed: {
    ...mapState({
      solutionsData: (state) => state.interactive?.interactiveData,
    }),
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
.section-header {
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
</style>