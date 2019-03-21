import Vue from 'vue'
import Router from 'vue-router'

import BlogList from '../views/BlogList'
import TopicList from '../views/TopicList'
import HomeScreen from '../views/HomeScreen'
import Blog from '../views/Blog'
import AboutMe from '../views/AboutMe'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: 'my-blog',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: HomeScreen,
    },
    {
      name: 'Blogs',
      path: '/blogs',
      component: BlogList,
    },
    {
      name: 'Blog',
      path: '/blogs/:blog',
      component: Blog,
    },
    {
      name: 'Topics',
      path: '/topics',
      component: TopicList,
    },
    {
      name: 'Topic',
      path: '/topics/topic',
      component: BlogList,
    },
    {
      name: 'About Me',
      path: '/about-me',
      component: AboutMe,
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})

