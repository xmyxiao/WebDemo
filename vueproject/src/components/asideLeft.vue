<template>
  <el-tabs :tab-position="tabPosition" style="height: 100%;">
    <el-tab-pane label="左标签1">
    	<draggable element="ul" :list="basicComponents" 
          :options="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
          @end="handleMoveEnd"
          @start="handleMoveStart"
          :move="handleMove"
        >
          
          <li class="form-edit-widget-label" v-for="(item, index) in basicComponents" :key="index">
            <a>
              <icon class="icon" :name="item.icon"></icon>
              <span>{{item.name}}</span>
            </a>
          </li>
        </draggable>
    </el-tab-pane>
    <el-tab-pane label="左标签2">左标签2</el-tab-pane>
    <el-tab-pane label="左标签3">左标签3</el-tab-pane>
    <el-tab-pane label="左标签4">左标签4</el-tab-pane>
  </el-tabs>
</template>

<script>
import draggable from 'vuedraggable'

export default {
	components: {
	  draggable
	},
  data() {
    return {
      tabPosition: 'left',
      basicComponents: [
        { id: 1 , name: 'FInput', cname: '输入框' },
        { id: 2 , name: 'FRadioGroup', cname: '单选按钮组' },
        { id: 3 , name: 'FSelect', cname: '下拉框' },
        { id: 4 , name: 'FDate', cname: '日期时间选择器' }
      ]
    };
  },
  methods: {
  	handleMoveEnd (evt) {
      console.log('end', evt)
    },
    handleMoveStart ({oldIndex}) {
      console.log('start', oldIndex, this.basicComponents)
    },
    handleMove () {
      return true
    }
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
