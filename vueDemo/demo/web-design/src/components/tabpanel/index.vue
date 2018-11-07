<template>
	<div class="des-tabpanel">
		<ul class="tab-head">
			<li class="item" :class="{'selected':selectItem === index}" v-for="(item,index) in navList" @click="itemSelect(index)">
				<div v-if="index===0" class="background-cube"></div>
	    		<div class="text">{{item.text}}</div>
			</li>
	    </ul>
	    <div class="tab-body">
	    	<slot name="content"></slot>
	    </div>
	</div>
</template>

<script>
export default {
	name:"des-tabs",
	props: {
		//选中标签
		selectItem: {
            type: Number,
            default: 0
       },
       navList : {
       		type : Array,
       		required : true
       }
  },
  	methods:{
	    itemSelect(index){
	    	this.$emit("selectPanel",index);
	    	var translateX = index * 100 + "%";
	    	this.$el.querySelector('.background-cube').style = "transform: translateX("+translateX+");"
	    }
	}
}
</script>

<style lang="scss" scoped>
.des-tabpanel{
  height: 100%;
  width: 100%;
  
  >.tab-head{
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    height: 40px;
    background: #F2F2F3;
    list-style: none;
    margin: 0;
    padding: 0;
    
    >.item{
      position: relative;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      list-style: none;
      padding: 0 10px;
      
      >.background-cube{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: calc(100% + 1px);
        background: #fff;
        transition: all 0.4s ease-in-out;
        z-index: 5;
      }
      
      >.text{
        width: 100%;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color:#0e90d2;
        z-index: 10;
      }
    }
    >.item.selected>.text{   
      color:#333;
    }
  }
  
  >.tab-body{
    height: -webkit-calc(100% - 40px);
    height: -moz-calc(100% - 40px);
    height: calc(100% - 40px);
    background: #fff;
    
    >.item{
      position: relative;
      height: 100%;
      overflow: hidden;
    }
  }
  
}
</style>