<template>
<div>
  <h1>我是搜索</h1>
  <TypeNav :typeShow="$route.meta.typeShow"></TypeNav>
  <h2>query参数{{ $route.query }}</h2>
  <h2>params参数{{ par }}</h2>
  <h2></h2>
</div>
</template>

<script>
export default {
    name: "Search",
    props: ["par", "que"],

}
</script>

<style>

</style>