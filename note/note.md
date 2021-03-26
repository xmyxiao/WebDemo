**note**</br>
　　[虚拟列表](https://juejin.im/post/6844903982742110216)</br>
　　[虚拟列表实现](https://codesandbox.io/s/virtuallist-3-i3h9v?file=/src/components/VirtualList.vue)</br>
　　vue3.0, node.js</br>
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
　　请求中断方法
	```javascript
	var request = $.ajax({
	  type: 'POST',
	  url: 'someurl',
	  success: function(result){}
	});
	 
	request.abort();
	```
	vue3.0事件触发机制的改变，使用数据驱动组件  不是使用事件驱动
	事件监听在vue中是挂在window下的   随着组件的注销并不会被销毁  过多的事件监听会导致页面性能问题
	触发器机制
	vue数据data观察  不能存放复杂对象  引起性能问题
	可以在T.vm.map中看到  _ob是vue对象
	1、因为是递归，所以如果其中一个key值指向一个对象，对象中的key值再指向一个复杂对象也会导致这个问题。所以数据最好是纯粹的静态数据。
	2、除了地图之外，动画包括包括dom等一系列有自己状态的对象都不要放到data中。
	
	地图弹框
	// 自动平移，拖动地图以便于popup的最佳显示
	autoPan: false,
	// 碰撞检测
	autoPosition: true,
	//
	keepInView:true
	其他的还有 
	autoPanPaddingTopLeft 
	autoPanPadding 
	autoPanPaddingBottomRight 用于调整碰撞的边界。
	@click获取子组件的值和循环值
	@getTotal="tabGetTotal($event,tab)"
	/* eslint-disable */ 
	// eslint-disable-next-line no-console
	// eslint-disable-next-line no-undef
	
	T不能重复引入
	
	文件读取路径不对的问题
	mstsc  hy07 iis 找到文件
	\\hy07.in.istrong.cn\开发目录\10_系统程序\44_广东省\07_江门\江海区农村重点易涝区整治工程自动化监控系统建设项目\01_主程序\API\Config\MapSettings.xml
	修改图片存放的相对位置
	
	表单修改完成后需要导出到升级包
	D:\tool\TestConfig\TestConfig\bin\Debug\TestConfig.exe.config
	<connectionStrings>
	SqlServerSYQ  connectionString  进行修改
	连接的数据库可以去
	\\hy07.in.istrong.cn\开发目录\10_系统程序\44_广东省\07_江门\江海区农村重点易涝区整治工程自动化监控系统建设项目\01_主程序\API\Config\app.json
	database中进行读取 
	D:\tool\TestConfig\TestConfig\bin\Debug\TestConfig.exe执行
	导出配置表脚本
	\\hy07.in.istrong.cn\开发目录\10_系统程序\44_广东省\07_江门\江海区农村重点易涝区整治工程自动化监控系统建设项目\06_测试版本\一轮测试更新包_001_20201207_江海区农村重点易涝区整治工程自动化监控系统\脚本\StrongMain_JHQ\tcid.text
	文本文件中  StrongMain_JHQ 代表的是这个表单连接的数据库  即在app.json中读取到的
	
	[Charles的使用](https://www.cnblogs.com/ttxcs/p/11280645.html)
	展播大屏
	{
		考虑多级的问题使用provide
		如果是面板嵌套面板  会不会有问题
		watch 接收数值问题  组件未加载完成 多次传值  是否会收到  为什么？
	}
	[provide](https://blog.csdn.net/qq_39075021/article/details/106767357)
	provide 和 inject 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的。
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
	
	推荐两个库，rxjs 和 when.js
	地图导航模块，钉钉的壳下，暂时去除百度与腾讯，保留高德地图
	如果要百度与腾讯的导航考虑 
	1.直接唤醒app,不使用web页面
	2.跟踪页面的跳转，直接使用重定向的地址
```
export const toApp = (targetApp, navigationItem) => {
  let {
    origin,
    destination
  } = navigationItem;
  let gaoOrigin = origin, gaoDestination = destination
  origin = `${origin.value[1]},${origin.value[0]}`;
  destination = `${destination.value[1]},${destination.value[0]}`;
  gaoOrigin = `${gaoOrigin.value[0]},${gaoOrigin.value[1]}`;
  gaoDestination = `${gaoDestination.value[0]},${gaoDestination.value[1]}`;

  const TARGET_APP_URL = new Map()
    .set('baiduMap', {
      IOS: `baidumap://map/direction?origin=${origin}&region=日照&destination=${destination}&mode=driving&coord_type=wgs84&src=webapp.marker.strongsoft.h5`,
      //Android:`bdapp://map/direction?origin=name:${navigationItem.origin.label}|latlng:${origin}&destination=name:${navigationItem.destination.label}|latlng:${destination}&coord_type=wgs84&mode=driving&sy=3&index=0&target=1&src=webapp.marker.strongsoft.h5`,
      //Android:`baidumap://map/navi?location=${destination}&src=andr.baidu.openAPIdemo`,
      Android:`http://api.map.baidu.com/direction?origin=latlng:${origin}|name:${navigationItem.origin.label}&destination=${destination}&mode=driving&region=日照&output=html&src=webapp.baidu.openAPIdemo`,
      Other: `http://api.map.baidu.com/direction?origin=latlng:${origin}|name:${navigationItem.origin.label}&destination=${destination}&mode=driving&region=日照&output=html&src=webapp.baidu.openAPIdemo`,
    })
    .set('gaodeMap', {
      IOS: `iosamap://navi?sourceApplication=applicationName&poiname=fangheng&poiid=BGVIS&lat=${navigationItem.destination.value[0]}&lon=${navigationItem.destination.value[1]}&dev=1&style=2`,
      //Android: `androidamap://navi?sourceApplication=appname&poiname=fangheng&lat=${navigationItem.destination.value[1]}&lon=${navigationItem.destination.value[0]}&dev=1&style=2`, //原生应用
      Android: `http://uri.amap.com/navigation?from=${gaoOrigin},起点&to=${gaoDestination},终点&mode=car&policy=1&src=mypage&coordinate=wgs84&callnative=1`, //网页版
      Other: `http://uri.amap.com/navigation?from=${gaoOrigin},起点&to=${gaoDestination},终点&mode=car&policy=1&src=mypage&coordinate=wgs84&callnative=1`, //网页版
    })
    .set('tencentMap', {
      IOS: `qqmap://map/routeplan?type=drive&from=起点&fromcoord=${origin}&to=终点&tocoord=${destination}`,
      //Android: `qqmap://map/routeplan?type=drive&from=起点&fromcoord=${origin}&to=终点&tocoord=${destination}`,
      Android: `http://apis.map.qq.com/uri/v1/routeplan?type=drive&from=起点&fromcoord=${origin}&to=终点&tocoord=${destination}&coord_type=1`,
      Other: `http://apis.map.qq.com/uri/v1/routeplan?type=drive&from=起点&fromcoord=${origin}&to=终点&tocoord=${destination}&coord_type=1`,
    });
  let uri = TARGET_APP_URL.get(targetApp)[`${DEVICE_TYPE}`];
  // alert(uri);
  if (timer) clearInterval(timer);
  if (isAndroid) {
    //跳转网页版
    //alert(uri);
    location.href = uri;
    return;
  }
  // alert(uri);
  // ************************
  if(WEBVIEW){
    window.__rnWebview = WEBVIEW
    location.href = uri;
  }
  // ************************
  timer = setInterval(() => {
    if (window.__rnWebview) {
      clearInterval(timer);
      // alert('__rnWebview');
      //window.__rnWebview.openApp(uri);
      console.log(uri)
      window.__rnWebview.openWebPage({
        url: uri
      });
    }
  }, 300);
}	
```
	
vconsole调试工具
echarts pie饼图去除高亮效果
math.js
	
换肤机制
```typescript
changeSkin (item) {
  const theme = item.skin
  this.skin = theme
  T.cookie('skin', theme)
  this.$core.theme = theme
  const skin = document.querySelector('#skinCss')
  if (skin && skin.tagName === 'LINK') { // 移除css
	document.body.removeChild(skin)
  }
  const link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.id = 'skinCss'
  link.href = '/resource/themes/' + theme + '.css'
  document.body.appendChild(link)
  if (this.$refs && this.$refs.themesPopover) {
	this.$refs.themesPopover.doClose()
  }
}
```

水库物业化规范
每一个大模块下需要有一个.md文档用来显示用例
通用模块存放在components下，通用模块内部应该没有请求，数据由外部传入
有数据的算是子模块，按模块区分
迁移到vite
useInterval、useTimeout
[java环境搭建](http://wiki.istrongcloud.net/spaces/194554bbc5d444589b884936b35ff796/2df6eeac/view/0207fb85)

js事件循环
构造函数
原型链
promise与ajax的区别
定时器是否固定时长触发
new要如何实现


	
	





