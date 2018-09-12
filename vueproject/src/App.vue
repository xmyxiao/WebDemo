<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
        <div class="p-design-header">
          头部
        </div>
      </el-col>
      <el-col :span="24" class="p-design-body">
        <el-col :span="5">
          <div class="p-design-left">
            左侧
          </div>
        </el-col>
        <el-col :span="14">
          <div class="p-design-content">主体</div>
          <div class="p-design-foot">底部</div>
        </el-col>
        <el-col :span="5">
          <div class="p-design-right">
            右侧
          </div>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
  margin: 0;
  padding: 0;
}
.p-design-header{
  height: 50px;
  background-color: #02a6ff;
}
.p-design-body{
  height: 100%;
}
.p-design-left{
  height: 200px;
  background-color: #7ccef5;
}
.p-design-right{
  height: 200px;
  background-color: #c9e7f5;
}
.p-design-content{
  width: 100%;
  height: 150px;
  background-color: #fff;
}
.p-design-foot{
  height: 50px;
  width: 100%;
  background-color: #043d57;
}
</style>
