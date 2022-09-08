import {reqGetDetail} from '@/api/index'

const state = {
  goodsDetail:{
    "valuesSkuJson": "{\"5|7\":4,\"6|7\":5,\"5|8\":6,\"6|8\":7}",
    "price": 999,
    "categoryView": {
        "id": 61,
        "category1Id": 2,
        "category1Name": "手机",
        "category2Id": 13,
        "category2Name": "手机通讯",
        "category3Id": 61,
        "category3Name": "手机"
    },
    "spuSaleAttrList": [
        {
            "id": 3,
            "spuId": 2,
            "baseSaleAttrId": 1,
            "saleAttrName": "颜色",
            "spuSaleAttrValueList": [
                {
                    "id": 5,
                    "spuId": 2,
                    "baseSaleAttrId": 1,
                    "saleAttrValueName": "冰雾白",
                    "saleAttrName": "颜色",
                    "isChecked": "1"
                },
                {
                    "id": 6,
                    "spuId": 2,
                    "baseSaleAttrId": 1,
                    "saleAttrValueName": "明月灰",
                    "saleAttrName": "颜色",
                    "isChecked": "0"
                }
            ]
        },
        {
            "id": 4,
            "spuId": 2,
            "baseSaleAttrId": 2,
            "saleAttrName": "版本",
            "spuSaleAttrValueList": [
                {
                    "id": 7,
                    "spuId": 2,
                    "baseSaleAttrId": 2,
                    "saleAttrValueName": "4G+128G",
                    "saleAttrName": "版本",
                    "isChecked": "1"
                },
                {
                    "id": 8,
                    "spuId": 2,
                    "baseSaleAttrId": 2,
                    "saleAttrValueName": "8G+128G",
                    "saleAttrName": "版本",
                    "isChecked": "0"
                }
            ]
        }
    ],
    "skuInfo": {
        "id": 4,
        "spuId": 2,
        "price": 999,
        "skuName": "Redmi 10X 4G Helio G85游戏芯 4800万超清四摄 5020mAh大电量 小孔全面屏 128GB大存储 4GB+128GB 冰雾白 游戏智能手机 小米 红米",
        "skuDesc": "Redmi 10X 4G Helio G85游戏芯 4800万超清四摄 5020mAh大电量 小孔全面屏 128GB大存储 4GB+128GB 冰雾白 游戏智能手机 小米 红米",
        "weight": "1.00",
        "tmId": 1,
        "category3Id": 61,
        "skuDefaultImg": "http://47.93.148.192:8080/group1/M00/00/01/rBHu8l-rgJqAHPnoAAF9hoDNfsc505.jpg",
        "isSale": 1,
        "createTime": "2021-12-10 09:31:42",
        "skuImageList": [
            {
                "id": 18,
                "skuId": 4,
                "imgName": "2b78b6fdabfd2fbe.jpg",
                "imgUrl": "http://47.93.148.192:8080/group1/M00/00/01/rBHu8l-rgJqAHPnoAAF9hoDNfsc505.jpg",
                "spuImgId": 7,
                "isDefault": "1"
            },
            {
                "id": 19,
                "skuId": 4,
                "imgName": "5d5c57ab443f5fbb.jpg",
                "imgUrl": "http://47.93.148.192:8080/group1/M00/00/02/rBHu8l-rgJqAbNFZAADi9nT5SuM524.jpg",
                "spuImgId": 8,
                "isDefault": "0"
            },
            {
                "id": 20,
                "skuId": 4,
                "imgName": "cef3c55b8caad783.jpg",
                "imgUrl": "http://47.93.148.192:8080/group1/M00/00/02/rBHu8l-rgJqAMq2nAAGtjwY17fA932.jpg",
                "spuImgId": 9,
                "isDefault": "0"
            },
            {
                "id": 21,
                "skuId": 4,
                "imgName": "6eaaecc91b9ad059.jpg",
                "imgUrl": "http://47.93.148.192:8080/group1/M00/00/02/rBHu8l-rgJqAXjRKAAFpxKwrSvY886.jpg",
                "spuImgId": 10,
                "isDefault": "0"
            },
            {
                "id": 22,
                "skuId": 4,
                "imgName": "b7bea7af48e935fd.jpg",
                "imgUrl": "http://47.93.148.192:8080/group1/M00/00/02/rBHu8l-rgJqARA19AAFuZ18W_ks439.jpg",
                "spuImgId": 11,
                "isDefault": "0"
            }
        ],
        "skuAttrValueList": [
            {
                "id": 13,
                "attrId": 106,
                "valueId": 176,
                "skuId": 4,
                "attrName": "手机一级",
                "valueName": "安卓手机"
            },
            {
                "id": 14,
                "attrId": 107,
                "valueId": 177,
                "skuId": 4,
                "attrName": "二级手机",
                "valueName": "小米"
            },
            {
                "id": 15,
                "attrId": 23,
                "valueId": 14,
                "skuId": 4,
                "attrName": "运行内存",
                "valueName": "4G"
            },
            {
                "id": 16,
                "attrId": 24,
                "valueId": 82,
                "skuId": 4,
                "attrName": "机身内存",
                "valueName": "128G"
            }
        ],
        "skuSaleAttrValueList": [
            {
                "id": 7,
                "skuId": 4,
                "spuId": 2,
                "saleAttrValueId": 5,
                "saleAttrId": 1,
                "saleAttrName": "颜色",
                "saleAttrValueName": "冰雾白"
            },
            {
                "id": 8,
                "skuId": 4,
                "spuId": 2,
                "saleAttrValueId": 7,
                "saleAttrId": 2,
                "saleAttrName": "版本",
                "saleAttrValueName": "4G+128G"
            }
        ]
    }
}
  
}

const actions = {
 async getGoodsDetail({commit}, msg) {
    const res = await reqGetDetail(msg)
    if(res.code === 200) {
      commit('GETGOODSDETAIL', res)
    }
  }
}
const mutations = {
  GETGOODSDETAIL(state, res) {
    state.goodsDetail = res.data
  }
}
const getters = {}

export default {
  actions,
  mutations,
  state,
  getters
}
