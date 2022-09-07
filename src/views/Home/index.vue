<template>
<div>
  <TypeNav/>
  <listContainer/>
  <Recommend/>
  <Rank/>
  <Like/>
  <Floor v-for="item in floorList" :key="item.id" :list='item'/>
  <Brand/>
</div> 
</template>

<script>
import ListContainer from '@/views/Home/ListContainer'
import Recommend from '@/views/Home/Recommend'
import Rank from '@/views/Home/Rank'
import Like from '@/views/Home/Like'
import Floor from '@/views/Home/Floor'
import Brand from '@/views/Home/Brand'
import { mapState } from "vuex"


export default {
  name:'Home',
  mounted() {
    this.$store.dispatch("getFloorList")
  },
  computed: {
 ...mapState({
  floorList:state => state.home.floorList
 })
  },
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  methods:{
  
  }
}
</script>

<style>

</style>