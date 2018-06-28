import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import home from '../components/home.vue';
import list from '../components/list.vue';
import my from '../components/my.vue';

export default new Router({
  routes: [
	{path:'/',redirect:'/home'},  //redirect重定向
  {path:'/home',component:home},
	{path:'/list',component:list},
  {path:'/my',component:my},
  {path:'*',redirect:'/home'}
  ]
})
