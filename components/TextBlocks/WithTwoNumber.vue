<template>
  <div class="two-columns-grid">
    <div class="two-columns-grid__left">
      <h2
        v-if="pageProps.use_link"
        class="two-columns-grid__title section-title"
      >{{pageProps.link_title}}</h2>
      <div
        v-if="pageProps.content_position === 'left'"
        class="two-columns-grid__digits"
      >
        <div
          v-for="item of pageProps.numbers"
          :key="item.id"
          class="two-columns-grid__digit"
          :style="{backgroundImage: `url(${item.image_url})`}"
        >
          <span class="two-columns-grid__digit-number">{{item.value}}</span>
          <p class="two-columns-grid__digit-text">{{item.description}}</p>
        </div>
      </div>
    </div>

    <div class="two-columns-grid__right">
      <h3>{{pageProps.sub_title}}</h3>
      <div
        class="two-columns-grid__content"
        :class="{'two-columns-grid__content--bottom-none': pageProps.content_position === 'right'}"
      >
        <p v-html="descriptionReplacer"></p>
      </div>

      <div
        v-if="pageProps.content_position === 'right'"
        class="two-columns-grid__digits"
      >
        <div
          v-for="item of pageProps.numbers"
          :key="item.id"
          class="two-columns-grid__digit"
          :style="{backgroundImage: `url(${item.image_url})`}"
        >
          <span class="two-columns-grid__digit-number">{{item.value}}</span>
          <p class="two-columns-grid__digit-text">{{item.description}}</p>
        </div>
      </div>
      <div
        v-if="pageProps.use_button"
        class="two-columns-grid__buttons"
      >
        <NuxtLink
          :to="pageProps.button_link_url"
          class="two-columns-grid__button button button--white"
        >{{pageProps.button_title}}</NuxtLink>
        <NuxtLink
          v-if="pageProps.link_title && pageProps.link_url"
          :to="pageProps.link_url"
          class="two-columns-grid__more-button button button--white"
        >
          {{pageProps.link_title}} </NuxtLink>
        <svg
          v-if="pageProps.link_title && pageProps.link_url"
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

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'WithTwoNumber',
  props: {
    pageProps: Object,
  },
  computed: {
    descriptionReplacer() {
      if (
        this.pageProps.description &&
        typeof this.pageProps.description === 'string'
      ) {
        return this.pageProps.description.replace(/\n/g, '<p></p><br>')
      }
      return false
    },
  },
}
</script>

<style lang="scss" scoped>
.two-columns-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.4rem;
  margin-bottom: 50px;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: 767px) {
    gap: 2.4rem;
  }

  &__digits {
    display: flex;
    gap: 2rem;

    @media (max-width: 1199px) {
      flex-direction: column;
      gap: 1.8rem;
      max-width: 25rem;
    }

    @media (max-width: 1023px) {
      order: -1;
      flex-direction: row;
      justify-content: space-between;
      max-width: 60rem;
      margin-bottom: 4rem;
    }

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
      gap: 2.4rem;
      margin-bottom: 0.8rem;
    }
  }

  &__digit {
    position: relative;

    flex-grow: 1;
    max-width: 29.7rem;
    padding: 2.8rem 0 2.8rem 5.4rem;

    background-position: top left;
    background-size: contain;
    background-repeat: no-repeat;

    @media (max-width: 1599px) {
      max-width: 24rem;
      padding-left: 2.4rem;
    }

    @media (max-width: 1199px) {
      padding: 1.6rem 0 2.2rem 2.4rem;
    }

    @media (max-width: 1023px) {
      flex-grow: 0;
      padding-left: 1.6rem;
    }

    @media (max-width: 767px) {
      padding: 1.2rem 0 3rem 1.2rem;
    }

    &:nth-child(2) {
      max-width: 32.3rem;

      .two-columns-grid__digit-text {
        max-width: 22.8rem;
      }
    }
  }

  &__digit-number {
    display: inline-block;
    margin-bottom: 1.6rem;

    font-size: 6rem;
    line-height: 1;

    @media (max-width: 1199px) {
      font-size: 5.2rem;
      margin-bottom: 1.2rem;
    }

    @media (max-width: 767px) {
      font-size: 4rem;
      margin-bottom: 0.8rem;
    }
  }

  &__digit-text {
    font-size: 1.6rem;
    line-height: 1.25;
    color: var(--easy-dark);

    @media (max-width: 1199px) {
      font-size: 1.8rem;
      line-height: 1.3;
    }

    @media (max-width: 767px) {
      font-size: 1.6rem;
      line-height: 1.25;
    }
  }

  &__right {
    display: flex;
    flex-direction: column;

    h3 {
      margin-bottom: 4rem;

      font-weight: 400;
      font-size: 2.8rem;
      line-height: 1.1;

      @media (max-width: 1199px) {
        margin-bottom: 3.2rem;

        font-size: 2.4rem;
        line-height: 1.2;
      }

      @media (max-width: 1023px) {
        margin-bottom: 2.8rem;
      }

      @media (max-width: 767px) {
        font-size: 2rem;
        margin-bottom: 2rem;
      }
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 2.8rem;
    margin-bottom: 2rem;

    @media (max-width: 1599px) {
      margin-bottom: 5.6rem;
    }

    @media (max-width: 1199px) {
      gap: 2.4rem;
      margin-bottom: 4.8rem;
    }

    @media (max-width: 1023px) {
      gap: 2rem;
      margin-bottom: 4rem;
    }

    @media (max-width: 767px) {
      gap: 1.6rem;
      margin-bottom: 3.2rem;
    }

    &--bottom-none {
      @media (max-width: 1023px) {
        margin-bottom: 0;
      }
    }

    p {
      font-size: 2rem;
      line-height: 1.4;
      color: var(--easy-dark);
      margin-bottom: 4rem;

      @media (max-width: 1199px) {
        font-size: 1.8rem;
      }

      @media (max-width: 767px) {
        font-size: 1.6rem;
      }
    }
  }
  &__buttons {
    display: flex;
    align-items: center;
    gap: 3.4rem;

    @media (max-width: 1599px) {
      gap: 3.2rem;
    }
  }

  &__button {
    padding: 1.6rem 4.8rem;

    border: 1px solid var(--border-grey);
    border-radius: 1.2rem;

    font-size: 1.8rem;
    line-height: 1.3;
    color: var(--easy-dark);

    @media (max-width: 1599px) {
      padding: 1.6rem 4rem;
    }

    @media (max-width: 1023px) {
      padding: 1.4rem 3.6rem;
    }

    @media (max-width: 767px) {
      padding: 1.6rem;

      font-size: 1.6rem;
      line-height: 1.25;
    }
  }

  &__more-button {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 0;

    border: 0;

    @media (max-width: 1023px) {
      display: none;
    }

    &:hover {
      color: var(--dark) !important;
      background: transparent;
      border: 0;
    }

    svg {
      width: 0.8rem;
      height: 1rem;
    }
  }
}
</style>