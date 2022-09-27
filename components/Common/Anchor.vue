<template>
  <div>
    <a
      v-if="isExternal"
      :href="to"
      target="_blank"
      :class="className"
      :style="color"
    >
      <slot></slot>
    </a>
    <NuxtLink
      v-if="!isExternal"
      :to="to || '#'"
      :class="className"
    >
      <slot></slot>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'CommonAnchor',

  props: {
    to: {
      type: [String, Object],
      required: true,
    },
    className: String,
    color: Object,
  },

  computed: {
    isExternal() {
      if (typeof this.to === 'object') {
        return false
      }
      const externalLinkRegExp =
        /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/

      return this.to.match(externalLinkRegExp)
    },
  },
}
</script>

<style lang="scss" scoped>
.banner__button {
  position: relative;
  z-index: 2;
  display: inline-block;
  justify-self: flex-end;
  padding: 1.7rem 4.1rem;
  color: var(--textColor) !important;
  background-color: var(--btnColor);
  border: none;

  @media (max-width: 1023px) {
    padding: 1.6rem 3.2rem;
    font-size: 1.6rem;
  }
}

.mini-banner__button {
  padding: 1.6rem 4rem;

  @media (max-width: 1023px) {
    padding: 1.6rem 3.2rem;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 1.6rem 3.4rem;

    justify-content: center;
  }

  @media (max-width: 359px) {
    padding: 1.4rem;
  }
}

.two-number-button {
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

.two-number-button__more {
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

.service-card-item {
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
}

.accent-photo-button {
  align-self: flex-start;
  padding: 1.6rem 4rem;

  border-radius: 1.2rem;

  font-size: 1.8rem;
  line-height: 1.3;

  @media (max-width: 1599px) {
  }

  @media (max-width: 1199px) {
  }

  @media (max-width: 1023px) {
    padding: 1.6rem 3.2rem;

    border-radius: 0.8rem;

    font-size: 1.6rem;
    line-height: 1.25;
  }

  @media (max-width: 767px) {
    align-self: stretch;
    justify-content: center;
    padding: 1.6rem;
  }
}
</style>