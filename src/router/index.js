import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: ()=>import ('../components/home')
    },
    {
      path: '/mine',
      name: 'mine',
      component: ()=>import ('../components/mine')
    },
    {
      path: '/share',
      name: 'share',
      component: ()=>import ('../components/share')
    }
  ]
})
