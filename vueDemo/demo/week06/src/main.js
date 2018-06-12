import Vue from  'vue';  //这种写法只支持render
import App from './App.vue';

import router from './router/index.js';//导入路由
new Vue({
    router,
    el:'#app',
    render:h=>h(App)
});