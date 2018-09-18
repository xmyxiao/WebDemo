<template>
    <ul class="p-header-nav">
      <li class="item">导航1</li>
      <li class="item">导航2</li>
      <li class="item">导航3</li>
      <li class="item">导航4</li>
    </ul>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="scss">
  .p-header-nav{
    width:100%;
    height:40px;
    background-color:#545c64;
    box-sizing: border-box;
    border-bottom: 1px solid #757575;
    .item{
      float: left;
      height: 39px;
      line-height: 39px;
      color: #fff;
      background-color: #545c64;
      padding: 0 20px;
      cursor: pointer;
    }
  }
  .p-header-nav:before{
    display: table;
  }
  .p-header-nav:after{
    clear: both;
  }
</style>
