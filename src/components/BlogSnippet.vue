<template>
  <div class="blog-snippet">
    <router-link :to="'/my-blog/blogs/' + blog.name">
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
      image: String,
      blog: Object,

    },
    data () {
      return {
        imagePath: require(`../assets/images/${this.image}`),
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/css/blog-snippet";
</style>
