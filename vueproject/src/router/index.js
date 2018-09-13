import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import headerNavBar from '../components/headerNavBar.vue';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'headerNavBar',
      component: headerNavBar
    }
  ]
})
