<template>
  <div class="p-tab-nav clearFix">
    <div class="tab-body">
      <div v-show="selectItem===0" class="item">
        标签1
      </div>
      <div v-show="selectItem===1"  class="item">
        标签2
      </div>
      <div v-show="selectItem===2"  class="item">
        标签3
      </div>
      <div v-show="selectItem===3"  class="item">
        标签4
      </div>
    </div>
    <div class="tab-head">
      <div class="item" @click="selectItem = 0" :class="{'selected':selectItem === 0}">标签1</div>
      <div class="item" @click="selectItem = 1" :class="{'selected':selectItem === 1}">标签2</div>
      <div class="item" @click="selectItem = 2" :class="{'selected':selectItem === 2}">标签3</div>
      <div class="item" @click="selectItem = 3" :class="{'selected':selectItem === 3}">标签4</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectItem : 0
    };
  }
}
</script>


<style scoped>
  .p-tab-nav{
    width: 100%;
    height:100%;
  }
  .tab-head{
    height: 30px;
    font-size:14px;
    width:100%;
    overflow:hidden;
  }
  .tab-head .item{
    float: left;
    font-size: 14px;
    height: 100%;
    box-sizing: border-box;
    text-align: center;
    background: #fff;
    border-right: 1px solid #ccc;
    color: #333;
    padding: 5px 10px;
    word-break: break-all;
    cursor: pointer;
  }
  .tab-head .selected{
    background: #09f;
    color: #fff;
  }
  .tab-body{
    box-sizing: border-box;
    width: 100%;
    height:calc(100% - 30px);
    height:-moz-calc(100% - 30px);
    height:-webkit-calc(100% - 30px);
    border-bottom: 1px solid #ccc;
  }
  .tab-body .item{
    padding:10px;
    box-sizing: border-box;
  }
</style>
