<template>
  <div class="decisions">
    <router-link
      v-for="item of solutionsData"
      :key="item.id"
      :to="`/interactive/${item.code}`"
      class="decisions__item"
    >
      <div class="decisions__item-img">
        <img
          class="lazyload"
          :src="$config?.baseURLImg + item.preview_image_url"
          alt="Фото решения"
        >
      </div>
      <div class="decisions__item-content">
        <div class="decisions__item-top">
          <h3 class="decisions__item-title">{{item.title}}</h3>
          <span class="decisions__item-button">
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
          </span>
        </div>
        <p class="decisions__item-text">{{item.short_description}}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Rubrics',
  props: {
    solutionsData: Array,
  },
}
</script>

<style lang="scss" scoped>
.decisions {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.4rem;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }

  &__item {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.4rem;

    cursor: pointer;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  &__item-img {
    width: 14.4rem;
    height: 100%;
    aspect-ratio: 1 / 1;

    border-radius: 2rem;
    overflow: hidden;

    @media (max-width: 1599px) {
      width: 13.6rem;
    }

    @media (max-width: 1199px) {
      width: 11.6rem;
    }

    @media (max-width: 767px) {
      display: none;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__item-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.6rem 3.2rem;
    gap: 0.8rem;

    background-color: var(--grey);
    border-radius: 2rem;

    @media (max-width: 1599px) {
      padding: 1.6rem 2.8rem;
    }

    @media (max-width: 1199px) {
      padding: 1.6rem 2.4rem;
      gap: 1.2rem;
    }

    @media (max-width: 767px) {
      padding: 2rem;
      border-radius: 1.2rem;
    }
  }

  &__item-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  &__item-title {
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 1.2;

    @media (max-width: 1199px) {
      font-size: 2rem;
    }

    @media (max-width: 767px) {
      font-size: 1.8rem;
    }
  }

  &__item-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5.6rem;
    height: 3.6rem;

    border-radius: 2rem;
    border: 1px solid var(--border-grey);

    @media (max-width: 767px) {
      width: 5rem;
      height: 3.2rem;
    }

    svg {
      width: 0.8rem;
      height: 1rem;
    }
  }

  &__item-text {
    font-size: 1.6rem;
    line-height: 1.25;
    color: var(--jack-grey);

    @media (max-width: 1199px) {
      font-size: 1.4rem;
    }
  }
}
</style>