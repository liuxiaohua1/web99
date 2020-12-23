<template>
  <p></p>
  <div id="wrapper">
    <div id="name">江西软件大学</div>
    <div id="content">江西软件大学简介</div>
    <div v-for="index in lists" :key="index">
      {{index.name}}
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang ="less" rel="stylesheet/less">
      #wrapper{
        background-color: blue;
        #name{
          background-color: brown;
          font: 5em sans-serif;
        }
      }
p{

}
</style>