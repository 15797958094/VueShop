<template>
      <div class="type-nav">
            <div class="container">
               <div @mouseleave="removeActive">
                 <h2 class="all" @mouseenter="changeActive">全部商品分类</h2>
                 <Transition name='sort' appear> 
                   <div class="sort" v-show="show">
                    <div class="all-sort-list2" @click="goSearch">
                        <div @mouseover="getIndex(index)"  :class="{'item':true,'item-active':index===activeIndex}" v-for="(c1, index) in categoryList" :key="c1.categoryId">
                            <h3>
                                <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{ c1.categoryName }}</a>
                            </h3>
                            <div class="item-list clearfix"  :style="{display:index === activeIndex ?'block':'none' }">
                                <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                                    <dl class="fore">
                                        <dt>
                                            <a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{c2.categoryName}}</a>
                                        </dt>
                                        <dd>
                                            <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                                                <a :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{c3.categoryName}}</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 </Transition>            
               </div>
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>
            </div>
        </div>
</template>

<script>
import search from '@/store/search';
import { mapState } from 'vuex';
export default {
  name:'TypeNav',
  props:['typeShow'],
  data(){
    return {
        activeIndex:-1,
        flag:true,
        show:true
    }
  },
  computed:{
   ...mapState({categoryList: state => state.home.categoryList})
  },
  mounted() {
        console.log(this.categoryList)
        this.show = false
    if(this.$route.path === '/home') {
        this.show = true
    }
    },
  methods:{
    goSearch(e) {
        let ele = e.target
        let {categoryname, category1id, category2id, category3id} = ele.dataset
        let query = {}
        let params = {}
        if(categoryname) {
                query = {categoryName:categoryname}
            if(category1id) {
                query.category1Id = category1id
            }else if(category2id) {
                query.category2Id = category2id
            }else{
                query.category3Id = category3id
            }
            if(this.$route.params) {
                 params = this.$route.params
            }
                this.$router.push({
                name:'search',
                query,
                params
            })
        }
    },
    removeActive() {
        this.activeIndex = -1
        if(this.$route.name === 'search') {
            this.show = false
        }
    },
    changeActive() {
        if(this.$route.name === 'search') {
         this.show = true
        }
},
    getIndex(index) {
        if (!this.flag) return
        this.flag = false
        this.activeIndex = index
        setTimeout(()=>{
        this.flag = true
        },50)

    },
  
  }
}
</script>

<style lang="less" scoped>
    .item-active {
        background-color: skyblue;
    }

    .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }
              
            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    // .item:hover{
                    //     background-color: skyblue;
                    // }
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                text-decoration:none;
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            visibility: visible;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                    }
                }
            }

       /* 下面我们会解释这些 class 是做什么的 */
         .sort-enter-active,
            .sort-leave-active {
            transition: all 0.5s ease;
            }
                

            .sort-enter-from {
                height: 0;
            }
            .sort-enter-to,
            .sort-leave-from {
                height: 461px;
            }
            .sort-leave-to {
                height: 0;
            }
            .sort-leave-to {
                height: 0;
            }
          
        }
    }

</style>