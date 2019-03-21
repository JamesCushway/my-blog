<template>
  <div class="container">
    <div class="blog-list">
      <BlogListSnippet v-for="(blog, index) in blogs" :blog="blog" :blogIndex="index" :key="index"></BlogListSnippet>
    </div>
  </div>

</template>

<script>
  import BlogListSnippet from "../components/BlogSnippet"
  import blogs from '../assets/javascript/blogs'
  export default {
    name: "BlogList",
    components: {BlogListSnippet},
    data () {
      return {
        blogs
      }
    }
  }
</script>

<style scoped>
  .blog-list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
</style>
