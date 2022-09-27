<template>
  <section class="services-single__warranty">
    <div v-if="!pageProps.use_slider">
      <div class="services-single__warranty-header">
        <SectionLead
          :title="pageProps.title"
          :sub_title="pageProps.sub_title"
          :description="pageProps.description"
        />
      </div>
    </div>

    <CardSwiper
      v-if="pageProps.use_slider"
      :slides="pageProps"
    />

    <TwoColumnCard
      v-if="pageProps.column_type === '2-col'"
      :pageProps="pageProps"
    />

    <div
      v-if="pageProps.column_type === '4-col'"
      class="products"
    >
      <div class="products__inner">

        <ul
          v-if="!pageProps.use_slider"
          class="products__list"
        >
          <li
            v-for="item of pageProps.service_items"
            :key="item.id"
            class="products__item-wrapper"
            :style="{backgroundColor: `${item.background_color}`}"
          >
            <CommonAnchor
              :className="'service-card-item'"
              :to="item.link_url"
              class="service__anchor-link"
            >
              <h3 class="products__item-title">{{item.title}}</h3>
              <span class="products__item-link">
                {{item.link_name}}
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
              <div
                class="products__decor"
                :style="{backgroundImage: `url(${$config.baseURLImg}`+`${item.image_url})`}"
              >
              </div>
            </CommonAnchor>
          </li>
        </ul>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  /* eslint-disable */
  name: 'Service',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.services-single {
  &__warranty {
    padding-bottom: 8rem;

    @media (max-width: 1599px) {
      padding-bottom: 7.2rem;
    }

    @media (max-width: 1199px) {
      padding-bottom: 6.4rem;
    }

    @media (max-width: 1023px) {
      padding-bottom: 5.6rem;
    }

    @media (max-width: 767px) {
      padding-bottom: 4.8rem;
    }
  }

  &__warranty-header {
    margin-bottom: 6rem;

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
}

.products {
  position: relative;
  margin-bottom: 30px;

  &__inner {
    overflow: hidden;

    @media (max-width: 1023px) {
      margin-right: -2rem;
    }
  }

  &__list {
    display: flex;
    gap: 4px 4px;
    flex-wrap: wrap;
  }

  &__item-wrapper {
    width: 36.7rem;
    border-radius: 1.6rem;

    @media (max-width: 1599px) {
      max-width: 30.3rem;
    }

    @media (max-width: 1199px) {
      max-width: 24.1rem;
    }

    @media (max-width: 1023px) {
      max-width: 27rem;
    }

    @media (max-width: 767px) {
      max-width: 15.8rem;
    }
  }

  &__item {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 48.8rem;
    padding: 4rem 2.8rem 2.8rem;

    border-radius: 1.6rem;
    overflow: hidden;

    @media (max-width: 1599px) {
      min-height: 40.8rem;
      padding: 3.2rem 2.4rem 2.4rem;
    }

    @media (max-width: 1199px) {
      min-height: 32.4rem;
      padding: 2.8rem 2.4rem 2.4rem;
    }

    @media (max-width: 1023px) {
      min-height: 36.4rem;
    }

    @media (max-width: 767px) {
      min-height: 16rem;
      padding: 1.2rem;
    }

    &:hover {
      opacity: 1;

      span {
        padding-left: 10px;
      }
    }

    div {
      transition: 0.4s;
    }

    &:hover div {
      transform: scale(1.2);
    }
  }

  &__item-title {
    font-weight: 400;
    font-size: 2.4rem;
    color: var(--easy-dark);
    line-height: 1.2;

    @media (max-width: 1199px) {
      font-size: 2rem;
    }

    @media (max-width: 767px) {
      font-size: 1.6rem;
    }
  }

  &__item-link {
    position: relative;
    z-index: 10;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 1.8rem;
    line-height: 1.3;

    transition: 0.4s;

    @media (max-width: 1199px) {
      font-size: 1.6rem;
    }

    @media (max-width: 767px) {
      opacity: 0;
    }

    svg {
      width: 0.8rem;
      height: 1rem;
    }
  }

  &__decor {
    position: absolute;
    pointer-events: none;
    background-repeat: no-repeat;
    background-size: cover;
    width: 300px;
    height: 300px;
    right: 0;
    bottom: 0;
  }

  &__navigation {
    position: absolute;
    right: 0;
    bottom: calc(100% + 4rem);

    @media (max-width: 1599px) {
      bottom: calc(100% + 3.6rem);
    }

    @media (max-width: 1199px) {
      bottom: calc(100% + 3.2rem);
    }

    @media (max-width: 1023px) {
      bottom: calc(100% + 2.8rem);
    }

    @media (max-width: 767px) {
      bottom: calc(100% + 2rem);
    }
  }

  .service__anchor-link {
    &:hover {
      opacity: 1;

      span {
        padding-left: 10px;
      }
    }

    div {
      transition: 0.4s;
    }

    &:hover div {
      transform: scale(1.2);
    }
  }
}
</style>