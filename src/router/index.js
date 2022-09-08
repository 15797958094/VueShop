//配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'

//使用插件
Vue.use(VueRouter);



//重写VueRouter中原型对象上的push方法 解决push多次传相同参数报错的问题
let originPush = VueRouter.prototype.push;
//重写replace方法
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location, resolve, reject){
  if( resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location,()=>{},()=>{})
  }
}

VueRouter.prototype.replace = function(location, resolve, reject){
  if( resolve && reject ){
    originReplace.call(this, location, resolve, reject)
  }else{
    originReplace.call(this, location, ()=>{}, ()=>{});
  }
}

export default new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {y: 0}
  }
})