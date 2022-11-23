<template>
  <section>
    <div class="academy__articles">
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
              :to="'#'"
              :className="'header-link'"
              class="header-link__text"
            > NULL
              <!-- {{pageProps.link_title}} -->
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
        <div class="articles">
          <!--   <ul class="articles__list">
        {{#each data}}
            <li>
                <a class="articles__item" href="/articles-single.html">
                    <div class="articles__item-content">
                        <div class="articles__item-header">
                            <time class="articles__item-date" datetime="2021-09-15">{{this.date}}</time>
                            <span>{{this.category}}</span>
                        </div>
                        <h4>{{this.title}}</h4>
                    </div>
                    <div class="articles__item-img">
                        <img src="{{this.image}}" alt="Фото статьи">
                    </div>
                </a>
            </li>
        {{/each}}
    </ul> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Articles',
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
    articlesData() {
      return this.interactiveData[this.pageProps.id]
    },
  },
}
</script>

<style lang="scss" scoped>
.academy__articles {
  padding-bottom: 6.8rem;

  @media (max-width: 1599px) {
    padding-bottom: 5.6rem;
  }

  @media (max-width: 1199px) {
    padding-bottom: 4.8rem;
  }

  @media (max-width: 1023px) {
    padding-bottom: 4rem;
  }

  @media (max-width: 767px) {
    padding-bottom: 3.2rem;
  }
}

.academy__articles-header {
  padding-bottom: 4rem;

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
</style>