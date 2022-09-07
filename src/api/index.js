import requests from "./request"

import reqMock from './mockAjax'


//三级联动接口
// /api/product/getBaseCategoryList get 无参数

export const reqCategoryList = () => {

  return requests({
    url:'/product/getBaseCategoryList',
    method:'GET'
  })
}


export const reqGetBannerList = () => reqMock.get('/banner')
export const reqGetFloorList = () => reqMock.get('/floor')

//获取搜索模块数据,请求地址/api/list 请求方式post 参数需要

export const reqGetSearchInfo = params => requests({
  url:'/list',
  method:'POST',
  data:params
})