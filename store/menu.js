import { getMenu } from '@/API-services/menuSevice.js'

export const state = () => ({
  menu: {},
})

export const mutations = {
  setMenu(state, array) {
    state.menu = array
  },
}

export const actions = {
  async getMainMenu(ctx) {
    const [data, err] = await getMenu()
    if (err) console.error(err)
    else ctx.commit('setMenu', data)
  },
}
