import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld'),
      meta: {
        title: '测试页面',
        requiresAuth: false,
        roleId: 1
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import(/* webpackChunkName: "Register" */ '@/views/register/Register'),
      meta: {
        title: '注册',
        requiresAuth: false,
        roleId: 1
      }
    },
    //////////////////////////////////以下为测试点

  ]
})

