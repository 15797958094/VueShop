<template>
  <div class="pagination">
    <button :disabled="pageNum===1" @click="$emit('getPageNum',pageNum-1)">上一页</button>
    <button v-if="startNumEndNum.start>1" @click="$emit('getPageNum',1)" :class="{active:pageNum === 1}">1</button>
    <button v-if="startNumEndNum.start>2">···</button>

    <button v-for="(num, index) in startNumEndNum.end" v-show="num>startNumEndNum.start-1" :key="index" 
      @click="$emit('getPageNum',num)"
      :class="{active:pageNum === num}"
      >{{ num }}</button>

    <button v-if="startNumEndNum.end<pageAll-1">···</button>
    <button v-if="startNumEndNum.end<pageAll" @click="$emit('getPageNum',pageAll)"
    :class="{active:pageNum === pageAll}"
    >{{ pageAll }}</button>
    <button :disabled="pageNum===pageAll" @click="$emit('getPageNum',pageNum+1)">下一页</button>

    <button style="margin-left: 30px">{{ total }}</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props:['pageNum','pageSize','total','continue'],
  computed: {
    pageAll(){
      return Math.ceil(this.total/this.pageSize)
    },
    startNumEndNum() {
      let start = 0, end = this.total
      if(this.continue > this.pageAll) {
        start = 1
        end = this.pageAll
      } else {
        start = this.pageNum - parseInt(this.continue/2)
        end = this.pageNum + parseInt(this.continue/2)
        if(start < 1) {
          start = 1
          end = this.continue
        }
        if(end > this.pageAll) {
          end = this.pageAll
          start = this.pageAll - this.continue + 1
        }
      }
      return {start, end}
    }
  }
};
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
