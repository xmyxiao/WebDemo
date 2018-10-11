<script>
	import Vue from 'vue'
	import editview from './editview'
	import {FInput} from './index'
	export default {
		components: { FInput,editview},
		data: function (){
			return {
		      mFindPosition: '',
		      allComponents: [],
		      componentName: '',
		      dragStartIndex: 0,
		      dragOverIndex: 0,
		      editComponent: null
		    }
		},
		methods : {
			/* 清除操作时候生成的额外style */
		    clearStyle () {
		      this.$nextTick(() => {//$nextTick 在DOM更新后执行
		        this.$refs.FForm.$children.forEach((item, index) => {
		          //$refs获取元素
		          item.$el.style.borderTop = 'none'
		          item.$el.style.borderBottom = 'none'
		        })
		      })
		    },
			// 子item开始拖动
		    childrenDragStart (e) {
		    debugger;
		      console.log('childrenDragStart', e)
		      this.dragStartIndex = e.target.dataset.index
		      console.log(this.dragStartIndex)
		    },
		    // 函数节流
		    throttle (func, delay = 100) {
		      var pDate = new Date().getTime()
		      return (e) => {
		        var cDate = new Date().getTime()
		        if ((cDate - pDate) > delay) {
		          pDate = cDate
		          func(e)
		        }
		      }
		    },
		    getTreeScrollTop (tdom) {
		      var ttop = tdom.scrollTop
		      if (tdom.parentElement) {
		        ttop += this.getTreeScrollTop(tdom.parentElement)
		      }
		      return ttop
		    },
		    // 拖动过程中实时计算要插入的位置
		    findPosition (e) {
		      var minIndex = 0
		      var minClientY = 100000000
		      var treeScrollTop = this.getTreeScrollTop(this.$el)
		      var dY = e.clientY + treeScrollTop
		      var isTop = true
		      // 排序 并计算要插入的位置
		      this.$refs.FForm.$children.sort((a, b) => {
		        var aIndex = a.$el.dataset.index
		        var bIndex = b.$el.dataset.index
		        return aIndex - bIndex
		      }).forEach((children, index) => {
		        children.$el.style.borderTop = 'none'
		        children.$el.style.borderBottom = 'none'
		        var cY = children.$el.offsetTop
		        var cH = children.$el.offsetHeight
		        if (Math.abs(cY - dY) < minClientY) {
		          minClientY = Math.abs(cY - dY)
		          minIndex = index
		          isTop = minClientY < cH / 2
		        }
		      })
		      if (this.$refs.FForm.$children[minIndex]) { this.$refs.FForm.$children[minIndex].$el.style[isTop ? 'borderTop' : 'borderBottom'] = '50px solid rgba(0,0,0,0)' }
		      minIndex = isTop ? minIndex : ((minIndex + 1) > this.allComponents.length ? this.allComponents.length : minIndex + 1)
		      if (this.dragStartIndex < minIndex && isTop) {
		        minIndex = minIndex - 1
		      }
		      this.dragOverIndex = minIndex
		    },
		    // 画布上的拖动处理
		    handleOnRootDragOver (e) {
		      if (!e.dataTransfer.getData('key')) {//dataTransfer 剪贴板用于保存数据
		        this.mFindPosition(e)
		      }
		      e.preventDefault()
		    },
		    // 画布拖动停止处理
		    handleOnRootDrop (e) {
		      // 从组建列表拖入
		      if (e.dataTransfer.getData('component')) {
		        var tComponent = JSON.parse(e.dataTransfer.getData('component'))
		        this.allComponents.splice(this.dragOverIndex, 0, tComponent)
		      } else { // 列表内组件位置调换
		        var item = this.allComponents.splice(this.dragStartIndex, 1)
		        this.allComponents.splice(this.dragOverIndex, 0, ...item)
		        //...item 向数组添加的新项目
		        console.log(this.allComponents)
		      }
		      // 清除拖动过程中产生的样式
		      this.clearStyle()
		      e.preventDefault()
		    },
		    handleItemClick (e, index = 0){
		    	
		    }
		},
		mounted () {
			this.mFindPosition = this.throttle(this.findPosition, 100);
		},
		render: function (h) { // h 为 createElement 函数，接受三个参数
    return h('editview', {
      //createElement()里面创建的不可以是原生html元素 而是组件
      //向子组件传递值
      props: {
        labelWidth: '80px'
      },
      nativeOn: {//仅对于组件，监听原生事件
        dragover: this.handleOnRootDragOver,
        drop: this.handleOnRootDrop
      },
      ref: 'FForm'  //用来绑定某个dom元素  方便直接获取元素不用再去获取
    }, this.allComponents.map((component, index) => {
    	debugger;
    	// map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。
    	//allComponents所有组件
      if (!component.hasOwnProperty('isActive')) this.$set(component, 'isActive', false)
      //hasOwnProperty 获取本身属性
      return h(component.name, {
        directives: [
          { name: 'masking' }
        ],
        attrs: {
          'data-index': index,
          draggable: true
        },
        class: {
          active: component.isActive
        },
        nativeOn: {
          click: (e) => {
            this.handleItemClick(e, index)
          },
          dragstart: this.childrenDragStart
        },
        ref: 'formItem' + index
      })
    }))
  }
	}
	
</script>

<style lang="scss" scoped>
.el-form {
  height: 100%;
  .active {
    outline: 2px dotted green;
  }
}
</style>