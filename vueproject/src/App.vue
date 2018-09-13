<template>
  <div id="app">
    <el-row class="main">
      <el-col :span="24">
        <div class="p-design-header">
          <headerNavBar></headerNavBar>
        </div>
      </el-col>
      <el-col :span="24" class="p-design-body">
        <el-col :span="5" class="p-all-height">
          <div class="p-design-left">
            左侧
          </div>
        </el-col>
        <el-col :span="14" class="p-all-height">
          <div class="p-design-content">主体</div>
          <div class="p-design-bottom">主体底部</div>
        </el-col>
        <el-col :span="5" class="p-all-height">
          <div class="p-design-right">
            右侧
          </div>
        </el-col>
      </el-col>
      <el-col :span="24">
        <div class="p-design-foot">
          底部
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import headerNavBar from './components/headerNavBar.vue'
export default {
  name: 'App',
  components:{
	  headerNavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height:100%;
}
*{
  margin: 0;
  padding: 0;
}
html,body,.main{
  width:100%;
  height: 100%;
}
.p-all-height{
  height:100%;
}
.p-design-header{
  height: 70px;
  background-color: #02a6ff;
}
.p-design-body{
  height:calc(100% - 100px);
  height:-moz-calc(100% - 100px);
  height:-webkit-calc(100% - 100px);
}
.p-design-left{
  height: 100%;
  background-color: #7ccef5;
}
.p-design-right{
  height: 100%;
  background-color: #c9e7f5;
}
.p-design-content{
  width: 100%;
  height:calc(100% - 100px);
  height:-moz-calc(100% - 100px);
  height:-webkit-calc(100% - 100px);
  background-color: #fff;
}
.p-design-bottom{
  height: 100px;
  width: 100%;
  background-color: #02a6ff;
}
.p-design-foot{
  height: 30px;
  width: 100%;
  background-color: #043d57;
}
</style>
