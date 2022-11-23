import { getData } from '@/API-services/interactiveService.js'

export const state = () => ({
  solutionsData: {},
})

export const mutations = {
  setSolutionsData(state, array) {
    state.solutionsData = array
  },
}

export const actions = {
  async getSolutionsData(ctx, id) {
    const [data, err] = await getData(id)
    if (err) console.error(err)
    else ctx.commit('setSolutionsData', data)
  },
}