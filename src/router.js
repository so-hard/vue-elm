import Vue from 'vue'
import Router from 'vue-router'



import Msite from './views/Msite.vue'
Vue.use(Router)

export default new Router({
  routes: [

    //重定向
    {
      path: '/',
      redirect: '/msite'
    },

    {
      path: '/login',
      name: 'login',
      component: ()=> import('./views/Login.vue')
    },
    {
      path: '/msite',
      name: 'msite',
      component: Msite
    },
    //动态加载组件
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('./views/Order.vue'),
      children: [
        {
          path: 'unlogin',
          name: 'unLogin',
          component: () => import('./components/UnLogin.vue')
        },
        {
          path: '',
          redirect: 'unlogin'
        },
        {
          path: 'orderul',
          name: 'orderul',
          component: () => import('./components/order/OrderUl')
        }
    ]
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
