<template>
  <el-tabs :tab-position="tabPosition" style="height: 100%;">
    <el-tab-pane label="右标签1">右标签1</el-tab-pane>
    <el-tab-pane label="右标签2">右标签2</el-tab-pane>
    <el-tab-pane label="右标签3">右标签3</el-tab-pane>
    <el-tab-pane label="右标签4">右标签4</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data() {
    return {
      tabPosition: 'right'
    };
  }
}
</script>


<style scope>
  .el-tabs--right .el-tabs__item.is-right{
    width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 5px 0 10px;
    text-align: left;
  }
</style>
