**box-sizing 　盒子模型  **</br>
　　border-box 从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度（宽高不会被撑开）</br>
　　content-box在宽度和高度之外绘制元素的内边距和边框（宽高会被撑开）</br>

**vertical-align:middle  垂直无效 **</br>
　　vertical-align属性只对行元素有效  对块元素无效</br>

**line-height **</br>
　　行高  不允许使用负值  设置为数值为固定的行间距    设为百分比是基于当前字体尺寸的百分比行间距</br>

**css reset 和 normalize.css 有什么区别**</br>
　　reset 的目的，是将所有的浏览器的自带样式重置掉，这样更易于保持各浏览器渲染的一致性。(抛弃默认样式)</br>
　　normalize 让所有浏览器的标签都跟标准规定的默认样式一致，各浏览器上的标签默认样式基本统一。(统一默认标签)</br>

** 如何居中 **</br>
　　** 水平居中 **</br>
　　　　内联：父级元素 text-align:center;</br>
　　　　块级：margin-left: auto; margin-right: auto;</br>
　　** 垂直居中 **</br>
　　　　table自带功能</br>
　　　　div 装成 table(display:table)</br>
　　　　margin-top -50%</br>
　　** 使用flex **</br>
　　　　display:flex;</br>
　　　　align-items:center;/*垂直居中*/</br>
　　　　justify-content: center;/*水平居中*/</br>