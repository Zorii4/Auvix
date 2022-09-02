import { getPage } from '@/components/API-services/modalPageService.js'

export const state = () => ({
  pageData: {}
})

export const mutations = {
  setPageData (state, array) {
    state.pageData = array
  }
}

export const actions = {
  async getModalPage(ctx, url) {
    const [data, err] = await getPage(url)
    if(err) console.error(err)
    else 
    ctx.commit("setPageData", data);
  }
}