import Vue from  'vue';  //这种写法只支持render
import App from './App.vue';

import Home from './components/Home.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter) //引入router必须使用use
let router = new VueRouter({
    routes:[
        {path:'./home',component:Home}
    ]
});

new Vue({
    router,
    el:'#app',
    render:h=>h(App)
});