  <template>
  <section class="callout-section">
    <div class="narrow-container">
      <div
        v-if="pageProps.callout_background === 'off'"
        class="articles-single__emphasis"
      >
        <div class="emphasis">
          <p>
            {{pageProps.textarea_description}}
          </p>
        </div>
      </div>
      <div
        v-if="pageProps.callout_background === 'on'"
        class="articles-single__notation"
      >
        <div class="notation">
          <p>{{pageProps.textarea_description}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Callout',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.callout-section {
  margin-bottom: 5rem;
}

.articles-single {
  margin-bottom: 4rem;
  &__emphasis {
    margin-bottom: 6rem;

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

    &__notation {
      margin: 6rem 0;

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
}
.emphasis {
  position: relative;

  @media (max-width: 1140px) {
    padding-left: 2.8rem;
  }

  @media (max-width: 767px) {
    padding-left: 2rem;
  }

  &::before {
    content: '';

    position: absolute;
    top: 0;
    left: -6.4rem;

    width: 0.4rem;
    height: 100%;
    background: #79dfff;

    @media (max-width: 1599px) {
      left: -6.2rem;
    }

    @media (max-width: 1199px) {
      left: -4.4rem;
    }

    @media (max-width: 1140px) {
      left: 0;
    }
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

.notation {
  padding: 2.8rem 3.6rem;

  border-radius: 1.6rem;
  background: var(--grey);

  @media (max-width: 1199px) {
    padding: 2.4rem 3.2rem;
  }

  @media (max-width: 1023px) {
    padding: 1.6rem 2.4rem;
    border-radius: 1.2rem;
  }

  @media (max-width: 767px) {
    padding: 1.6rem;
  }

  p {
    font-size: 1.8rem;
    line-height: 1.3;
    color: var(--easy-dark);

    @media (max-width: 1199px) {
      font-size: 1.6rem;
    }
  }
}
</style>