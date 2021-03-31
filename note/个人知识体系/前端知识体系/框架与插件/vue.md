**vue子组件$emit传出参数后，父组件如何接受参数的同时添加自定义参数**</br>
　　[参考地址](https://blog.csdn.net/u010007013/article/details/100134803)</br>
　　```@handle="handle(arguments,parentParam)"```父组件通过一个数组来接收参数，可以使用解构赋值来取得参数</br>

**vue this.$attrs**</br>
　　`this.$attrs`:</br>
　　　　`this.$attrs`可以用于父组件向孙子组件传值</br>
　　　　孙子组件里获取到`this.$attrs`的值是除了子组件声明的元素</br>
　　　　即在子组件中使用过后在孙子组件中无法通过`this.$attrs`来获取</br>

**vue 路由跳转**</br>
　　参数可以使用query来传递，通过转成string的方法来避免下次刷新获取不到传递的对象</br>
　　路由改变，页面没变化，刷新后页面变化
　　`this.$router.go(0)` 目前使用刷新来处理这个问题</br>

**provide**</br>
　　[provide](https://blog.csdn.net/qq_39075021/article/details/106767357)</br>
　　provide 和 inject 绑定并不是可响应的。</br>
　　这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的。</br>
```javascript
	provide () {
		return {
			getRefresh: this.getRefresh
		}
	},
	methods: {
      getRefresh(){
        return this.refresh
      }
    }
	// 子组件
	inject:['getRefresh'],
	watch: {
	  refresh(val){
		console.log(val)
	  }
	},
	computed:{
	  refresh(){
		return this.getRefresh && this.getRefresh().frequency
	  }
	},
```

**模块销毁后定时器是否还存在**</br>
　　事件监听在vue中是挂在window下的</br>
　　随着组件的注销并不会被销毁</br>
　　过多的事件监听会导致页面性能问题</br>
　　vue3.0事件触发机制的改变，使用数据驱动组件不是使用事件驱动</br>

vue数据data观察  不能存放复杂对象  引起性能问题
　　因为是递归，所以如果其中一个key值指向一个对象，对象中的key值再指向一个复杂对象也会导致这个问题。所以数据最好是纯粹的静态数据。
　　除了地图之外，动画包括包括dom等一系列有自己状态的对象都不要放到data中。

