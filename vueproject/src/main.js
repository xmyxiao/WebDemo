let str = require('./testA.js');
import Vue from 'vue';
//这样直接引用vue  引用的不是vue.js引用的是vue的runtime
//vue有两部分  一个是编译  一个是运行

//引入一个组件 这里的App是一个对象  可以把App放到render渲染中渲染成真实dom
import App from './App.vue';
new Vue({
  el:'#app',
  render:function(createElement){
    return createElement('h1','hell',[
      'hello'
      createElement('span','123')
    ]);//<h1>hell123</h1>  span是创建的子元素
      //createElement创建的是虚拟dom  render时渲染为真实dom
  }
});

