//对axios进行二次封装
import axios from "axios"
import nprogress from 'nprogress'
import "nprogress/nprogress.css"

const requests =  axios.create({
  //配置对象
  //基础路径 会默认携带api 不用写/api
  baseURL:'/api',
  //请求超时
  timeout:5000
})

//请求拦截器发请求之前请求拦截器可以检测到,可以处理一些事情
requests.interceptors.request.use(config => {
  //config中有一个重要属性headers
  nprogress.start()
  return config;
})

//响应拦截器 可以检测到响应回来的数据，进行处理一些事情
requests.interceptors.response.use(res =>{
  nprogress.done()
  return res.data
}, err => {
  //响应失败的回调函数
  return Promise.reject(new Error("faile"));
})

export default requests