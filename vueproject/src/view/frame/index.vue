<template>
  <div id="frame">
    <el-row class="main">
      <el-col :span="24">
        <div class="p-design-header">
          <headerNavBar></headerNavBar>
          <breadcrumbNav></breadcrumbNav>
        </div>
      </el-col>
      <el-col :span="24" class="p-design-body">
        <el-col :span="5" class="p-all-height">
          <div class="p-design-left">
            <asideLeft></asideLeft>
          </div>
        </el-col>
        <el-col :span="14" class="p-all-height">
          <div class="p-design-content">
            主体
          </div>
          <div class="p-design-bottom">
            <contentBottom></contentBottom>
          </div>
        </el-col>
        <el-col :span="5" class="p-all-height">
          <div class="p-design-right">
            <asideRight></asideRight>
          </div>
        </el-col>
      </el-col>
      <el-col :span="24">
        <div class="p-design-foot">
          <pageFoot></pageFoot>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import headerNavBar from './components/headerNavBar.vue'
import breadcrumbNav from './components/breadcrumbNav.vue'
import asideLeft from './components/asideLeft.vue'
import asideRight from './components/asideRight.vue'
import pageFoot from './components/pageFoot.vue'
import contentBottom from './components/contentBottom.vue'

export default {
  name: 'App',
  components:{
    headerNavBar,
    breadcrumbNav,
    asideLeft,
    asideRight,
    pageFoot,
    contentBottom
  }
}
</script>

<style>
#frame {
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
  font-size: 14px;
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
  border-right:1px solid #ccc;
}
.p-design-right{
  height: 100%;
  border-left:1px solid #ccc;
}
.p-design-content{
  width: 100%;
  height:calc(100% - 100px);
  height:-moz-calc(100% - 100px);
  height:-webkit-calc(100% - 100px);
  background-color: #fff;
}
.p-design-bottom{
  height: 99px;
  width: 100%;
  border-top:1px solid #ccc;
}
.p-design-foot{
  height: 29px;
  width: 100%;
  background-color:#545c64;
  color:#fff;
  border-top:1px solid #ccc;
}
</style>
