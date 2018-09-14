<template>
  <el-tabs :tab-position="tabPosition" style="height: 100%;">
    <el-tab-pane label="左标签1">左标签1</el-tab-pane>
    <el-tab-pane label="左标签2">左标签2</el-tab-pane>
    <el-tab-pane label="左标签3">左标签3</el-tab-pane>
    <el-tab-pane label="左标签4">左标签4</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data() {
    return {
      tabPosition: 'left'
    };
  }
}
</script>


<style scope>
  .el-tabs--left .el-tabs__item.is-left {
    width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 10px 0 5px;
    text-align: right;
  }
</style>
