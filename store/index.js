export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('menu/getMainMenu')
    await dispatch('catalog/fetchOptionsList')
  },
}
