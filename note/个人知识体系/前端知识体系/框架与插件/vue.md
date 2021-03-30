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

