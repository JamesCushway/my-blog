<template>
  <div class="blog">
    <div class="blog-header">
      <div class="blog-title">
        {{blog.title}}
      </div>
      <img class="full-width blog-image" :src="blog.image"/>
    </div>
    <div class="blog-container">
      <div class="blog-paragraph" v-for="(paragraph, index) in blog.paragraphs" :key="index">
        {{paragraph}}
      </div>
    </div>
    <social-media-links :title="blog.title" :url="`https://www.wonderousadventurer.com/${$route.params.blog}`"></social-media-links>
  </div>
</template>

<script>
  import blogs from '../assets/javascript/blogs'
  import SocialMediaLinks from "../components/SocialMediaLinks"
  export default {
    name: "Blog",
    components: {
      SocialMediaLinks
    },
    data () {
      return {
        image: '',
        blog: {},
      }
    },
    created () {
      this.blog = { ...blogs[this.$route.params.blog] }
      this.blog.image = require(`../assets/images/blogs/${this.blog.image}`)
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/css/blog";
  .circle {
    border-radius: 20px;
  }
</style>
