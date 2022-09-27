<template>
  <div>
    <div
      v-for="video of pageProps.video_cards"
      :key="video.id"
      class="news-single__video"
    >
      <iframe
        class="post-video"
        :src="video.url"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Videos',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.news-single {
  &__video {
    margin: 6rem 0 6rem 0;

    @media (max-width: 1599px) {
      margin-top: 4.8rem;
    }

    @media (max-width: 1199px) {
      margin-top: 4rem;
    }

    @media (max-width: 1023px) {
      margin-top: 3.6rem;
    }

    @media (max-width: 767px) {
      margin-top: 3.2rem;
    }
  }
  .post-video {
    width: 100%;
    min-height: 28rem;
    aspect-ratio: 986 / 520;
    border-radius: 1.6rem;
  }
}
</style>