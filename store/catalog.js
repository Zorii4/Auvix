import { fetchOptionsList } from '@/API-services/catalogService'
import { fetchCategories } from '~/API-services/categoriesService'

export const state = () => ({
  optionsList: [],
  categoriesList: [],
})

export const mutations = {
  setOptions(state, data) {
    state.optionsList = data
  },
  setCategories(state, data) {
    state.categoriesList = data
  },
}

export const actions = {
  async fetchOptionsList({ commit }) {
    const [err, data] = await fetchOptionsList()
    if (data) {
      const mappedData = data.flat()
      commit('setOptions', mappedData)
      return
    }
    console.error(err)
  },
  async fetchCategoriesList({ commit }) {
    const [err, data] = await fetchCategories()
    if (data) {
      commit('setCategories', data)
      return
    }
    console.error(err)
  },
}
