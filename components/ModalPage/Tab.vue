<template>
  <div class="scope__tabs">
    <div class="container">
      <swiper
        :options="swiperOptions"
        class="tabs"
      >
        <swiper-slide
          v-for="(tab, idx) of pageProps.data"
          :key="tab.id"
          class="tabs__item-wrapper swiper-slide"
        >
          <li
            class="tabs__item"
            :class="{'tabs__item--active': idx === activeTab}"
            @click.prevent="fetchTab(tab, idx)"
          >{{tab.name}}</li>
        </swiper-slide>
      </swiper>
    </div>
    <div
      v-for="item of typeToPageIndentificator"
      :key="item.id"
    >
      <component
        :is="item.componentType + item.componentName"
        :pageProps="item.componentData"
      ></component>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  /* eslint-disable */
  name: 'Tab',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    pageProps: Object,
  },
  data: () => ({
    swiperOptions: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      freeMode: true,
      speed: 600,
    },
    pageBlocksData: [],
    activeTab: 0,
  }),
  methods: {
    async fetchTab(tab, idx) {
      this.activeTab = idx
      try {
        const itemData = await this.$axios.$get(`/modal-pages?uri=${tab.uri}`)
        if (itemData) {
          this.pageBlocksData = itemData.data?.config?.blocks
          return itemData
        }
        return
      } catch (e) {
        console.error(e)
        this.$router.push('/')
      }
    },
  },
  computed: {
    typeToPageIndentificator() {
      if (this.pageBlocksData.length > 0) {
        return this.pageBlocksData
          .filter((el) => !Array.isArray(el.data))
          .map((item) => ({
            componentName: item.data.type
              .split('_')
              .map((e) => e[0].toUpperCase() + e.slice(1))
              .join(''),
            componentData: item.data,
            componentType: item.belonging
              .split('_')
              .map((e) => e[0].toUpperCase() + e.slice(1))
              .join(''),
          }))
      }
      return false
    },
  },
}
</script>

<style lang="scss" scoped>
.scope__tabs {
  border-bottom: 1px solid var(--border-grey);
  margin-bottom: 5rem;
  .tabs {
    justify-content: flex-start;
  }
}

.tabs {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5.2rem 0;

  @media (max-width: 1599px) {
    padding: 4.8rem 0;
  }

  @media (max-width: 1199px) {
    padding: 3.2rem 0;
  }

  @media (max-width: 1023px) {
    padding: 2.8rem 0;
  }

  @media (max-width: 860px) {
    justify-content: flex-start;
  }

  @media (max-width: 767px) {
    padding: 2.4rem 0;
  }

  .tabs__item--active {
    background: var(--dark);
    color: #fff;
  }

  &__item {
    display: inline-block;
    padding: 0.4rem 2rem;
    width: auto;
    border-radius: 1.8rem;
    cursor: pointer;
    font-size: 2.4rem;
    line-height: 1.2;
    color: var(--jack-grey) !important;

    @media (max-width: 1199px) {
      font-size: 2rem;
    }

    @media (max-width: 767px) {
      font-size: 1.8rem;
    }

    &--active {
      background: var(--dark);
      color: #fff !important;
    }
  }
}
.swiper-slide {
  width: auto;
}
</style>