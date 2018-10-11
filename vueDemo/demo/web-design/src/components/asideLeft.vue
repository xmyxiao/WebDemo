<template>
  <div class="p-tab-nav clearFix">
    <div class="tab-head">
      <div class="item" @click="selectItem = 0" :class="{'selected':selectItem === 0}">
      	标签1
      </div>
      <div class="item" @click="selectItem = 1" :class="{'selected':selectItem === 1}">标签2</div>
      <div class="item" @click="selectItem = 2" :class="{'selected':selectItem === 2}">标签3</div>
      <div class="item" @click="selectItem = 3" :class="{'selected':selectItem === 3}">标签4</div>
    </div>
    <div class="tab-body">
      <div v-show="selectItem===0" class="item">
        	<ul class="viewlist">
				    <li v-for="(item,index) in views"
				        :key="index"
				        draggable="true"
				        @dragstart="handleDrag(item,$event)">{{item.cname}}</li>
				  </ul>
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
  name: 'leftList',
  data () {
    return {
    	selectItem : 0,
      views: [
        { name: 'FInput', cname: '输入框' },
        { name: 'FRadioGroup', cname: '单选按钮组' },
        { name: 'FSelect', cname: '下拉框' },
        { name: 'FDate', cname: '日期时间选择器' },
        { name: 'FCheckBoxGroup', cname: '复选框组' },
        { name: 'FButtonGroup', cname: '按钮组' },
        { name: 'FSwitch', cname: '开关按钮' },
        { name: 'FTextArea', cname: '多行文本框' }
      ]
    }
  },
  methods: {
    handleDrag (item, event) {
      event.dataTransfer.setData('component', JSON.stringify(item))
      // console.log(item, event)
    }
  },
  mounted () {

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
    cursor: pointer
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
</style>
<style lang="scss" scoped>
.viewlist {
  margin: 0;
  padding: 0;
  list-style: none;
  > li {
    margin: 0;
    padding: 0;
    height: 30px;
    line-height: 30px;
    background: aliceblue;
    cursor: move;
  }
  > li:hover {
    background: bisque;
  }
}
</style>