import Vue from 'vue'
import App from './App.vue'
//测试能否接收三级联动数据
import { reqCategoryList } from './api/index';

//引入vuex仓库
import store from './store/index'

//注册全局三级联动组件
import TypeNav from '@/pages/Home/TypeNav'

Vue.component(TypeNav.name, TypeNav);
//引入路由
import router from '@/router'
Vue.config.productionTip = false

let data = reqCategoryList();
console.log(App);
new Vue({
  render: h => h(App),
  router,
  store,
  mounted(){
    console.log(this)
  }
}).$mount('#app')
