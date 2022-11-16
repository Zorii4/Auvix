<template>
  <div class="articles-single__black-container">
    <div class="wide-container wide-container--without-max-width">
      <div class="articles-single__black-container-inner">
        <div class="container container--without-padding">
          <UsefulBlocksTrainingEvents
            v-if="pageProps.size === 'training_n_events'"
            pageProps='pageProps'
          />
          <UsefulBlocksNewsArticles
            v-if="pageProps.size === 'news_and_articles'"
            pageProps='pageProps'
          />
          <UsefulBlocksTrainingEventsArticles
            v-if="pageProps.size === 'training_n_events_and_articles'"
            pageProps='pageProps'
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'UsefulMaterials',
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
    usefulData() {
      return this.interactiveData[this.pageProps.id]
    },
    dateSort() {
      return this.usefulData?.data
        .map((el) => el)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    },
  },
}
</script>

<style lang="scss" scoped>
.articles-single {
  &__black-container {
    padding-bottom: 0.8rem;
    color: #fff;
  }

  &__black-container-inner {
    padding: 6rem 5.2rem 5.2rem;

    border-radius: 2rem;
    background: var(--dark);

    @media (max-width: 1599px) {
      padding: 5.6rem 2rem;
    }

    @media (max-width: 1199px) {
      padding: 5.2rem 2rem;
    }

    @media (max-width: 1023px) {
      padding: 4.8rem 1.6rem;
      border-radius: 1.6rem;
    }

    @media (max-width: 767px) {
      padding: 4rem 1.6rem;
      border-radius: 1.2rem;
    }
  }
}
</style>