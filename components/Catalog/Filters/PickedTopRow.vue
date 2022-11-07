<template>
  <div class="catalog__content-filter-bottom">
    <ul class="catalog__content-filter-tags">
      <div
        v-for="filterAttribute of mappedPickedFilterAttributes"
        :key="filterAttribute.id"
        class="catalog__content-filter-tags"
      >
        <li
          v-for="(filterAttributeItem, idx) in filterAttribute.values"
          :key="idx"
          class="catalog__content-filter-tag-wrapper"
        >
          <div class="catalog__content-filter-tag">
            <span class="catalog__content-filter-tag-name">{{filterAttribute.name}}:</span>
            <span class="catalog__content-filter-tag-value">{{filterAttributeItem}}</span>
            <button
              @click="deleteAttributeItem(filterAttribute.id, filterAttributeItem)"
              class="catalog__content-filter-tag-delete"
            >
              <CrossIcon />
            </button>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import CrossIcon from '@/assets/icons/cross-icon.svg'
export default {
  name: 'FiltersProductsTop',
  components: {
    CrossIcon,
  },

  props: {
    initialFilterAttributes: {
      type: Array,
      required: true,
    },

    pickedAttributes: {
      type: Object,
      required: true,
    },
  },

  computed: {
    mappedPickedFilterAttributes() {
      return Object.entries(this.pickedAttributes)
        .filter(([_key, value]) => value.length > 0)
        .map(([key, value]) => ({
          name: this.initialFilterAttributes.find((el) => el.id === Number(key))
            .name,
          id: Number(key),
          values: value,
        }))
    },
  },

  methods: {
    deleteAttributeItem(attributeId, itemWillDelete) {
      this.$emit('updateFilterAttributes', {
        ...this.pickedAttributes,
        [attributeId]: this.pickedAttributes[attributeId].filter(
          (el) => el !== itemWillDelete
        ),
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.catalog {
  &__content-filter-bottom {
    padding: 2.8rem 0;
    border-bottom: 1px solid var(--border-grey);

    @media (max-width: 1023px) {
      padding: 2rem 0;
    }

    @media (max-width: 767px) {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }

  &__content-filter-tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.2rem;

    @media (max-width: 1023px) {
      gap: 0.8rem;
    }

    @media (max-width: 767px) {
      overflow-x: scroll;
      -ms-overflow-style: none;
      flex-wrap: nowrap;

      &::-webkit-scrollbar {
        height: 0;
      }
    }
  }

  &__content-filter-tag-wrapper {
    flex-shrink: 0;
  }

  &__content-filter-tag {
    display: flex;
    align-items: center;
    padding: 0.6rem 0.6rem 0.6rem 1.2rem;

    border-radius: 4rem;
    background-color: var(--extra-light-gray);

    font-size: 1.6rem;
    line-height: 1.25;

    @media (max-width: 1023px) {
      font-size: 1.4rem;
    }
  }

  &__content-filter-tag-name {
    color: var(--jack-grey);

    @media (max-width: 1023px) {
      margin-right: 0.4rem;
    }
  }

  &__content-filter-tag-value {
    margin-left: 0.4rem;
    margin-right: 0.8rem;

    @media (max-width: 1023px) {
      display: none;
    }
  }

  &__content-filter-tag-delete {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.4rem;
    height: 2.4rem;

    border-radius: 50%;
    background-color: var(--border-grey);

    @media (max-width: 1023px) {
      width: 2rem;
      height: 2rem;
    }

    svg {
      width: 1rem;
      height: 1rem;
      stroke: var(--dark);

      @media (max-width: 1023px) {
        width: 0.8rem;
        height: 0.8rem;
      }
    }

    &--black {
      background-color: var(--dark);

      svg {
        stroke: #fff;
      }
    }
  }

  &__content-filter-tag-show {
    @extend .catalog__content-filter-tag;
  }

  &__content-filter-tag-show-text {
    margin-right: 0.8rem;
    cursor: pointer;

    @media (max-width: 1023px) {
      margin-right: 0.4rem;
    }
  }

  &__content-filter-tag-more {
    @extend .catalog__content-filter-tag-delete;

    background: transparent;
    cursor: pointer;
  }

  &__content-filter-reset {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    @media (max-width: 1023px) {
      gap: 0.4rem;
    }
  }
}
</style>