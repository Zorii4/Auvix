<template>
  <section>
    <div class="container">
      <div class="news-single__footer">
        <div class="post-footer">
          <ul class="post-footer__tags">
            <li
              v-for="item of pageProps.tags"
              :key="item.id"
            >
              <a
                class="post-footer__tag"
                href="#"
              >{{item.name}}</a>
            </li>
          </ul>
          <ul class="post-footer__socials">
            <li class="post-footer__social">
              <a
                class="post-footer__social"
                href="#"
              >
                <!-- <svg>
                        <use xlink:href="#{{this}}"></use>
                    </svg> -->
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Tags',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 4rem 0;
  border-top: 1px solid var(--border-grey);

  @media (max-width: 1599px) {
    padding: 3.5rem 0;
  }

  @media (max-width: 1199px) {
    padding: 3rem 0;
  }

  @media (max-width: 1023px) {
    padding: 2rem 0 2.8rem;
    align-items: stretch;
    flex-direction: column;
  }

  @media (max-width: 767px) {
    padding: 2rem 0;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
  }

  &__tag {
    padding: 0.4rem 1.2rem;

    border-radius: 0.6rem;
    background: var(--grey);

    font-size: 2rem;
    line-height: 1.4;

    @media (max-width: 1199px) {
      font-size: 1.8rem;
    }
  }

  &__socials {
    display: flex;
    gap: 0.4rem;

    @media (max-width: 1199px) {
      gap: 0.8rem;
    }
  }

  &__social {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 3.6rem;

    border: 1px solid var(--border-grey);
    border-radius: 1.8rem;

    color: var(--easy-dark);

    @media (max-width: 1199px) {
      width: 5.6rem;
      height: 3.2rem;
    }

    svg {
      width: 1.9rem;
      max-height: 1.8rem;
    }
  }
}
</style>