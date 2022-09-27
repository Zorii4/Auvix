<template>
  <div>
    <h2 class="dealer__control-title">{{pageProps.title}}</h2>
    <ul class="dealer__control-list">
      <li
        class="dealer__control-item"
        v-for="item of pageProps.steps"
        :key="item.id"
      >
        <div class="dealer__control-img-block">
          <div class="dealer__control-img">
            <img
              :src="$config.baseURLImg + item.image_url"
              :alt="item.image_alt || 'picture'"
            >
          </div>
          <div class="dealer__control-line"></div>
        </div>
        <p class="dealer__control-text">{{item.description}}</p>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'WithStepsAndIcons',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.dealer__control {
  padding-bottom: 8rem;

  @media (max-width: 1599px) {
    padding-bottom: 5.6rem;
  }

  @media (max-width: 1199px) {
    padding-bottom: 4.8rem;
  }

  @media (max-width: 1023px) {
    padding-bottom: 4rem;
  }

  @media (max-width: 767px) {
    padding-bottom: 3.2rem;
  }
}

.dealer__control-title {
  max-width: 52rem;
  padding-bottom: 4rem;

  font-weight: 400;
  font-size: 3.6rem;
  line-height: 1.1;

  @media (max-width: 1599px) {
    max-width: 42rem;
    padding-bottom: 3.6rem;

    font-size: 3.2rem;
  }

  @media (max-width: 1199px) {
    max-width: 36.4rem;
    padding-bottom: 3.2rem;

    font-size: 2.8rem;
  }

  @media (max-width: 1023px) {
    max-width: 31.2rem;
    padding-bottom: 2.8rem;

    font-size: 2.4rem;
  }

  @media (max-width: 767px) {
    max-width: 26.4rem;
    padding-bottom: 2rem;

    font-size: 2rem;
  }
}

.dealer__control-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem 0;

  @media (max-width: 1199px) {
    gap: 3.6rem 0;
  }

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.8rem 0;
  }

  @media (max-width: 767px) {
    gap: 2.4rem 0;
  }

  @media (max-width: 340px) {
    grid-template-columns: 1fr;
  }
}

.dealer__control-item {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 767px) {
    gap: 1.6rem;
  }

  &:last-child {
    .dealer__control-line {
      display: none;
    }
  }
}

.dealer__control-img-block {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
}

.dealer__control-img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10.4rem;
  aspect-ratio: 1 / 1;

  border-radius: 50%;
  background: linear-gradient(212.35deg, #f0f1f5 7.66%, #ffffff 75.91%);

  @media (max-width: 1199px) {
    width: 8.8rem;
  }

  @media (max-width: 767px) {
    width: 7.2rem;
  }

  svg {
    width: 5.6rem;
    aspect-ratio: 1 / 1;

    @media (max-width: 1199px) {
      width: 4.8rem;
    }

    @media (max-width: 767px) {
      width: 4rem;
    }
  }
}

.dealer__control-line {
  height: 0.2rem;
  background-color: var(--grey);

  @media (max-width: 340px) {
    display: none;
  }
}

.dealer__control-text {
  max-width: 33rem;
  padding-right: 2rem;

  font-size: 2rem;
  line-height: 1.4;
  color: var(--easy-dark);

  @media (max-width: 1199px) {
    max-width: 26.1rem;

    font-size: 1.8rem;
    line-height: 1.3;
  }

  @media (max-width: 1023px) {
    max-width: 29rem;
  }

  @media (max-width: 767px) {
    font-size: 1.6rem;
  }
}
</style>