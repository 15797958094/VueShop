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


// export const reqGetBannerList = () => {
//   return reqMock({
//     url:'/banner',
//     method:'GET'
//   })
// }