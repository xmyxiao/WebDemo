<template>
    <el-menu
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">导航1</el-menu-item>
        <el-submenu index="2">
            <template slot="title">导航2</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            <el-menu-item index="2-4-2">选项4-2</el-menu-item>
            <el-menu-item index="2-4-3">选项4-3</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="3">导航3</el-menu-item>
        <el-menu-item index="3">导航4</el-menu-item>
    </el-menu>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .el-menu--horizontal{
      height: 39px;
      border-bottom: 1px solid #757575;
  }
  .el-menu--horizontal>.el-menu-item{
      height: 39px;
      line-height: 39px;
  }
  .el-menu--horizontal>.el-submenu .el-submenu__title{
      height: 39px;
      line-height: 39px;
  }
  .el-submenu__title{
      height: 39px;
      line-height: 39px;
  }
</style>
