import Vue from 'vue'
import Router from 'vue-router'

import BlogList from '../views/BlogList'
import TopicList from '../views/TopicList'
import HomeScreen from '../views/HomeScreen'
import Blog from '../views/Blog'
import AboutMe from '../views/AboutMe'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/my-blog/',
      component: HomeScreen,
    },
    {
      name: 'Blogs',
      path: '/my-blog/blogs',
      component: BlogList,
    },
    {
      name: 'Blog',
      path: '/my-blog/blogs/:blog',
      component: Blog,
    },
    {
      name: 'Topics',
      path: '/my-blog/topics',
      component: TopicList,
    },
    {
      name: 'Topic',
      path: '/my-blog/topics/topic',
      component: BlogList,
    },
    {
      name: 'About Me',
      path: '/my-blog/about-me',
      component: AboutMe,
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})

