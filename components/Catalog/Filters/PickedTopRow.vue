<template>
  <div class="catalog__content-filter">
    <div class="catalog__content-filter-top">
      <div class="catalog__content-select-wrapper">
        <select
          id="catalogExpensive"
          class="catalog__content-select js-custom-select"
          name="catalogExpensive"
        >
          <option value="expensive">Сортировать</option>
          <option value="expensive">Цена по возрастанию</option>
          <option value="expensive">Цена по убыванию</option>
          <option value="expensive">Модели A-Z</option>
          <option value="expensive">Модели Z-A</option>
          <option value="expensive">Производители A-Z</option>
          <option value="expensive">Производители Z-A</option>
        </select>
      </div>
      <a
        class="catalog__content-sort"
        href="#sort"
      >
        <span>Сортировать</span>
        <SliderArrow />
      </a>
      <a
        class="catalog__content-filter-show"
        href="#catalogFilter"
      >
        <FilterOpenIcon />
        <span>Фильтры</span>
      </a>
      <div class="catalog__content-grid-filter">
        <button class="active grid-row-js">
          <GridFilterList />
        </button>
        <button class="grid-tile-js">
          <GridFilterColumns />
        </button>
      </div>
    </div>
    <!-- <div class="catalog__content-filter-bottom">
      <ul class="catalog__content-filter-tags catalog-tags-js">
        <li>
          <div class="catalog__content-filter-reset">
            Сбросить фильтр
            <button class="catalog__content-filter-tag-delete catalog__content-filter-tag-delete--black">
              <svg>
                <use xlink:href="#cross-icon"></use>
              </svg>
            </button>
          </div>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
// Сделать иконки
import SliderArrow from '@/assets/icons/slider-arrow.svg'
import GridFilterList from '@/assets/icons/grid-filter-1.svg'
import GridFilterColumns from '@/assets/icons/grid-filter-2.svg'
import FilterOpenIcon from '@/assets/icons/filter-open-icon.svg'
export default {
  name: 'FiltersProductsTop',

  components: {
    SliderArrow,
    GridFilterList,
    GridFilterColumns,
    FilterOpenIcon,
  },
}
</script>

<style lang="scss" scoped>
.catalog {
  &__content-filter {
    position: relative;
    z-index: 2;
  }

  &__content-filter-top {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding-bottom: 2.8rem;

    border-bottom: 1px solid var(--border-grey);

    @media (max-width: 1599px) {
      padding-bottom: 2.6rem;
    }

    @media (max-width: 1199px) {
      align-items: center;
      padding-bottom: 2.3rem;
    }

    @media (max-width: 767px) {
      padding-bottom: 2rem;
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }

  &__content-select-wrapper {
    display: flex;
    align-items: center;
    gap: 4rem;

    @media (max-width: 1199px) {
      gap: 3.2rem;
    }

    @media (max-width: 767px) {
      display: none;
    }

    .choices {
      padding: 0;
      border: 0;
      background: none;
    }

    .choices__item {
      font-size: 1.6rem;

      @media (max-width: 1023px) {
        font-size: 1.4rem;
      }
    }

    .choices__item--choice {
      padding: 1.4rem 0;
      font-size: 1.6rem;

      &:hover {
        background-color: transparent;
      }

      @media (max-width: 1199px) {
        font-size: 1.5rem;
      }
    }

    .choices__list--dropdown {
      width: 24.4rem;
      padding: 0.4rem 0.8rem 0 1.6rem;

      box-shadow: 0 0.8rem 3.2rem rgba(32, 34, 38, 0.08);
    }

    .choices__list--dropdown .choices__item--selectable.is-highlighted {
      background-color: transparent;
    }
  }

  &__content-currency-button {
    display: none;
    justify-content: center;
    align-items: center;
    width: 4.8rem;
    height: 3.2rem;

    border: 1px solid var(--border-grey);
    border-radius: 4rem;

    font-size: 1.6rem;
    line-height: 1.25;

    @media (max-width: 767px) {
      display: flex;
    }
  }

  &__content-sort {
    display: none;
    align-items: center;
    gap: 0.8rem;

    cursor: pointer;

    font-size: 1.6rem;
    line-height: 1.25;

    @media (max-width: 767px) {
      display: flex;
    }

    svg {
      width: 0.6rem;
      height: 0.8rem;
      transform: rotate(90deg);
    }
  }

  &__content-filter-show {
    display: none;
    align-items: center;
    gap: 0.8rem;
    padding: 0.6rem 1.6rem;
    margin-left: auto;
    margin-right: 2rem;

    border: 1px solid var(--border-grey);
    border-radius: 4rem;
    cursor: pointer;

    font-size: 1.6rem;
    line-height: 1.25;

    svg {
      width: 2.4rem;
      height: 2.4rem;

      color: var(--easy-dark);
    }

    &:hover {
      opacity: 1;
    }

    @media (max-width: 1199px) {
      display: flex;
    }

    @media (max-width: 767px) {
      padding: 0.4rem 1.2rem;
      margin-right: 0;
      margin-left: 0;
    }

    span {
      @media (max-width: 767px) {
        display: none;
      }
    }
  }

  &__content-grid-filter {
    position: relative;

    display: flex;
    align-items: center;
    gap: 3.4rem;
    padding: 0.2rem 0;

    @media (max-width: 1023px) {
      display: none;
    }

    &::before {
      content: '';

      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      width: 0.2rem;
      height: calc(100% + 0.4rem);

      background: var(--border-grey);
    }

    button.active {
      svg {
        fill: var(--jack-grey);
      }
    }

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

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