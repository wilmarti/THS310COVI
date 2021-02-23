import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    },
    {
      path: '/regristrese',
      name: 'regristrese',
      component: () => import(/* webpackChunkName: "about" */ '../views/Registrese.vue')
    },
    {
      path: '/regristrese',
      name: 'regristrese',
      component: () => import(/* webpackChunkName: "about" */ '../views/Registrese.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
    },
    {
      path: '/regparticipante',
      name: 'regparticipante',
      component: () => import(/* webpackChunkName: "about" */ '../views/RegParticipante.vue')
    },
    {
      path: '/tregistro3',
      name: 'tregistro3',
      component: () => import(/* webpackChunkName: "about" */ '../views/TRegistro3.vue')
    },
    {
      path: '/validacion',
      name: 'validacion',
      component: () => import(/* webpackChunkName: "about" */ '../views/Validacion.vue')
    }      
  ]
})
