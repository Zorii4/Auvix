<template>
  <nav class="header__menu">
    <ul class="header__menu-list">
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="item in cropMenu"
          :key="item.id"
        >
          <li
            class="header__menu-item"
            :class="{ 
              'active-nav-item': pickedItem && item.name === pickedItem.name,
              'item-blur': pickedItem !== null
              }"
            @mouseenter="$emit('hoverNavItem', item)"
          >
            <NuxtLink
              v-if="item.is_active"
              class="header__menu-link"
              :to="item.uri"
            >{{item.name}}</NuxtLink>
          </li>
        </swiper-slide>
      </swiper>
      <li class="header__menu-scroll"></li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'NavMenu',

  components: {
    Swiper,
    SwiperSlide,
  },

  props: {
    pickedItem: {
      type: Object,
      default: null,
    },
  },

  data: () => ({
    swiperOptions: {
      slidesPerView: 'auto',
      spaceBetween: 48,
      freeMode: true,
      speed: 600,
    },
  }),

  computed: {
    ...mapState({
      menu: (state) => state.menu.menu,
    }),

    cropMenu() {
      return this.menu?.data?.filter((item) => item.uri !== '/')
    },
  },
}
</script>

<style lang="scss" scoped>
.header__menu {
  width: 100%;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 2px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: var(--border-grey);
  }
  @media (max-width: 767px) {
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    z-index: 99;
  }
  .swiper-slide {
    width: auto;
  }
}

.header__menu-list {
  position: relative;
  white-space: nowrap;
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    display: none;
  }
}

.header__menu-item {
  width: auto;
  position: relative;
  font-size: 1.8rem;
  line-height: 1.3;
  @media (max-width: 1199px) {
    font-size: 1.6rem;
  }

  &:last-child {
    margin-right: 0;
  }
  &:hover {
    .header__menu-bottom {
      display: block;
    }
  }

  &.item-blur {
    color: rgb(219, 222, 229);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 100%;
    border-radius: 0.3rem;
    height: 5px;
    transition: all 0.3s;
    background: linear-gradient(90deg, #b659ff 0, #99f5a2 49.42%, #79dfff 100%);
  }

  &.active-nav-item {
    color: rgb(32, 34, 38);
    &:before {
      right: 0;
    }
  }
}

.header__menu-link {
  display: block;
  padding: 2.7rem 0;
  transition: 0.4s;

  @media (max-width: 1599px) {
    padding: 2.7rem 4rem 2.7rem 0;
  }

  @media (max-width: 1199px) {
    padding: 2.7rem 3rem 2.7rem 0;
    font-size: 1.6rem;
  }

  @media (max-width: 1023px) {
    padding: 2.7rem 2.4rem 2.7rem 0;
  }
  @media (max-width: 767px) {
    padding: 2rem 2.4rem 2rem 0;
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