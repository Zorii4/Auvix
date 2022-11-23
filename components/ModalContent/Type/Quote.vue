<template>
  <div class="narrow-container">
    <div class="text-container">
      <div class="news-single__blockquote">
        <blockquote class="post-blockquote">
          <div class="post-blockquote__text">
            <p>{{pageProps.textarea_description}}</p>
          </div>
          <div class="post-blockquote__author">
            <div class="post-blockquote__author-img">
              <img
                :src="$config.baseURLImg + pageProps.image_url"
                alt="Фото автора"
              >
            </div>
            <div class="post-blockquote__author-text">
              <cite class="post-blockquote__author-name">{{pageProps.author_name}}</cite>
              <p class="post-blockquote__author-position">{{pageProps.author_occupation}}</p>
            </div>
          </div>
          <svg
            class="post-blockquote__icon"
            width="45"
            height="42"
            viewBox="0 0 45 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.41811 18.2875C1.76126 18.2875 0.418112 16.9444 0.418112 15.2875V3C0.418112 1.34315 1.76126 0 3.41811 0H14.5241C16.1809 0 17.5241 1.34315 17.5241 3V14.4375C17.5241 22.2542 16.6082 27.8833 14.7765 31.325C12.6177 35.3396 9.43517 38.512 5.22889 40.8421C3.92308 41.5655 2.31035 41.061 1.51669 39.7967L0.907851 38.8268C-0.0861726 37.2433 0.625051 35.169 2.15606 34.0959C3.80209 32.9421 5.11359 31.4935 6.09056 29.75C7.32817 27.5779 8.13907 24.7915 8.52329 21.3908C8.71413 19.7016 7.33757 18.2875 5.63767 18.2875H3.41811ZM30.894 18.2875C29.2372 18.2875 27.894 16.9444 27.894 15.2875V3C27.894 1.34315 29.2372 0 30.894 0H42C43.6569 0 45 1.34315 45 3V14.4375C45 22.2542 44.0841 27.8833 42.2524 31.325C40.0936 35.3396 36.9111 38.512 32.7048 40.8422C31.399 41.5655 29.7863 41.061 28.9926 39.7967L28.3838 38.8268C27.3897 37.2433 28.101 35.169 29.632 34.0959C31.278 32.9421 32.5895 31.4935 33.5665 29.75C34.8041 27.5779 35.615 24.7915 35.9992 21.3908C36.19 19.7016 34.8135 18.2875 33.1136 18.2875H30.894Z"
              fill="#79DFFF"
            />
          </svg>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Quote',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.news-single {
  &__blockquote {
    margin-top: 6rem;
    margin-bottom: 6rem;

    @media (max-width: 1599px) {
      margin: 4.8rem 0;
    }

    @media (max-width: 1199px) {
      margin: 4rem 0;
    }

    @media (max-width: 1023px) {
      margin: 3.6rem 0;
    }

    @media (max-width: 767px) {
      margin: 3.2rem 0;
    }
  }
}
.post-blockquote {
  position: relative;

  padding: 4rem 0 5.2rem;

  border-top: 1px solid var(--border-grey);
  border-bottom: 1px solid var(--border-grey);

  @media (max-width: 1599px) {
    padding: 4.8rem 0;
  }

  @media (max-width: 1199px) {
    padding: 3.2rem 0 4rem;
  }

  @media (max-width: 1023px) {
    padding: 2.8rem 0 3.6rem;
  }

  @media (max-width: 767px) {
    padding: 4rem 0 3.2rem;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 4rem;

    @media (max-width: 1199px) {
      margin-bottom: 3.2rem;
    }

    @media (max-width: 1023px) {
      margin-bottom: 2.8rem;
    }

    @media (max-width: 767px) {
      margin-bottom: 2rem;
    }

    p {
      font-size: 2.8rem;
      line-height: 1.1;

      @media (max-width: 1199px) {
        font-size: 2.4rem;
      }

      @media (max-width: 767px) {
        font-size: 2rem;
      }
    }
  }

  &__author {
    display: flex;
    align-items: center;
    gap: 1.2rem 2.8rem;

    @media (max-width: 1599px) {
      gap: 2rem;
    }

    @media (max-width: 1199px) {
      gap: 1.2rem 2.4rem;
    }

    @media (max-width: 767px) {
      align-items: stretch;
      flex-direction: column;
    }
  }

  &__author-img {
    width: 8rem;
    flex-shrink: 0;

    @media (max-width: 1599px) {
      width: 7.2rem;
    }

    @media (max-width: 767px) {
      width: 7.6rem;
    }

    img {
      width: 100%;
      border-radius: 50%;
      aspect-ratio: 1 / 1;
      object-fit: cover;
    }
  }

  &__author-text {
    flex-grow: 1;
    max-width: 45.7rem;
  }

  &__author-name {
    display: inline-block;
    margin-bottom: 0.9rem;

    font-size: 1.8rem;
    line-height: 1.3;
    font-style: normal;

    @media (max-width: 1199px) {
      font-size: 1.6rem;
    }
  }

  &__author-position {
    font-size: 1.6rem;
    line-height: 1.25;
    color: var(--jack-grey) !important;

    @media (max-width: 1199px) {
      font-size: 1.4rem;
    }
  }

  &__icon {
    position: absolute;
    left: -8.4rem;
    bottom: calc(100% - 2.1rem);

    width: 4.6rem;
    height: 4.2rem;

    @media (max-width: 1599px) {
      left: -8rem;
      bottom: calc(100% - 2rem);

      width: 4.4rem;
      height: 4rem;
    }

    @media (max-width: 1199px) {
      left: -7.2rem;
      bottom: calc(100% - 1.8rem);

      width: 4rem;
      height: 3.6rem;
    }

    @media (max-width: 1023px) {
      display: none;
    }

    @media (max-width: 767px) {
      left: 0;
      bottom: calc(100% - 1.6rem);

      display: block;
      box-sizing: content-box;
      width: 3.6rem;
      height: 3.2rem;
      padding-right: 1.6rem;
      background-color: #fff;
    }
  }
}
</style>