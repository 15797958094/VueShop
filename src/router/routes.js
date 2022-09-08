import Home from '@/views/Home'
import Search from '@/views/Search'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Detail from '@/views/Detail'

export default [
  {
    path:'/detail/:id',
    component:Detail,
    meta:{
      show:true
    }
  },
  {
    path:'/home',
    component:Home,
    meta:{
      show:true
    }
  },
  {
    name:'search',
    path:'/search/:keyword?',
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