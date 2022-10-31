import { getData } from '@/API-services/interactiveService.js'

export const state = () => ({
  interactiveData: {},
})

export const mutations = {
  setInteractiveData(state, { id, data }) {
    state.interactiveData[id] = data
  },
}

export const actions = {
  async getInteractiveData(ctx, id) {
    const [data, err] = await getData(id)
    if (err) console.error(err)
    else ctx.commit('setInteractiveData', { id, data })
  },
}
