<template>
  <div class="blog-snippet">
    <router-link :to="{ name: 'Blog', params: { blog: blogIndex }}">
      <div class="image-container">
        <img :src="imagePath"/>
      </div>
    </router-link>
    <div class="information">
      <span class="blog-title">
        {{blog.title}}
      </span>
      <hr>
      <p class="blog-description">
        {{blog.description}}
      </p>
      <span class="blog-date">{{blog.date}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BlogListSnippet",
    props: {
      blog: Object,
      blogIndex: String,
    },
    data () {
      return {
        imagePath: '',
      }
    },
    created() {
      this.imagePath = require(`../assets/images/blog-snippets/${this.blog.image}`)
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/css/blog-snippet";
</style>
