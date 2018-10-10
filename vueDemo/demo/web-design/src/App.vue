<template>
  <div id="app">
    <div class="main">
      <div class="p-design-header">
        <headerNavBar></headerNavBar>
        <breadcrumbNav></breadcrumbNav>
      </div>
      <div class="p-design-body clearFix">
        <div class="p-design-left">
          <asideLeft></asideLeft>
        </div>
        <div  class="p-design-main">
          <div class="p-design-content">
          </div>
          <div class="p-design-bottom">
            <contentBottom></contentBottom>
          </div>
        </div>
        <div class="p-design-right">
          <asideRight></asideRight>
        </div>
      </div>
      <div class="p-design-foot">
          
      </div>
    </div>
  </div>
</template>

<script>
import headerNavBar from './components/headerNavBar.vue'
import breadcrumbNav from './components/breadcrumbNav.vue'
import asideLeft from './components/asideLeft.vue'
import asideRight from './components/asideRight.vue'
import contentBottom from './components/contentBottom.vue'

export default {
  name: 'App',
  components:{
    headerNavBar,
    breadcrumbNav,
    asideLeft,
    asideRight,
    contentBottom
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
html,body,div,p,table,ul,li{
  margin: 0;
  padding: 0;
}
html,body,.main{
  width:100%;
  height: 100%;
  font-size: 14px;
}
ul,li{
  list-style: none;
}
.p-design-header{
  width:100%;
  height: 70px;
}
.p-design-body{
  height:calc(100% - 100px);
  height:-moz-calc(100% - 100px);
  height:-webkit-calc(100% - 100px);
}
.clearFix:after{
  display:block;
  content:'';
  clear:both;
  zoom:1;
}
.p-design-left{
  float:left;
  width:15%;
  height: 100%;
  border-right:1px solid #ccc;
  box-sizing: border-box;
}
.p-design-main{
  float:left;
  width:70%;
  height: 100%;
  box-sizing: border-box;
}
.p-design-right{
  float:left;
  width:15%;
  height: 100%;
  border-left:1px solid #ccc;
  box-sizing: border-box;
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
