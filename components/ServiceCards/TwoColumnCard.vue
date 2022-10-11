<template>
  <div>
    <ul class="services-list">
      <li
        class="services-list__item"
        v-for="item of pageProps.service_items"
        :key="item.id"
        :style="{backgroundColor: `${item.background_color}`}"
      >
        <CommonAnchor
          :to="item.link_url"
          :className="'services-list__item-link'"
        >
          <h2 class="services-list__item-title">{{item.title}}</h2>
          <span
            class="services-list__item-more"
            v-if="item.link_url"
          >{{item.link_name}}
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
          <p
            class="services-list__item-text"
            v-if="!item.link_url"
          >{{item.description}}</p>
        </CommonAnchor>
        <img
          class="services-list__item-img"
          :src="$config.baseURLImg + item.image_url"
          :alt="`Услуга ${item.image_alt}`"
        >
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'TwoColumnCard',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.services-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.4rem;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }

  &__item {
    position: relative;
    height: 100%;
    min-height: 27rem;
    border-radius: 2rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 4rem;

    @media (max-width: 1599px) {
      padding: 3.2rem;
    }

    @media (max-width: 1199px) {
      min-height: 21.6rem;
      padding: 2.4rem;
    }

    @media (max-width: 1023px) {
      min-height: 20rem;
      border-radius: 1.6rem;
    }

    @media (max-width: 767px) {
      min-height: 16rem;
      padding: 1.2rem 1.2rem 1.6rem;

      border-radius: 1.2rem;
    }

    &:hover {
      opacity: 1;

      img {
        transform: scale(1.2);
      }
    }
  }

  &__item-title {
    max-width: 34rem;

    font-weight: 400;
    font-size: 2.8rem;
    line-height: 1.1;

    @media (max-width: 1599px) {
      max-width: 29rem;
    }

    @media (max-width: 1199px) {
      max-width: 30rem;

      font-size: 2.4rem;
      line-height: 1.2;
    }

    @media (max-width: 1023px) {
      max-width: 43rem;
    }

    @media (max-width: 767px) {
      max-width: 21rem;

      font-size: 1.6rem;
      line-height: 1.25;
    }
  }

  &__item-more {
    position: relative;
    z-index: 1;

    display: flex;
    align-items: center;
    gap: 2rem;

    font-size: 1.8rem;
    line-height: 1.3;

    @media (max-width: 1199px) {
      gap: 1.6rem;

      font-size: 1.6rem;
      line-height: 1.25;
    }

    @media (max-width: 767px) {
      gap: 1.2rem;
    }
  }

  &__item-text {
    position: relative;
    z-index: 1;

    max-width: 38rem;

    font-size: 2rem;
    line-height: 1.4;
    color: var(--jack-grey);

    @media (max-width: 1199px) {
      max-width: 30rem;

      font-size: 1.8rem;
      line-height: 1.3;
    }

    @media (max-width: 1023px) {
      max-width: 36rem;
    }

    @media (max-width: 767px) {
      max-width: 28rem;

      font-size: 1.4rem;
      line-height: 1.1;
    }
  }

  &__item-img {
    position: absolute;
    right: 0;
    bottom: -7rem;

    width: 34.4rem;
    height: 34rem;

    transition: 0.3s;

    @media (max-width: 1599px) {
      width: 28.8rem;
      height: 28.4rem;

      bottom: -1.4rem;
    }

    @media (max-width: 1199px) {
      width: 22.8rem;
      height: 22.4rem;

      bottom: -0.8rem;
    }

    @media (max-width: 1023px) {
      width: 27.6rem;
      height: 27.6rem;

      bottom: -7.6rem;
    }

    @media (max-width: 767px) {
      width: 16rem;
      height: 16rem;

      bottom: 0;
    }
  }
}
</style>