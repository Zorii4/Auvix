// use only client(mounted hook or <client-only> wrapped component)

export class SearchHistory {
  _searchHistoryList = []

  constructor() {
    const historyListFromLocalStorage =
      window.localStorage.getItem('searchHistory')

    if (historyListFromLocalStorage) {
      this._searchHistoryList = JSON.parse(historyListFromLocalStorage)
    }
  }

  getHistorySearchList() {
    return this._searchHistoryList
  }

  pushToSearchHistoryList(string) {
    const isAlreadyExist =
      this._searchHistoryList.findIndex(
        (el) => el === String(string).toLowerCase()
      ) !== -1
    if (!isAlreadyExist) {
      this._searchHistoryList.push(String(string).toLowerCase())
      this._saveListToLS()
    }
  }

  deleteItemFromSearchHistoryList(string) {
    this._searchHistoryList = this._searchHistoryList.filter(
      (el) => el !== string.toLowerCase()
    )
    this._saveListToLS()
  }

  clearHistoryList() {
    this._searchHistoryList = []
    window.localStorage.removeItem('searchHistory')
  }

  _saveListToLS() {
    window.localStorage.setItem(
      'searchHistory',
      JSON.stringify(this._searchHistoryList)
    )
  }
}
