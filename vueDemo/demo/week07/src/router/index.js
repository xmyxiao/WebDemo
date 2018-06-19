import Vue from  'vue';  //这种写法只支持render
import Home from '../components/Home.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter) //引入router必须使用use
export default new VueRouter({
    routes:[
        {path:'./home',component:Home}
    ]
});

