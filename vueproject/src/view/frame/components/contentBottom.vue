<template>
  <el-tabs :tab-position="tabPosition" style="height: 100%;" class="p-content-bottom">
    <el-tab-pane label="底部标签1">底部标签1</el-tab-pane>
    <el-tab-pane label="底部标签2">底部标签2</el-tab-pane>
    <el-tab-pane label="底部标签3">底部标签3</el-tab-pane>
    <el-tab-pane label="底部标签4">底部标签4</el-tab-pane>
  </el-tabs>
</template>

<script>
  export default {
    data() {
      return {
        tabPosition: 'bottom'
      };
    }
  }
</script>

<style scope>
  .el-tabs--bottom .el-tabs__header.is-bottom{
    margin-top:0;
  }
  .p-content-bottom .el-tabs__content{
    height:calc(100% - 40px);
    height:-moz-calc(100% - 40px);
    height:-webkit-calc(100% - 40px);
  }
</style>
