**jq为什么出现？**</br>
　　容易上手，强大的选择器，节约开发时间，丰富的UI，完善的事件机制，Ajax的封装。</br>

　　alert输出换行 :\\n</br>

**js的数据类型有哪些？**</br>
　　string</br>
　　number (typeof NaN === 'number')</br>
　　bool</br>
　　undefined</br>
　　null</br>
　　object</br>
　　symbol (es6新增数据类型)</br>

**promise 使用方法**</br>
　　.then</br>
　　　　$.ajax(...).then(成功函数/失败函数);</br>
　　链式then</br>
　　　　$.ajax(...).then(成功函数/失败函数).then(成功函数/失败函数);</br>
　　　　这里即使第一个then触发失败函数 第二个then也会执行</br>
　　自己生成Promise</br>
		```javascript
	　　function pro(){
	　　　　return new Promise(function(resolve,reject){
	　　　　　　setTimeout(()=>{
	　　　　　　　　resolve()或reject(); //调用成功函数或者失败函数
	　　　　　　},3000)
		　　})
		}
		```
　　调用 pro().then(...);</br>
　　　　链式调用 避免回调地狱</br>
　　Promise实现原理是将then里面的当做ajax的回调事件</br>
　　http://www.cnblogs.com/rubylouvre/p/3495286.html(还不是很理解，异步代码？)</br>

**ajax**</br>
	```javascript
	let xhr = new XMLHTTPRequest();
	xhr.open('POST','/xxx');
	xhr.onreadystatechange = function(){
	　　if(xhr.readystate === 4 && xhr.status === 200){
	　　　　console.log(xhr.responseText);
	　　}
	}
	xhr.send('a=1&b=2');
	```

**闭包**</br>
	```javascript
	function foo(){
		var local = 1;
		function bar(){
			local++;
			return local;
		}
		return bar;
	}
	var func = foo();
	func(); // 每次执行则 local+1
	```

**this的指向**</br>
　　1. fn() 里面的this就是window</br>
　　2. fn() 是strict mode(严格模式) this是undefined</br>
　　3. a.fn() 里面的this就是a 也就是this指向实例</br>
　　4. new fn() 里面的this就是新生成的实例</br>
　　5. ()=>console.log(this) 里面的this和外面的this等值</br>

**立即执行函数**</br>
	```javascript
	;(function(){
	})()
	```
　　主要用于制造一个函数作用域 避免污染全局变量</br>
　　最前面的分号是用于避免解析出错（防御性分号）</br>
　　es6中可以直接使用{}制造一个函数作用域</br>


**async/await 语法以及目的**</br>
	```javascript
	function returnPromise(){
		return new Promise(function(resolve,reject){
			setTimeout(() => {
				resolve('func')
			},3000)
		})
	}
	returnPromise.then((result) => {
		result === 'func'
	})
	var result = await returnPromise() //注意只有控制台支持顶级作用域的await,js文件里的await只能写在async函数里
	result === 'func'  // true
	```
　　目的： 把异步代码写成同步</br>
　　在vue中可以用于数据返回后进行操作</br>

**js实现深度拷贝**</br>
　　1.json拷贝</br>
　　　　`var a = {...}`</br>
　　　　`var b = JSON.parse(JSON.stringify(a)) //常用方法`</br>
　　　　缺点： json不支持函数、引用、undefined、RegExp、Date...</br>
　　2.递归遍历一个对象 再将值传入到一个对象中</br>
　　　　数组去重</br>
　　　　Array.form(new Set(a))</br>

**js原型**</br>
　　`var a = [1,2,3]`
　　这里的a.push() 方法就来自Array 也就是Array.prototype 而Array.prototype就是这里数组a的原型
　　`a.__proto__ === Array.prototype`

**class**</br>
	```javascript
	class polygon{
		constructor(height,width){ //构造函数
			this.height = height;
			this.width = width;
		}
	}
	let square = New polygon(10,10);
	```

**js实现继承**</br>
	```javascript
	function Animal(){
		this.body = '身体'
	}
	Animal.prototype.move = function(){
		console.log('跑');
	}
	function human(name){
		Animal.apply(this,arguments) //apply 第一个参数代替Animal里面的this对象
		this.name = name //第二个是一个参数数组 用于参数传递 call方法第一个参数相同 后面是一个列表
	}
	human.prototype.useTools = function(){
		console.log('使用工具')
	}
	var frank = new Human();
	```

**extends实现方法 使用es6的class**</br>
	```javascript
	class Animal{
		constructor(){
			this.body = '身体'
		},
		move(){
			console.log('跑')
		}
	}
	class human extends Animal{
		constructor(name){
			super() //es6语法要求 子类的构造函数必须执行一次super函数
			this.name = name
		},
		useTools(){
			console.log('使用工具')
		}
	}
	var frank = New human()
	```

**apply和cell方法的作用与差异**</br>
　　apply：调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.apply(A, arguments);即A对象应用B对象的方法。</br>
　　call：调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.call(A, args1,args2);即A对象调用B对象的方法。</br>
　　相同</br>
　　　　方法的含义是一样的，即方法功能是一样的；</br>
　　　　第一个参数的作用是一样的；</br>
　　不同</br>
　　　　call可以传入多个参数；</br>
　　　　apply只能传入两个参数，所以其第二个参数往往是作为数组形式传入</br>
　　作用</br>
　　　　实现（多重）继承</br>
　　　　https://blog.csdn.net/wukongtutu/article/details/79660063</br>

**for in和for of的区别**</br>
　　推荐在循环对象属性的时候，使用for...in,在遍历数组的时候的时候使用for...of</br>
　　for...in循环出的是key，for...of循环出的是value</br>
　　注意，for...of是ES6新引入的特性。修复了ES5引入的for...in的不足</br>
　　for...of不能循环普通的对象，需要通过和Object.keys()搭配使用</br>

**js如何实现模块化与组件化（不使用框架）**</br>
　　将一个功能维护成一个js文件，使用amd或cmd对模块进行引入</br>
　　对功能进行切割分模块进行管理,将组件相关的HTML／JS／CSS放到同一个地方</br>
	
**jq3.0和后面的版本有什么区别**</br>
　　$.ajax 对象删除了 success | error | complete 方法</br>
　　　　derferred.done -> jqXHR.success</br>
　　　　derferred.fail    -> jqXHR.error</br>
　　　　derrerred.always -> jqXHR.complete</br>
　　移除了注册事件的快捷函数 load | unload | error</br>
　　　　load 名称和 ajax load 同名， 含糊不清。</br>
　　　　unload 如果 load 去掉， unload 也没有存在的意义了。</br>
　　　　error 采用 window.onerror 注册，不是一个标准事件 hander，因此也建议移除</br>
　　动画模块使用 “requestAnimationFrame” 替代 setTimeout</br>
　　　　requestAnimationFrame IE9及android4.4以下仍然不支持，但其它浏览器则明显提升性能</br>
	
**单例模式**</br>
　　只允许一个实例存在，如果这个实例不存在则实例化，存在则不创建</br>
　　可以用于保存用户信息等唯一对象</br>
