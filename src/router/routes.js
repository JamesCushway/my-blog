import Vue from 'vue'
import Router from 'vue-router'

import BlogList from '../views/BlogList'
import TopicList from '../views/TopicList'
import HomeScreen from '../views/HomeScreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Home',
      path: '/',
      component: HomeScreen,
    },
    {
      name: 'Blogs',
      path: '/',
      component: BlogList,
    },
    {
      name: 'Topics',
      path: '/',
      component: TopicList,
    },
  ]
})

