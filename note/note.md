**note**</br>
　　[虚拟列表](https://juejin.im/post/6844903982742110216)</br>
　　[虚拟列表实现](https://codesandbox.io/s/virtuallist-3-i3h9v?file=/src/components/VirtualList.vue)</br>
　　[css角度](https://www.jb51.net/css/707136.html)</br>
　　[颜色渐变](https://segmentfault.com/q/1010000006961164)</br>
　　平台搭建，全局变量，配置</br>
　　echart geo3D heightChart</br>
　　框架如何实现config的注入</br>
　　[时间格式](http://momentjs.cn/docs/)</br>
　　[md ppt](https://zhuanlan.zhihu.com/p/149521766)</br>
　　v-bind传值问题  如何传递多个值
　　模块销毁后定时器是否还存在
　　通用方法的处理,常见的时间格式化,计算时间差距,时间加减,常规的验证手机格式等
　　
	vue3.0事件触发机制的改变，使用数据驱动组件  不是使用事件驱动
	事件监听在vue中是挂在window下的   随着组件的注销并不会被销毁  过多的事件监听会导致页面性能问题
	触发器机制
	vue数据data观察  不能存放复杂对象  引起性能问题
	可以在T.vm.map中看到  _ob是vue对象
	1、因为是递归，所以如果其中一个key值指向一个对象，对象中的key值再指向一个复杂对象也会导致这个问题。所以数据最好是纯粹的静态数据。
	2、除了地图之外，动画包括包括dom等一系列有自己状态的对象都不要放到data中。
	
	watch 接收数值问题  组件未加载完成 多次传值  是否会收到  为什么？
	
	推荐两个库，rxjs 处理异步数据流  和 when.js 处理promise数组问题


	
	





