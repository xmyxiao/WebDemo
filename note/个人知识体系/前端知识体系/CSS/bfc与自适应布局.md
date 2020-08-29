**bfc与自适应布局**</br>
　　[参考地址](https://www.zhangxinxu.com/wordpress/2015/02/css-deep-understand-flow-bfc-column-two-auto-layout/)</br>
　　主要是因为流体特性</br>
　　普通流体元素BFC后，为了和浮动元素不产生任何交集，顺着浮动边缘形成自己的封闭上下文</br>
　　同时，元素原本的流体特性依然保留了</br>
　　虽然不与浮动交集，自动退避浮动元素宽度的距离，但，本身作为普通元素的流动性依然存在，反映在布局上就是自动填满除去浮动内容以外的剩余空间</br>
