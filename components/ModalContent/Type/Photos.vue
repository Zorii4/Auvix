<template>
  <div class="articles-single__double-img">
    <div class="container">
      <div class="double-img">
        <div
          v-for="item of pageProps.image_cards"
          :key="item.id"
          class="double-img__item"
        >
          <img
            :src="$config.baseURLImg + item.image_url"
            alt="Фото"
          >
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Photos',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.double-img {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.4rem;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 767px) {
      gap: 1.2rem;
    }

    img {
      width: 100%;
      aspect-ratio: 738 / 492;
      object-fit: cover;
      border-radius: 2rem;
    }

    span {
      font-size: 1.6rem;
      line-height: 1.25;
      color: var(--jack-grey);
    }
  }
}
</style>