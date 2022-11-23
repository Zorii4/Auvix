// use only client(mounted hook or <client-only> wrapped component)

export class SearchHistory {
  #searchHistoryList = []

  constructor() {
    const historyListFromLocalStorage =
      window.localStorage.getItem('searchHistory')

    if (historyListFromLocalStorage) {
      this.#searchHistoryList = JSON.parse(historyListFromLocalStorage)
    }
  }

  getHistorySearchList() {
    return this.#searchHistoryList
  }

  pushToSearchHistoryList(string) {
    const isAlreadyExist =
      this.#searchHistoryList.findIndex(
        (el) => el === String(string).toLowerCase()
      ) !== -1
    if (!isAlreadyExist) {
      this.#searchHistoryList.push(String(string).toLowerCase())
      this._saveListToLS()
    }
  }

  deleteItemFromSearchHistoryList(string) {
    this.#searchHistoryList = this.#searchHistoryList.filter(
      (el) => el !== string.toLowerCase()
    )
    this._saveListToLS()
  }

  clearHistoryList() {
    this.#searchHistoryList = []
    window.localStorage.removeItem('searchHistory')
  }

  _saveListToLS() {
    window.localStorage.setItem(
      'searchHistory',
      JSON.stringify(this.#searchHistoryList)
    )
  }
}
