import Vue from 'vue'
import App from './App.vue'
//测试能否接收三级联动数据
import { reqCategoryList } from './api/index';

//引入vuex仓库
import store from './store/index'

//注册全局三级联动组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)

//注册全局轮播图组件
import Carousel from '@/components/Carousel'
Vue.component(Carousel.name, Carousel)

import "@/mock/mockServer"
import "swiper/css/swiper.css"

//引入路由
import router from '@/router'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  mounted(){
    console.log(this)
    this.$store.dispatch('getCategoryList')
  }
}).$mount('#app')
