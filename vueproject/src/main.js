let str = require('./testA.js');
import Vue from 'vue';
//这样直接引用vue  引用的不是vue.js引用的是vue的runtime
//vue有两部分  一个是编译  一个是运行

new Vue({
  el:'#app'
});

