import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      component: Register,
      meta: {auth: true}
    },
    {
      path: '/login',
      component: Login,
      meta: {auth: false}
    },
    {
      path: '/list',
      component: List,
      meta: {auth: true}
    }
  ]
})
