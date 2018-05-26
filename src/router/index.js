import Vue from 'vue'
import Router from 'vue-router'
import Developers from '../components/view/developers.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Developers',
      name: 'Developers',
      component: Developers
    }
  ]
})
