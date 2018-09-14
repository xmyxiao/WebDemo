<template>
  <div class="p-design-breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>路径1</el-breadcrumb-item>
      <el-breadcrumb-item>路径2</el-breadcrumb-item>
      <el-breadcrumb-item>路径3</el-breadcrumb-item>
      <el-breadcrumb-item>路径4</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
    
}
</script>


<style scope>
  .p-design-breadcrumb{
    padding-left:20px;
    background-color: #545c64;
  }
</style>
<style>
  .el-breadcrumb {
    height: 30px;
    line-height: 30px;
    background-color: #545c64;
    overflow: hidden;
  }
  .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
    color:#fff;
  }
  .el-breadcrumb__inner{
    color:#ccc;
  }
  .el-breadcrumb__item:last-child .el-breadcrumb__inner{
    color:#ccc;
  }
  .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover{
    color:#ccc;
  }
</style>