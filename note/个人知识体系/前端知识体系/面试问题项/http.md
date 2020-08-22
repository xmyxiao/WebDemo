**http 状态码有哪些？**</br>
　　100-199 用于指定客户端应相应的某些动作。</br> 
　　200-299 用于表示请求成功。 </br>
　　300-399 用于已经移动的文件并且常被包含在定位头信息中指定新的地址信息。 </br>
　　400-499 用于指出客户端的错误。 </br>
　　500-599 用于支持服务器错误。</br>

**301与302的区别**</br>
　　301 永久重定向，浏览器会记住</br> 
　　302 临时重定向</br> 

**HTTP缓存怎么做**</br>
　　Cache-Control: max-age=300</br>
　　js和css文件通过加？v=1 这种方式避开缓存</br>

**cache-control和Etag的区别是什么**</br>
　　都是http缓存</br>
　　Cache-Control响应头信息中max-age=[秒]类似于过期时间</br>
　　ETag在没有变化时不重新下载数据。</br>

** cookie  session localStorage IndexedDB  **</br>
　　** cookie **</br>
　　　　HTTP响应通过 Set-Cookie 设置 Cookie</br>
　　　　浏览器访问指定域名是必须带上 Cookie 作为 Request Header</br>
　　　　Cookie 一般用来记录用户信息</br>
　　** session **</br>
　　　　Session 是服务器端的内存（数据）</br>
　　　　Session 一般通过在 Cookie 里记录 SessionID 实现</br>
　　　　SessionID 一般是随机数</br>
　　** localStorage **</br>
　　　　LocalStorage 一般5Mb 左右</br>
　　　　不会被发到服务器上</br>
　　　　可以实现永久缓存</br>
　　**IndexedDB **</br>
　　　　浏览器数据库（本地数据库）</br>

**get和post的区别**</br>
　　参数: GET 的参数放在 url 的查询参数里，POST 的参数（数据）放在请求消息体里。</br>
　　安全: GET 没有 POST 安全（都不安全，post也可以通过抓包工具抓取）</br>
　　GET 的参数（url查询参数）有长度限制，一般是 1024 个字符。POST 的参数（数据）没有长度限制（4~10Mb 限制）</br>
　　包: GET 请求只需要发一个包，POST 请求需要发两个以上包（因为 POST 有消息体）（GET 也可以用消息体）</br>
　　GET 用来读数据，POST 用来写数据，POST 不幂等（幂等的意思就是不管发多少次请求，结果都一样。）</br>

**怎么跨域  jsonp是什么  cors是什么   postMessage是什么**</br>
　　** jsonp **</br>
　　　　Web页面上调用js文件是不受是否跨域的影响，在远程服务器上设法把数据装进js格式的文件里，供客户端调用和进一步处理。web客户端通过与调用脚本一模一样的方式，来调用跨域服务器上动态生成的js格式文件（一般以JSON为后缀），这种获取远程数据的方式看起来非常像AJAX，但其实并不一样，为了便于客户端使用数据，逐渐形成了一种非正式传输协议，人们把它称作JSONP，该协议的一个要点就是允许用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了</br>
　　　　参考：https://www.cnblogs.com/TigerZhang-home/p/6902483.html</br>
　　** cors  跨域资源共享 **</br>
　　　　它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制</br>
　　　　大致上就是增加请求头</br>
　　　　参考：http://www.ruanyifeng.com/blog/2016/04/cors.html</br>
　　** postMessage **</br>
　　　　这是个异步消息投放函数</br>
　　　　PostMessage 只把消息放到队列，不管消息是不是被处理就返回</br>

**从输入URL到页面展现中间发生了什么**</br>
　　DNS 查询 DNS 缓存</br>
　　建立 TCP 连接（三次握手）连接复用</br>
　　发送 HTTP 请求（请求的四部分）</br>
　　后台处理请求</br>
　　　　监听 80 端口</br>
　　　　路由</br>
　　　　渲染 HTML 模板</br>
　　　　生成响应</br>
　　发送 HTTP 响应</br>
　　关闭 TCP 连接（四次挥手）</br>
　　解析 HTML</br>
　　下载 CSS（缓存)</br>
　　解析 CSS</br>
　　下载 JS（缓存)</br>
　　解析 JS</br>
　　下载图片</br>
　　解析图片</br>
　　渲染 DOM 树</br>
　　渲染样式树</br>
　　执行 JS</br>

