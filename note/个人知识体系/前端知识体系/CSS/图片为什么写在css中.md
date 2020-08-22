**图片为什么写在css中**</br>
　　区别：</br>
　　　　图片可以以`<img src="" />` 以及background: url(../img/email-spring.png) no-repeat;</br>
　　　　一种是作为图片加载 另一种是作为背景加载</br>
　　　　作为图片加载会与页面结构一起加载  作为背景加载则会在页面结构加载完成之后再进行加载</br>

　　写在css中的优点：</br>
　　　　不会影响页面结构的加载</br>
　　　　```background: url(../img/email-spring.png) 0px 0px no-repeat;```</br>
　　　　结合spring图  将多个小的图标结合在一个页面  减少http请求 加快页面加载速度</br>

