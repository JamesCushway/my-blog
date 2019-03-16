<template>
  <div class="container">
    <div class="blog-header">
      <div class="blog-title">
        {{blog.title}}
      </div>
      <img class="full-width blog-image" :src="blog.image"/>
    </div>
    <div class="blog blog-container">
      <div class="blog-paragraph" v-for="(paragraph, index) in blog.paragraphs" :key="index">
        {{paragraph}}
      </div>
    </div>
  </div>
</template>

<script>
  import blog from '../assets/javascript/blogs/test-blog'
  export default {
    name: "Blog",
    data () {
      return {
        image: require('../assets/images/travel.jpg'),
      }
    },
    created () {
      this.blog = blog
      this.blog.image = require('../assets/images/blog.jpg')
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/css/blog";
</style>
