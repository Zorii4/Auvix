<template>
  <ul class="navigation">
    <div class="navifation__wrapper">
      <li
        v-if="acitveItem.uri === '/catalog'"
        class="navigation__item"
      >
        <!-- <ul class="navigation__category">
            {{#each category}}
                <li class="navigation__category-item-wrapper">
                    <a class="navigation__category-item" href="#">
                        <div class="navigation__category-item-icon">
                            <svg>
                                <use xlink:href="#{{this.icon}}"></use>
                            </svg>
                        </div>
                        <span>{{this.name}}</span>
                    </a>
                </li>
            {{/each}}
        </ul> -->
        <ul class="navigation__subcategory">
          <li>
            <a
              class="navigation__subcategory-item"
              href="/category.html"
            >Категории</a>
          </li>
        </ul>
      </li>
      <li
        v-else
        class="navigation__item"
      >
        <div class="navigation__inner">
          <ul class="navigation__inner-list">
            <li
              v-for="childItem of acitveItem.children"
              :key="childItem.id"
            >
              <nuxt-link
                class="navigation__inner-item"
                :to="childItem.uri"
              >{{childItem.name}}</nuxt-link>
            </li>
          </ul>
        </div>
      </li>
    </div>
  </ul>
</template>

<script>
export default {
  name: 'NavigationBottomBlock',

  props: {
    acitveItem: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style>
</style>