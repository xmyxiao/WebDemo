<template>
  <div class="p-tab-nav right clearFix">
    <div class="tab-head">
      <div class="item" @click="selectItem = 0" :class="{'selected':selectItem === 0}">标签1</div>
      <div class="item" @click="selectItem = 1" :class="{'selected':selectItem === 1}">标签2</div>
      <div class="item" @click="selectItem = 2" :class="{'selected':selectItem === 2}">标签3</div>
      <div class="item" @click="selectItem = 3" :class="{'selected':selectItem === 3}">标签4</div>
    </div>
    <div class="tab-body">
      <div v-show="selectItem===0" class="item">
        <div id="currentComponentEditor"></div>
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
    width: 30px;
    font-size:14px;
    height:100%;
    float:left;
    overflow:hidden;
  }
  .tab-head .item{
    font-size: 14px;
    text-align: center;
    background: #fff;
    border-bottom: 1px solid #ccc;
    color: #333;
    padding: 5px;
    word-break: break-all;
    cursor: pointer;
  }
  .tab-head .selected{
    background: #09f;
    color: #fff;
  }
  .tab-body{
    box-sizing: border-box;
    height: 100%;
    width:calc(100% - 30px);
    width:-moz-calc(100% - 30px);
    width:-webkit-calc(100% - 30px);
    border-left: 1px solid #ccc;
    float:left;
  }
  .tab-body .item{
    padding:10px;
    box-sizing: border-box;
  }

  .p-tab-nav.right .tab-body{
    border-left: 0;
    border-right: 1px solid #ccc;
  }
  .p-tab-nav.right .tab-head{
    float:right;
  }
  .p-tab-nav.right .tab-body{
    float:right;
  }
</style>
