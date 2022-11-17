<template>
  <header
    class="header"
    :class="{'active-search': activeSearchBar}"
  >
    <div
      class="header__search-bg"
      @click.stop="disactiveSearchBar"
    ></div>
    <div class="header__box">
      <div class="container">
        <div class="header__inner">
          <div class="header__top">
            <div class="header__burger">
              <!-- BURGERS -->
            </div>

            <HeaderLogo />

            <div class="header__search">
              <Search
                v-model="searchedQuery"
                :isOpenMenu="isOpenMenu"
                :active="activeSearchBar"
                :pickedCategory="calculatedPickedCategory"
                @openMenu="openSearchMenu"
                @activateSearchBar='activateSearchBar'
                @triggerToPushSearchPage="pushToSearchPage"
              />
            </div>

            <a
              class="header__user-navigation"
              href="#"
            >
              <UserIcon />
            </a>

          </div>
          <div
            v-if="!activeSearchBar"
            class="header__bottom"
          >
            <NavigationMenu @hoverNavItem="hoverItem" />
          </div>
        </div>
      </div>
      <SearchVariantsForPick
        v-if="isOpenMenu && !loadingResults"
        class="header__search-box search__variants"
        :pickedCategory="pickedCategory"
        :pickedTextCategory="pickedTextCategory"
        @pickCategory="pickCategory"
        @clearCategory="clearCategory"
        @pickTextCategory="pickTextCategory"
        @clearTextCategory="clearTextCategory"
      />
      <SearchTempResults
        v-if="loadingResults || showResultsView"
        class="header__search-box"
        :loadingTempResults="loadingResults"
        :searchedTempResults="fetchedSearchResults"
        @showAllResultsTrigger="pushToSearchPage"
      />
      <SearchHistory
        v-if="isShowHistoryMenu"
        class="header__search-box"
        :historySearchList='searchHistoryService.getHistorySearchList()'
        @pickItem="pickStringFromHistory"
        @clearHistory="clearHistory"
        @deleteItemFromHistory="deleteItem"
      />
    </div>
    <NavigationBottomBlock
      v-if="activeItemBav && !activeSearchBar"
      :acitveItem="activeItemBav"
      @closeNavBottom="closeNavBottom"
    />
  </header>
</template>

<script>
import { debounce } from 'debounce'
import UserIcon from '@/assets/icons/User.svg'
import { fetchSearchedItems } from '@/API-services/searchService'
import { SearchHistory } from '~/API-services/searchHistoryService.client'

export default {
  name: 'HeaderMain',

  components: {
    UserIcon,
  },

  data() {
    return {
      activeSearchBar: false,
      isOpenMenu: false,
      loadingResults: false,

      pickedCategory: null,
      pickedTextCategory: null,
      searchedQuery: '',

      fetchedSearchResults: {},
      searchHistoryService: null,

      activeItemBav: null,
    }
  },

  computed: {
    showResultsView() {
      return Object.keys(this.fetchedSearchResults).length > 0
    },

    calculatedPickedCategory() {
      return this.pickedCategory || this.pickedTextCategory || null
    },

    isShowHistoryMenu() {
      return (
        this.searchHistoryService &&
        !this.loadingResults &&
        this.searchedQuery.length <= 1 &&
        this.activeSearchBar &&
        !this.isOpenMenu &&
        !this.showResultsView &&
        this.searchHistoryService.getHistorySearchList().length > 0
      )
    },
  },

  watch: {
    searchedQuery(newVal) {
      this.searchResults(newVal)
    },
    '$route.path'() {
      this.loadingResults = false
      this.clearResultsAndQuery()
      this.clearTextAndProdtcCategories()
      this.activeSearchBar = false
    },
  },

  mounted() {
    this.searchHistoryService = new SearchHistory()
  },

  methods: {
    hoverItem(item) {
      this.activeItemBav = item
    },
    closeNavBottom() {
      this.activeItemBav = null
    },
    clearHistory() {
      this.searchHistoryService.clearHistoryList()
    },
    pickStringFromHistory(srting) {
      this.searchedQuery = srting
    },

    deleteItem(string) {
      this.searchHistoryService.deleteItemFromSearchHistoryList(string)
    },

    activateSearchBar() {
      this.activeSearchBar = true
    },

    pushToSearchPage() {
      if (this.searchedQuery.length > 1 && this.pickedTextCategory === null) {
        const tempQuery = {}
        if (this.pickedCategory) {
          tempQuery.searchedCategory = this.pickedCategory.id
        }
        this.searchHistoryService.pushToSearchHistoryList(this.searchedQuery)
        this.$router.push({
          name: 'SearchPage',
          query: tempQuery,
          params: {
            searchedString: this.searchedQuery,
          },
        })
      }
    },

    openSearchMenu() {
      this.isOpenMenu = !this.isOpenMenu
    },

    clearTextAndProdtcCategories() {
      this.pickedCategory = null
      this.pickedTextCategory = null
    },

    clearResultsAndQuery() {
      this.searchedQuery = ''
      this.fetchedSearchResults = {}
    },

    pickCategory(category) {
      this.pickedTextCategory = null
      this.pickedCategory = category
      this.clearResultsAndQuery()
    },

    pickTextCategory(textCategory) {
      this.pickedCategory = null
      this.pickedTextCategory = textCategory
      this.clearResultsAndQuery()
    },

    clearCategory() {
      this.pickedCategory = null
      this.clearResultsAndQuery()
    },

    clearTextCategory() {
      this.pickedTextCategory = null
      this.clearResultsAndQuery()
    },

    disactiveSearchBar() {
      this.clearResultsAndQuery()
      this.clearTextAndProdtcCategories()
      this.activeSearchBar = false
      this.isOpenMenu = false
    },

    searchResults: debounce(async function (queryString) {
      this.fetchedSearchResults = {}
      if (queryString.length > 1) {
        this.loadingResults = true
        this.isOpenMenu = false

        const scopeType =
          this.pickedTextCategory !== null ? 'article' : 'catalog'

        const categoryIdOrArticleType =
          this.pickedTextCategory !== null
            ? this.pickedTextCategory.articleType
            : this.pickedCategory === null
            ? ''
            : this.pickedCategory.id

        const [err, results] = await fetchSearchedItems(
          queryString,
          scopeType,
          categoryIdOrArticleType
        )

        if (results) {
          this.searchHistoryService.pushToSearchHistoryList(this.searchedQuery)
          this.fetchedSearchResults = results
        }
        // TODO обработка ошибки
        if (err) {
          console.error(err)
        }

        this.loadingResults = false
      }
    }, 1000),
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
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

  // &::before {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   width: 100%;
  //   height: 0vh;
  //   background: #1e1e1e;
  //   z-index: 5;
  //   transition: 0.3s;
  //   opacity: 0;
  // }
}

.header__search-bg {
  position: absolute;
  top: 0;
  width: 100%;
  height: 0vh;
  background: #1e1e1e;
  z-index: 5;
  transition: 0.3s;
  opacity: 0;
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

.header__box {
  transition: 0.3s;
  border-radius: 0;
  background-color: #fff;
}

.header__bottom {
  display: flex;
  justify-content: space-between;
  height: 8rem;
}

.header {
  &.active-search {
    // &::before {
    //   content: '';
    //   position: absolute;
    //   top: 0;
    //   width: 100%;
    //   height: 100vh;
    //   background: rgba(#1e1e1e, 0.8);
    //   z-index: 5;
    //   opacity: 1;
    // }
    .header__search-bg {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100vh;
      background: rgba(#1e1e1e, 0.8);
      z-index: 5;
      opacity: 1;
    }
    .header__box {
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 10;
      border-radius: 0px 0px 24px 24px;
    }
    .header__top {
      border-bottom: none;
    }
    .header__inner {
      padding-bottom: 24px;
    }
  }
}
.header__search-box {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(100%);
  z-index: 10;
}

.search__variants {
  z-index: 20;
}
</style>