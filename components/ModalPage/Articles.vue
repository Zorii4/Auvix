<template>
  <section>
    <h2>Тут будет блок Статьи</h2>
    <!--<div class="academy__articles">
      <div class="container">
        <div class="academy__articles-header">
          <div class="section-header">
            <h2 class="section-header__title section-title">{{pageProps.title}}</h2>
             {{#if allLink}}
        <a class="header-link{{#if linkMod}} {{linkMod}}{{/if}}" href="{{link}}">
            <span class="header-link__text" >
                <span>{{{linkText}}}</span>
                <span>Все</span>
            </span>
            <svg>
                <use xlink:href="#slider-arrow"/>
            </svg>
        </a>
    {{/if}} 
                </div>
                <div class="articles">
    <ul class="articles__list">
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
    </ul>
</div> 
            </div>
        </div> -->
  </section>
</template>

<script>
export default {
  name: 'Articles',
  props: {
    pageProps: Object,
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