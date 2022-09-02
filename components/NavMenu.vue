<template>
  <nav class="header__menu">
    <ul class="header__menu-list">
      <li
        v-for="item in cropMenu"
        :key="item.id"
        class="header__menu-item"
      >
        <NuxtLink
          class="header__menu-link"
          :to="item.uri"
        >{{item.name}}</NuxtLink>
      </li>
      <li class="header__menu-scroll"></li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NavMenu',

  computed: {
    ...mapState({
      menu: (state) => state.menu.menu,
    }),

    cropMenu() {
      return this.menu.data.filter((item) => item.uri !== '/')
    },
  },
}
</script>

<style lang="scss" scoped>
.header__menu {
  @media (max-width: 767px) {
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    z-index: 99;
  }
}

.header__menu-list {
  position: relative;

  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    display: none;
  }
}

.header__menu-item {
  width: auto;

  font-size: 1.8rem;
  line-height: 1.3;

  @media (max-width: 1199px) {
    font-size: 1.6rem;
  }

  &:last-child {
    margin-right: 0;
  }
}
.header__menu-link {
  display: block;
  padding-right: 4.8rem;

  transition: 0.4s;

  @media (max-width: 1599px) {
    padding-right: 4rem;
  }

  @media (max-width: 1199px) {
    padding-right: 3.2rem;
    font-size: 1.6rem;
  }

  @media (max-width: 1023px) {
    padding-right: 2.4rem;
  }
}

.header__menu-scroll {
  position: absolute;
  left: 0;
  top: -3rem;

  width: 0;
  height: 0.5rem;

  border-radius: 0.3rem;
  background: linear-gradient(90deg, #b659ff 0%, #99f5a2 49.42%, #79dfff 100%);

  transition: 0.4s;
}
</style>