import { fetchOptionsList } from '@/API-services/catalogService'

export const state = () => ({
  optionsList: [],
})

export const mutations = {
  setOptions(state, data) {
    state.optionsList = data
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
}
