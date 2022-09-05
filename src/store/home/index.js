//home模块
import { reqCategoryList, reqGetBannerList, reqGetFloorList} from "@/api"

const state = {
  categoryList:[],
  bannerList:[],
  floorList:[]
}

const actions = {
 async getCategoryList({commit}) {
   const res = await reqCategoryList()
    commit('GETCATEGORYLIST', res)
  },

  //获取轮播图数据
  async getBannerList({commit}) {
    const res = await reqGetBannerList()
    commit('GETBANNERLIST', res)
  },

  async getFloorList({commit}) {
    const {data:res} = await reqGetFloorList()
    commit('GETFLOORLIST',res)
  }
}

const mutations = {
  GETCATEGORYLIST(state, res) {
    if( res.code === 200 ) {
      state.categoryList = res.data.filter(x => x.categoryId !== res.data.length)
    }
  },
  GETBANNERLIST(state, res) {
    if(res.code === 200) {
      state.bannerList = res.data
    }
  },
  GETFLOORLIST(state, res) {
    state.floorList = res
  }
}

const getters = {}

export default {
  state,
  actions,
  mutations,
  getters
}