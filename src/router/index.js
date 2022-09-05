//配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';

//使用插件
Vue.use(VueRouter);

import Home from '@/views/Home'
import Search from '@/views/Search'
import Login from '@/views/Login'
import Register from '@/views/Register'

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
  routes:[
    {
      path:'/home',
      component:Home,
      meta:{
        show:true
      }
    },
    {
      name:'search',
      path:'/search/:keyWord',
      component:Search,
      meta:{
        show:true,
        // typeShow:true
      },
      //路由组件传递props参数 
      // props:true//仅适用params 将参数作为props中的参数,
      //对象写法
      // props:{a:1,b:2},
      //函数写法
      props:(route) => {
        return {
          par:route.params.keyWord,
          que:route.query.k
        }
      }

    },
    {
      path:'/register',
      component:Register,
      meta:{
        show:false,
      }
    },
    {
      path:'/login',
      component:Login,
      meta:{
        show:false
      }
    },
    {
      //重定向 访问/
      path:'*',
      redirect:'/home'
    }
  ]
})