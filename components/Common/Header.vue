<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__top">
          <div class="header__burger">
            <!-- BURGERS -->
          </div>

          <HeaderLogo />

          <div class="header__search">
            <div class="search">
              <form
                class="search__form"
                name="searchForm"
              >
                <SearchIcon class="search__icon" />
                <input
                  class="search__input"
                  name="searchInput"
                  type="text"
                  placeholder="Поиск"
                >
              </form>
            </div>
          </div>

          <a
            class="header__user-navigation"
            href="#"
          >
            <UserIcon />
          </a>

        </div>
        <div class="header__bottom">
          <NavMenu />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import SearchIcon from '@/assets/icons/Search.svg'
import UserIcon from '@/assets/icons/User.svg'

export default {
  name: 'HeaderMain',
  components: {
    SearchIcon,
    UserIcon,
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 6;

  background-color: #fff;

  @media (max-width: 767px) {
    position: relative;
  }

  &--viewport-outside {
    position: fixed;
    transform: translateY(-100%);

    .mobile-navigation.active {
      height: 100vh;
    }

    .navigation__item:nth-child(1) {
      height: 100vh;
    }
  }
}

.header__top {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 10.5rem;
  padding: 2.4rem 0;

  border-bottom: 1px solid var(--border-grey);

  @media (max-width: 1024px) {
    height: 10.3rem;
    padding-bottom: 2.7rem;
  }

  @media (max-width: 767px) {
    align-items: center;
    height: 6.4rem;
    padding: 2rem 0;
  }
}

.header__burger {
  display: none;
  justify-content: center;
  align-items: center;
  width: 2.4rem;
  height: 2.4rem;

  cursor: pointer;

  svg:first-child {
    width: 2.4rem;
    height: 2.4rem;
  }

  svg:last-child {
    display: none;
    width: 1.4rem;
    height: 1.4rem;
  }

  &.active {
    svg:first-child {
      display: none;
    }

    svg:last-child {
      display: block;
    }
  }

  @media (max-width: 767px) {
    display: flex;
  }
}

.header__search {
  position: relative;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 98.6rem;
  margin-right: auto;
  margin-left: 5.1rem;

  @media (max-width: 1599px) {
    margin-left: 4.8rem;
  }

  @media (max-width: 1199px) {
    max-width: 65rem;
    margin-left: 2.6rem;
  }

  @media (max-width: 1023px) {
    max-width: 36.2rem;
    margin-left: 4.6rem;
  }

  @media (max-width: 767px) {
    display: none;
  }
}

.search {
  position: relative;
  height: 100%;

  &--icon-right {
    .search__input {
      padding: 1.6rem 2rem;
    }

    .search__icon {
      left: auto;
      right: 2rem;

      @media (max-width: 1170px) {
        left: auto;
        right: 1.6rem;
      }

      @media (max-width: 767px) {
        right: 1.2rem;
      }
    }
  }

  &__form {
    position: relative;

    display: flex;
    flex-grow: 1;
    height: 100%;
  }

  &__icon {
    position: absolute;
    z-index: 1;
    left: 2rem;
    top: 50%;
    transform: translateY(-50%);

    width: 1.6rem;
    height: 1.6rem;

    @media (max-width: 1170px) {
      left: 1.6rem;
    }

    @media (max-width: 767px) {
      left: 1.2rem;
    }
  }

  &__clear {
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);

    display: none;
    width: 3.2rem;
    height: 3.2rem;

    cursor: pointer;

    &--header {
      right: 13.2rem;

      @media (max-width: 767px) {
        right: 1.2rem;
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }

  &__input {
    position: relative;

    width: 100%;
    height: 100%;
    padding: 1.5rem 6.4rem;
    box-sizing: border-box;

    border: 1px solid var(--light-grey);
    border-radius: 12px;
    background: var(--light-grey);

    transition: 0.3s;

    @media (max-width: 1199px) {
      padding: 1.5rem 5.2rem;
    }

    @media (max-width: 767px) {
      padding: 1rem 4rem;
      font-size: 1.6rem;

      border-radius: 0.8rem;

      &::placeholder {
        font-size: 1.6rem;
      }
    }
  }
}

.header__user-navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.8rem;
  margin-left: 2rem;

  border: 1px solid rgba(32, 34, 38, 0.2);
  border-radius: 10rem;

  transition: 0.4s;

  &:hover {
    color: var(--jack-grey);
  }

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }

  @media (max-width: 1023px) {
    width: 8rem;
  }

  @media (max-width: 768px) {
    width: auto;
    border: none;
  }
}

.header__bottom {
  display: flex;
  justify-content: space-between;
  height: 8rem;
  padding: 2.7rem 0;

  @media (max-width: 767px) {
    padding: 2rem 0;
  }
}
</style>