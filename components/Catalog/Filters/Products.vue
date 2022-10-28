<template>
  <div class="catalog__filter js-modal-catalogFilter">
    <div class="catalog__filter-inner">
      <div class="catalog__filter-close">
        <!-- {{> close-button }} -->
      </div>
      <h2 class="catalog__filter-header">
        Фильтр
      </h2>
      <form class="catalog__filter-form">
        <fieldset class="catalog__filter-group catalog__filter-group--price">
          <h3 class="catalog__filter-title">
            Цена
            <svg>
              <use xlink:href="#slider-arrow"></use>
            </svg>
          </h3>
          <div class="catalog__filter-range-block">
            <div class="catalog__filter-range-wrapper">
              <div
                id="catalogFilterPrice"
                class="catalog__filter-range"
                data-step="1000"
                data-min="30000"
                data-max="3000000"
              ></div>
              <div class="catalog__filter-range-block catalog__filter-range-block--min">
                <input
                  v-model.lazy="priceFromProxy"
                  class="catalog__filter-range-input catalog__filter-range-input--min"
                  type="text"
                >
              </div>
              <div class="catalog__filter-range-block catalog__filter-range-block--max">
                <input
                  v-model.lazy="priceToProxy"
                  class="catalog__filter-range-input catalog__filter-range-input--max"
                  type="text"
                >
              </div>
            </div>
          </div>
        </fieldset>
        <FormulateInput
          v-if="subCategoriesList.length > 0"
          v-model="subCategoriesProxy"
          :options="subCategoriesList.map(el => ({
            label: el.name,
            value: el.id
          }))"
          :type="'checkbox'"
          label="Категории"
          labelClass="catalog__filter-title"
          inputClass="catalog__filter-checkbox"
        />
        <FormulateInput
          v-for="filterItem of mappedFilterList"
          :key="filterItem.id"
          :options="filterItem.list_values"
          :type="'checkbox'"
          :value="filterAttributesValues[filterItem.id]"
          :label="filterItem.name"
          labelClass="catalog__filter-title"
          inputClass="catalog__filter-checkbox"
          @input="changeFilterAttributesValues(filterItem.id, $event)"
        />
        <button class="catalog__filter-button button">Cбросить фильтр</button>
        <button class="catalog__filter-mobile-button button">Показать товары</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogFilter',

  props: {
    filterInitialList: {
      type: Array,
      default: () => [],
    },
    subCategoriesList: {
      type: Array,
      default: () => [],
    },
    filterAttributesValues: {
      type: Object,
      required: true,
    },
    subCategoriesValue: {
      type: Array,
      required: true,
    },
    priceFrom: {
      type: [Number, String],
      required: true,
    },
    priceTo: {
      type: [Number, String],
      required: true,
    },
  },

  computed: {
    mappedFilterList() {
      return this.filterInitialList.filter((el) => el.list_values[0] !== '')
    },

    subCategoriesProxy: {
      get() {
        return this.subCategoriesValue
      },
      set(value) {
        this.$emit('changeCategory', value)
      },
    },
    priceFromProxy: {
      get() {
        return this.priceFrom
      },
      set(value) {
        this.$emit('changePriceFrom', value)
      },
    },
    priceToProxy: {
      get() {
        return this.priceTo
      },
      set(value) {
        this.$emit('changePriceTo', value)
      },
    },
  },

  methods: {
    changeFilterAttributesValues(key, value) {
      if (value !== false) {
        this.$emit('changeFilterAtributes', {
          ...this.filterAttributesValues,
          [key]: value,
        })
      }
    },
  },
}
</script>

<style lang="scss">
.catalog {
  &__filter {
    grid-column: span 3;
    padding-right: 3.2rem;

    @media (max-width: 1199px) {
      opacity: 0;
      visibility: hidden;

      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 10;

      display: flex;
      flex-direction: column;
      padding-right: 0;

      background-color: rgba(32, 34, 38, 0.7);
      overflow-y: auto;

      transition: 0.3s;

      &.active {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  &__filter-inner {
    position: relative;

    @media (max-width: 1199px) {
      max-width: 37.1rem;
      flex-grow: 1;
      padding: 2.8rem 2.4rem;
      background-color: #fff;
    }

    @media (max-width: 767px) {
      max-width: none;
      margin-top: 4rem;

      border-radius: 2rem 2rem 0 0;
    }
  }

  &__filter-close {
    display: none;

    position: absolute;
    top: 2rem;
    right: 2.4rem;

    @media (max-width: 1199px) {
      display: block;
    }

    .close-button {
      width: 4rem;
      height: 4rem;

      svg {
        width: 1.2rem;
        height: 1.2rem;

        @media (max-width: 767px) {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }

  &__filter-form {
    display: flex;
    flex-direction: column;
    gap: 5.2rem;

    @media (max-width: 1599px) {
      gap: 4.8rem;
    }

    @media (max-width: 767px) {
      gap: 3.2rem;
    }
  }

  &__filter-header {
    display: none;
    padding-bottom: 2.8rem;
    margin-bottom: 2.8rem;

    border-bottom: 1px solid var(--border-grey);

    font-weight: 400;
    font-size: 2rem;
    line-height: 1.2;
    text-align: center;

    @media (max-width: 1199px) {
      display: block;
    }
  }

  &__filter-group {
    display: flex;
    flex-direction: column;
    gap: 0;

    border: none;

    transition: 0.4s;

    &.active {
      gap: 2.8rem;

      @media (max-width: 767px) {
        gap: 1.6rem;
      }

      .catalog__filter-title > svg {
        transform-origin: 50% 40%;
        transform: rotate(-90deg);
      }
    }

    &--price {
      order: -1;
    }
  }

  &__filter-title {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 14px;
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 1.2;

    cursor: pointer;

    @media (max-width: 1023px) {
      font-size: 2rem;
      gap: 1.6rem;
    }

    @media (max-width: 767px) {
      font-size: 1.8rem;
      justify-content: space-between;
    }

    &--radio {
      justify-content: space-between;
    }

    svg {
      width: 0.6rem;
      height: 0.8rem;

      transform: rotate(90deg);
      transition: 0.4s;
    }
  }

  &__filter-subtitle {
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.2;

    @media (max-width: 1023px) {
      font-size: 1.8rem;
    }
  }

  &__filter-checkbox-input {
    &:hover + .catalog__filter-checkbox {
      color: var(--easy-dark);

      &::before {
        background-color: var(--border-grey);
      }
    }

    &:checked + .catalog__filter-checkbox {
      &::before {
        background: var(--dark) url('/images/icons/check-icon.svg') no-repeat
          center;
        background-size: 1.3rem 0.9rem;
      }
    }

    &[disabled] + .catalog__filter-checkbox {
      &::before {
        background: var(--light-grey);
      }
    }

    &[disabled]:checked + .catalog__filter-checkbox {
      &::before {
        background: var(--light-grey) url('/images/icons/check-icon-gray.svg')
          no-repeat center;
      }
    }
  }

  &__filter-checkbox {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 20px;
    font-size: 1.6rem;
    line-height: 1.25;

    cursor: pointer;

    span {
      color: var(--jack-grey);
    }

    &::before {
      content: '';

      width: 2.4rem;
      height: 2.4rem;

      border-radius: 0.8rem;
      background-color: var(--extra-light-gray);

      transition: 0.3s;
    }
  }

  &__filter-subgroup {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    max-height: 39rem;
    overflow-y: auto;

    border: none;

    &::-webkit-scrollbar {
      width: 0.6rem;

      background-color: var(--light-grey);
      border-radius: 0.3rem;
      overflow: hidden;
    }

    &::-webkit-scrollbar-thumb {
      width: 100%;

      background-clip: content-box;
      background: linear-gradient(
        180deg,
        #b659ff 0%,
        #99f5a2 49.42%,
        #79dfff 100%
      );
      border-radius: 0.3rem;
    }
  }

  &__filter-content {
    display: flex;
    flex-direction: column;
    gap: 2.8rem;

    overflow: hidden;
  }

  &__filter-search-wrapper {
    position: relative;

    svg {
      position: absolute;
      right: 1.2rem;
      top: 50%;
      transform: translateY(-50%);

      width: 1.6rem;
      height: 1.6rem;
    }
  }

  &__filter-search {
    padding: 1rem 1.2rem;

    border-radius: 1.2rem;
    background: var(--extra-light-gray);

    font-size: 1.6rem;
    line-height: 1.25;

    &::placeholder {
      color: var(--jack-grey);
    }
  }

  &__filter-more-button {
    font-size: 1.8rem;
    line-height: 1.3;
    color: #0e54dc;

    @media (max-width: 1199px) {
      font-size: 1.6rem;
    }
  }

  &__filter-range-block {
    overflow: hidden;

    font-size: 1.8rem;
  }

  &__filter-range-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 0.5rem;
    padding-top: 1rem;
  }

  &__filter-range {
    position: relative;
    left: 0.5rem;

    width: calc(100% - 1.5rem);
    grid-column: span 2;
    height: 0.2rem;

    border: none;

    .noUi-handle {
      right: -1rem;
      top: -0.7rem;

      width: 1.6rem;
      height: 1.6rem;

      border: none;
      border-radius: 50%;
      box-shadow: none;
      background-color: var(--dark);
      cursor: pointer;

      &::before {
        display: none;
      }

      &::after {
        display: none;
      }
    }

    .noUi-connect {
      background: var(--dark);
    }

    .noUi-connects {
      border-radius: 0.3rem;
    }

    .noUi-handle-lower {
      right: -1.2rem;
    }
  }

  &__filter-range-block {
    position: relative;

    &::before {
      position: absolute;
      left: 1.2rem;
      top: 50%;
      transform: translateY(-50%);

      font-size: inherit;
      line-height: inherit;
      color: var(--jack-grey);
    }

    &--min::before {
      content: 'от';
    }

    &--max::before {
      content: 'до';
    }
  }

  &__filter-range-input {
    width: 100%;
    padding: 1rem 1.2rem 1rem 4.2rem;

    border-radius: 1.2rem;
    background-color: var(--extra-light-gray);

    font-size: 1.6rem;
    line-height: 1.25rem;
  }

  &__filter-radio {
    position: relative;

    width: 4rem;
    height: 2.4rem;

    border-radius: 1.2rem;
    overflow: hidden;

    input:checked + label {
      background-color: var(--dark);

      &::after {
        margin-left: 1.6rem;
      }
    }

    label {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 0 0.2rem;

      background-color: var(--border-grey);
      cursor: pointer;

      transition: 0.4s;

      &::after {
        content: '';

        width: 2rem;
        height: 2rem;
        margin-left: 0;

        background: #fff;
        border: 0;
        border-radius: 50%;

        transition: margin-left 0.4s;
      }
    }
  }

  &__filter-button {
    justify-content: center;

    border-color: var(--extra-light-gray);
    background-color: var(--extra-light-gray);

    color: var(--easy-dark) !important;

    transition: 0.3s;

    &:hover {
      background-color: var(--extra-light-gray);
      opacity: 0.8;
    }
  }

  &__filter-mobile-button {
    display: none;
    padding: 1.6rem;

    font-size: 1.6rem;
    color: #fff;

    @media (max-width: 767px) {
      display: block;
    }
  }
}

.catalog__filter-checkbox {
  input {
    @include visuallyHidden();
  }

  label {
    cursor: pointer;
  }

  &[data-has-value='true'] {
    &::before {
      background: var(--dark) url('/images/icons/check-icon.svg') no-repeat
        center;
      background-size: 1.3rem 0.9rem;
    }
  }
}
</style>