import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloVue from '@/components/day01/HelloVue'
import Home from '@/components/Home'
import newsList from '@/components/news/newsList'
import newsInfo from '@/components/news/newsInfo'

Vue.use(Router)

export default new Router({
  linkActiveClass:'mui-active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/news/newsList',
      name:'newList',
      component:newsList
    },
    {
      path:'/news/newsInfo/:id',
      name:'newsInfo',
      component:newsInfo
    }

  ]
})
