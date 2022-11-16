<template>
  <section class="articles-single__news">
    <div class="articles-single__news-header">
      <!-- {{> section-header title='Читайте также' allLink=true linkText='Все новости' }} -->
      news_and_articles
    </div>
    <!-- {{> news mod='news--dark news--large-img-shortened' }} -->
  </section>
</template>

<script>
export default {
  name: 'NewsArticles',
  props: {
    pageProps: Object,
  },
}
</script>