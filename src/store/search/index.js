//search模块
import {reqGetSearchInfo} from '@/api'

const state = {
  searchList:[]
}

const actions = {
  async getSearchList({commit}, params = {}) {
    const res = await reqGetSearchInfo(params)
    if (res.code === 200) {
      commit('GETSEARCHLIST',res.data)
    }
  }
}

const mutations = {
  GETSEARCHLIST(state, res) {
    state.searchList = res
  }
}

const getters = {
  goodsList(state) {
    return state.searchList.goodsList || []
  },
  attrsList(state) {
    return state.searchList.attrsList || []
  },
  trademarkList() {
    return state.searchList.trademarkList || []
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}