import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
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
      component: () => import( /* webpackChunkName: "Register" */ '@/views/register/Register'),
      meta: {
        title: '注册',
        requiresAuth: false,
        roleId: 1
      }
    },
    //////////////////////////////////以下为测试点
    {
      path: '/slideshow',
      name: 'SlideShow',
      component: () => import( /* webpackChunkName: "slideshow" */ '@/views/test_cxj/slideshow/SlideShow'),
      meta: {
        title: '图片轮播',
        requiresAuth: false,
        roleId: 1
      }
    }


  ]
})
