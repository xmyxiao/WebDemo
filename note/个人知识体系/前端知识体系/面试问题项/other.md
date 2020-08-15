**mvvm解决了什么问题？**</br>
　　频繁操作dom元素 视图更新不需要再写代码</br>

**mvvm和mvc的差异？**</br>
　　mvvm是数据双向绑定,数据更新时页面刷新</br>
　　mvc数据在更新时需要通过控制层来操作dom更新页面</br>
　　http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html</br>

**对前端工程化的理解？**</br>
　　一个符合前端工程化要求的方案应该包含以下要素:</br>
　　　　开发规范</br>
　　　　模块化开发</br>
　　　　组件化开发</br>
　　　　组件仓库</br>
　　　　性能优化</br>
　　　　部署</br>
　　　　开发流程</br>
　　　　开发工具</br>
　　　　为了应对在大型项目中复杂的开发、测试、部署工作</br>
　　　　https://juejin.im/post/58ac334e8d6d810058c103e0</br>

**对组件化的理解？**</br>
　　现在的前端组件不仅仅是ui组件 更多的是包含具体业务的业务组件</br>
　　但是组件要保持尽量的低耦合 一个组件功能不宜过于复杂 最好是单一功能 更易于维护</br>
　　以组件为单位，将组件相关的HTML／JS／CSS放到同一个地方。</br>
　　组件可以跨项目使用</br>

**性能优化的方法？**</br>
　　链接：https://zhuanlan.zhihu.com/p/30345077</br>
　　一：内容方面</br>
　　　　1.减少HTTP请求：合并文件、css精灵（将将一个页面涉及到的所有零星图片都包含到一张大图中）、inline Image</br>
　　　　2.减少DNS查询：DNS查询完成以前浏览器不能从这个主机下载任何文件。方法：DNS缓存、将资源分布到恰当的数量的主机名，平衡并行下载和DNS查询</br>
　　　　3.避免重定向：多余的中间访问</br>
　　　　4.使Ajax可以缓存</br>
　　　　5.非必须组件延迟加载</br>
　　　　6.未来所需组件预加载</br>
　　　　7.捡到DOM元素数量</br>
　　　　8.将资源放在不同的域下：浏览器同时从一个域下载资源的数目有限，增加域可以提高并行下载量</br>
　　　　9.减少iframe数量</br>
　　　　10.不要发生404等低级错误</br>
　　二：服务端方面</br>
　　　　1.使用CDN</br>
　　　　2.添加Expires和Cache-Control响应头</br>
　　　　3.对组件进行Gzip压缩</br>
　　　　4.配置ETag</br>
　　　　5.Flush Buffer Early</br>
　　　　6.Ajax使用GET进行请求</br>
　　　　7.在img标签中不要使用空的src属性</br>
　　三：cookie方面</br>
　　　　减少cookie的大小，引入的资源中不要包含cookie</br>
　　四：CSS方面</br>
　　　　1.将样式表放在页面顶部</br>
　　　　2.不使用CSS表达式</br>
　　　　3.尽量不实用@import，分配好各项的权重问题</br>
　　　　4.不使用IE的Filter</br>
　　五：JS方面</br>
　　　　1.将脚本放在页面底部</br>
　　　　2.遵循W3C标准，实行将行为，样式，结构相分离，将JS和CSS文件从外部引入</br>
　　　　3.压缩JS和CSS</br>
　　　　4.选择好的脚本，删除不必要的脚本</br>
　　　　5.减少DOM的访问</br>
　　　　6.合理设计事件监听器</br>
　　六：图片方面</br>
　　　　1.优化图片：根据实际颜色需要选择色深、压缩</br>
　　　　2.优化CSS精灵</br>
　　　　3.不要在HTML中拉伸图片</br>
　　　　4.保证favicon.ico小并且可以缓存</br>

**手机为什么不能播放rtmp视频？**</br>
　　rtmp协议需要在flash插件才能播放 手机端很多没有集成flash

**em和rem的区别？**</br>
　　em会继承父级元素的字体大小</br>
　　rem相对的是HTML根元素</br>

**节流和抖动的区别？**</br>
　　函数节流的要点是，声明一个变量当标志位，记录当前代码是否在执行。</br>
　　　　如果空闲，则可以正常触发方法执行。</br>
　　　　如果代码正在执行，则取消这次方法执行，直接return。</br>
　　函数防抖 如果方法多次触发，则把上次记录的延迟执行代码用clearTimeout清掉，重新开始。</br>
　　　　如果计时完毕，没有方法进来访问触发，则执行代码。</br>
　　https://www.cnblogs.com/walls/p/6399837.html</br>

**vue 的v-for中的key值的作用？**</br>
　　如果数据项的顺序被改变，Vue将不是移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。</br>
　　为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key 属性。</br>

**webpack怎么解决跨域问题？**</br>
　　用webpack-dev-server开发时代理，决解开发时跨域问题</br>

**canvas斜线的锯齿感(待测试)？**</br>
　　https://www.zhihu.com/question/279222232
```javascript
　　let width = canvas.width,height=canvas.height;
　　if (window.devicePixelRatio) { //设备像素比
　　　　canvas.style.width = width + "px";
　　　　canvas.style.height = height + "px";
　　　　canvas.height = height * window.devicePixelRatio;
　　　　canvas.width = width * window.devicePixelRatio;
　　　　ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
　　}
```
**css left top和transform的区别？**</br>
　　left top在选择%计算时候，是按照父节点的长宽来位移，而transform的%是按照自身节点的宽高来位移</br>