<template>
   <el-row style="padding:0 20px;">
    <el-col :span="12" class="p-foot-left">
      左侧
    </el-col>
    <el-col :span="12" class="p-foot-right">
      右侧
    </el-col>
   </el-row>
</template>

<script>
export default {
  
}
</script>


<style scope>
  .p-foot-left,.p-foot-right{
    height: 29px;
    line-height: 29px;
    color:#fff;
  }
  .p-foot-left{
    text-align: left;
  }
  .p-foot-right{
    text-align: right;
  }
</style>
