<template>
	<div class="des-tabpanel">
		<ul class="tab-head">
	    	<li class="item" @click="itemSelect(0)" :class="{'selected':selectItem === 0}">
	    		<div class="background-cube"></div>
	    		<div class="text">面板1</div>
	    	</li>
	    	<li class="item" @click="itemSelect(1)" :class="{'selected':selectItem === 1}">
	    		<div class="text">面板2</div>
	    	</li>
	    </ul>
	    <div class="tab-body">
	    	<div v-show="selectItem===0"  class="item">
		      	面板1
		    </div>
		    <div v-show="selectItem===1"  class="item">
		      	面板2
		    </div>
	    </div>
	</div>
</template>

<script>

export default {
  name: "tab-panel",
  components: {

  },
  data(){
    return {
      selectItem : 0
    }
  },
  mounted(){

  },
  methods:{
    itemSelect(index){
    	this.selectItem = index;
    	var translateX = index * 100 + "%";
    	this.$el.querySelector('.background-cube').style = "transform: translateX("+translateX+");"
    }
  }
};

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