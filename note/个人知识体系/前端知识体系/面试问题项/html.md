**如何理解 HTML 语义化？**</br>
　　what：根据内容的结构化（语义化）选择合适的标签</br>
　　why: </br>
　　　　1. 有利于seo  爬虫爬取  方便解析</br>
　　　　2. 用户体验更好  title、alt等都在此列以及当样式文件无法加载时  页面的表现更好</br>
　　　　3. 便于团队的开发与维护</br>
　　how: </br>
　　　　1.减少无语义标签的使用  如div、span等</br>
　　　　2.不要使用纯样式标签，如：b、font、u等，改用css设置</br>
　　　　3.使用表格时，标题要用caption，表头用thead，主体部分用tbody包围，尾部用tfoot包围。表头和一般单元格要区分开，表头用th，单元格用td</br>

**meta viewport 是做什么用的，怎么写？**</br>
　　浏览器视窗  可以规定视窗的宽高  最大最小缩放比例  是否允许手动缩放</br>
　　`<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">`</br>
　　initial-scale : 默认缩放比例</br>
　　minimum-scale : 最小缩放比例</br>
　　maximum-scale : 最大缩放比例</br>
　　user-scalable : 是否允许用户缩放  这个设置为no时最大和最小缩放比例无效 可以不写</br>

**canvas 元素是干什么的**</br>
　　画布  可以用于生成二维码图片等    不支持事件处理器</br>
　　svg也可以用于创建图形   支持事件处理器</br>
　　渲染处理也不同   canvas是整个画布渲染   svg可以只渲染一个图形</br>
　　渲染速度  canvas取决于画布的大小，svg取决于图形的个数</br>

