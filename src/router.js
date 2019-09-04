/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-18 13:39:20
 * @LastEditTime: 2019-09-03 12:03:08
 * @LastEditors: Please set LastEditors
 */

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
      component: () => import('./views/Login.vue')
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
      children: [{
        path: 'detail/:orderNum',
        component: () => import('./views/order/OrderListDetail.vue')

      }]
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/city',
      name: 'city',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/City.vue')
    },
    {
      path: '/cityList',
      name: 'citylist',
      component: () => import('./views/city/cityList.vue'),
      
    },
    {
      path: '/shop/:text',
      name: 'shop',
      component: () => import('./views/Shop.vue'),
      props: true 
    },
    {
      path: '/shopdetail/:id',
      name: 'shopdetail',
      component: () => import('./views/shop/ShopDetail.vue'),
      props: true,
      redirect: '/shopdetail/:id/shopitem',
      children: [
        {
          path: 'shopitem',
          name : 'shopitem',
          component: () => import('./components/shop/ShopItem.vue')
        },
      ]
    },
    {
      path: '/ordercheckt',
      name: 'ordercheckt',
      component: () => import('./views/order/OrderCheckt.vue'),
    }
  ]
})
