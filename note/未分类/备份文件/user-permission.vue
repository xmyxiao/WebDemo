<template>
<!-- 用户权限 -->
<div class="user-permission">
  <div class="user-permission-left">
    <div class="permission-left-head">
      <input-tree
        class="division-tree"
        :source="divisionData"
        :isOpened="true"
        v-model="divisionSelect"
        ref="division"
        :inputable="false"
        :hasCheckbox="false"
        @groupClick="onDivisionClick"
        :clickItemToOpen="false"
      />
      <el-select
        v-model="userrole"
        class="division-role"
      >
        <el-option
          style="padding-left: 15px"
          v-for="item in roleData"
          :key="item.value"
          :label="item.text"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="permission-left-body">
      <div class="permission-left-search">
        <el-input
          placeholder="请输入内容"
          v-model="searchName"
          clearable>
          <template slot="prepend">真实姓名：</template>
        </el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
      <data-table
        :noBigData="noBigData"
        :columns="columns"
        :dataProvider="dataProvider"
        @rowClick="handleRowClick"
      >
      </data-table>
      <!-- <el-pagination
        ref="pagination"
        v-show="pageSize<99999"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        popper-class="pagination-popper"
        :current-page="currentPage"
        :page-size="pageSize"
        :page-sizes="pageSizes"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination> -->
    </div>
  </div>
  <div class="user-permission-right" v-loading="loading">
    <ul class="tabs-head-list">
      <li
        class="head-list-item"
        :class="`${active === item.label ? 'active' : ''}`"
        @click="changeActive(item)"
        v-for="item in tabsData"
        :key="item"
      >
        <img
          class="head-icon"
          v-if="item.icon"
          :src="`${assets + '/' + item.icon}`"
        /><span class="head-text">{{ item.label }}</span>
      </li>
    </ul>
    <ul class="tabs-content-list">
      <li
        class="content-list-item"
        v-show="active === item.label"
        v-for="item in tabsData"
        :key="'body' + item"
      >
        <power-tree
          v-if="item.data"
          :treeData="item.data"
          :ref="`powerTree${item.isdisplay}`"
        />
        <no-data v-else :imgText="'暂无数据'" style="background: #fff;" />
      </li>
    </ul>
    <div class="tabs-save">
      <el-button type="primary" @click="saveData">保存</el-button>
      <el-button type="primary" @click="reduction">还原</el-button>
    </div>
  </div>
</div>
  
</template>

<script>
import Vue from 'vue'
import { Button, Loading, Message, Select, Option, Input} from 'element-ui'
import powerTree from './power-tree.vue'
import noData from '@/components/noData'
import InputTree from "@idev4/lakev/src/components/input-tree"
import { DataTable } from "@idev4/lakeui"
import Pagination from "../../common-report/controls/pagination"

Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
Vue.use(Button)
Vue.use(Loading)
Vue.prototype.$message = Message
/*
默认参数
{
	rids: 40,
	uid: -1,
	tabsData: [
	  {
		label: 'PC权限',
		isdisplay: 5291
	  },
	  {
		label: 'APP权限',
		isdisplay: 110
	  }
	]
}
*/
export default {
  components: {
    powerTree,
    InputTree,
    Select,
    Option,
    Input,
    noData
  },
  props: {
    params: {
      default () {
        // 测试
        return {
          tcid: 2725,
        }
      }
    },
    rids: {},
    uid: {},
    tabsData: {
      default () {
        return [
          {
            label: 'PC权限',
            isdisplay: 5291
          },
          {
            label: 'APP权限',
            isdisplay: 110
          }
        ]
      }
    }
  },
  data () {
    return {
      active: '',
      loading: true, // 是否加载中
      divisionData: null, // 区划树数据
      divisionSelect: null, // 区划选中值
      roleData: null, // 角色数据
      userrole: null, // 角色
      comComp: null, // 表格组件
      searchName: '', // 查询名称
      noBigData: true,
      columns: [], // 表单列
      dataProvider: [], // 表单数据
      pageSize: 0,
      total: 0
    }
  },
  created () {
    let { params } = this
    if (params) {
      if (params.tabsData) {
        this.tabsData = params.tabsData
      }
    }
    let { tabsData } = this
    if (tabsData && tabsData.length > 0) {
      this.active = tabsData[0].label
    }
    this.loading = true
    this.getAdcdTree()
  },
  methods: {
    // 获取行政区划树
    getAdcdTree(){
      T.ajax({
        url: '/dist/data/local/tree.json',
        method: 'GET',
        success: res => {
          this.divisionData = JSON.parse(
            JSON.stringify(res.data).replace(/name/g, "label")
          )
          this.getUserRoleInfo()
        }
      })
    },
    // 行政区划选中
    onDivisionClick(e){
      this.divisionSelect = [e]
    },
    //获取用户角色
    getUserRoleInfo() {
      T.ajax({
        url: `api/sysUser/roleenum`,
        method: "GET",
        success: res => {
          this.roleData = res.data
        },
      });
    },
    // 左侧列表初始化
    userList(){
      
    },
    // 用户角色
    handleRowClick(){

    },
    // 右侧面板初始化
    tabsInit(){
      let { tabsData } = this
      tabsData.forEach(tabs => {
        let url = 'api/MenuPower/menu/data' // 数据请求地址
        if (!tabs.url) {
          tabs.url = url
        }
        tabs.data = null
        if (tabs.url) {
          T.ajax({
            url: tabs.url,
            data: {
              isdisplay: tabs.isdisplay,
              rids: this.rids,
              uid: this.uid
            },
            method: 'POST',
            success: res => {
              this.getPowerTree(res)
              this.ergodicTree(res)
              this.loading = false
              tabs.data = res
              this.$forceUpdate()
            }
          })
        }
      })
    },
    // tabs 标签改变事件
    changeActive (item) {
      if (this.active != item.label) {
        this.active = item.label
      }
    },
    // 保存事件
    saveData () {
      let { tabsData } = this
      tabsData.forEach((tabs, i) => {
        let tree = this.$refs[`powerTree${tabs.isdisplay}`][0]
        if (this.active != tabs.label) {
          return
        }
        if (tree) {
          let addArr = [],
            removeArr = []
          let treeAdd = tree.getAddArr()
          let treeRemove = tree.getRemoveArr()
          addArr = JSON.parse(JSON.stringify(tree.getAddArr()))
          removeArr = JSON.parse(JSON.stringify(tree.getRemoveArr()))
          addArr.forEach(item => {
            let optypes = item.optypes
            item.optypes = []
            optypes.forEach(opt => {
              if (opt.checked && !opt.orCheck) {
                // 新增
                item.optypes.push(opt)
              }
            })
          })
          removeArr.forEach(item => {
            let optypes = item.optypes
            item.optypes = []
            optypes.forEach(opt => {
              if (!opt.checked && opt.orCheck) {
                // 移除
                item.optypes.push(opt)
              }
            })
          })
          if (
            addArr &&
            addArr.length < 1 &&
            removeArr &&
            removeArr.length < 1
          ) {
            return
          }
          T.ajax({
            url: 'api/MenuPower/upd/power',
            method: 'post',
            data: {
              isdisplay: tabs.isdisplay,
              rids: this.rids,
              uid: this.uid,
              addData: addArr,
              delData: removeArr
            },
            success: res => {
              if (res.data) {
                tree.empty()
                treeAdd.forEach(item => {
                  let optypes = item.optypes
                  optypes.forEach(opt => {
                    opt.orCheck = opt.checked
                  })
                })
                treeRemove.forEach(item => {
                  let optypes = item.optypes
                  optypes.forEach(opt => {
                    opt.orCheck = opt.checked
                  })
                })

                this.$message({
                  message: '保存成功',
                  type: 'success'
                })
              } else {
                this.$message({
                  message: '保存失败',
                  type: 'warning'
                })
              }
            }
          })
        }
      })
      /* let value = this.$refs.powerTree[0].getValue()
      this.checkList = []
      this.getCheckedData(value[0])
      console.log(this.checkList) */
    },
    // 将用户权限还原到角色
    reduction () {
      return
      T.ajax({
        url: '',
        method: 'post',
        data: {
          isdisplay: tabs.isdisplay,
          rids: this.rids,
          uid: this.uid,
          addData: addArr,
          delData: removeArr
        },
        success: res => {
          
        }
      })
    },
    // 获取选中节点
    getCheckedData (node) {
      if (node.checked) {
        this.checkList.push(item)
      }
      node.action &&
        node.action.forEach(item => {
          if (item.checked) {
            this.checkList.push(item)
          }
        })
      if (node.items) {
        node.items.forEach(item => {
          this.getCheckedData(item)
        })
      }
    },
    // 叶子节点全选处理
    getPowerTree (data) {
      data.map(item => {
        if (item.items) {
          // 有子节点
          let flag = true
          this.getPowerTree(item.items)
          flag = this.childHasSelect(item.items, flag)
          item.checked = flag
        } else {
          // 叶子节点
          let flag = true
          item.optypes &&
            item.optypes.map(opt => {
              if (!opt.checked) {
                flag = false
              }
            })
          item.checked = flag
        }
      })
    },
    // 判断子节点是否全选
    childHasSelect (list, flag) {
      list.forEach(item => {
        item.optypes &&
          item.optypes.forEach(action => {
            if (!action.checked) {
              flag = false
              return flag
            }
          })
        if (item.items) {
          flag = this.childHasSelect(item.items, flag)
          return flag
        }
      })
      return flag
    },
    // 遍历树节点 添加orCheck 原本状态
    ergodicTree (data) {
      data.map(item => {
        if (!item.orCheck) {
          item.orCheck = item.checked
        }
        if (item.optypes) {
          item.optypes.map(opt => {
            opt.orCheck = opt.checked
          })
        }
        if (item.items) {
          this.ergodicTree(item.items)
        }
      })
    }
  }
}
</script>

<style lang="scss">
.user-permission{
  display: flex;
  width: 100%;
  height: 100%;
  .user-permission-left {
    width: 450px;
    height: 100%;
    box-shadow: 0px 1px 4px 1px rgba(68, 116, 149, 0.5);
    .permission-left-head{
      padding: 5px 10px;
      box-sizing: border-box;
      display: flex;
      .division-tree{
        width: 217px;
        height: 30px;
        .tree-container{
          height: 270px !important;
        }
      }
      .division-role{
        width: 210px; 
        margin-left: 4px;
        border: 1px solid #ddd;
        input[type='text']{
          background-color: #ffffff;
          color: #333;
          border-radius: 4px;
        }
      }
    }
    .permission-left-body{
      .permission-left-search{
        padding: 0 10px;
        .el-input-group{
          width: 348px;
        }
        .el-input-group__prepend{
          border-right: 0;
          padding: 0;
          background: none;
          border: 0;
        }
        input[type='text']{
          background-color: #ffffff;
          color: #333;
          border-radius: 4px;
          border: 1px solid #ccc;
        }
      }
    }
  }
  .user-permission-right {
    width: calc(100% - 450px);
    height: 100%;
    .tabs-head-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      .head-list-item {
        position: relative;
        list-style: none;
        flex: 1;
        font-size: 16px;
        font-weight: bold;
        line-height: 45px;
        text-align: center;
        border-left: 1px solid #e7ecea;
        border-bottom: 1px solid #e7ecea;
        cursor: pointer;
        &:first-child {
          border-left: 0;
        }
        &.active {
          color: #6a95e3;
          &:after {
            display: block;
          }
        }
        &:after {
          display: none;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: #6a95e3;
          content: '';
          transition: transform 0.3s;
        }
        .head-icon {
          width: 20px;
          height: 20px;
          vertical-align: middle;
          margin-right: 4px;
        }
        .head-text {
          vertical-align: middle;
        }
      }
    }
    .tabs-content-list {
      list-style: none;
      margin: 0;
      padding: 0;
      width: 100%;
      height: calc(100% - 96px);
      .content-list-item {
        position: relative;
        width: 100%;
        height: 100%;
      }
    }
    .tabs-save {
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
  }
}
</style>
