import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import frame from '../view/frame/index.vue';
import exampleBind from '../view/example/bind.vue'

export default new Router({
  routes: [
    {
      path: '/',
      component: frame
    },
    {
      path: '/example/bind',
      component: exampleBind
    },
  ]
})
