import Vue from 'vue'
import Router from 'vue-router'
import Info from '@/components/info'
import Home from '@/components/default'
import H5 from '@/components/h5'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/h5',
      name: 'H5',
      component: H5
    }
  ]
})
