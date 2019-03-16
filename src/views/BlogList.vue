<template>
  <div class="container">
    <div class="blog-list">
      <BlogListSnippet v-for="(image, index) in images" :image="image" :blog="blogs[index]" :key="index"></BlogListSnippet>
    </div>
  </div>

</template>

<script>
  import BlogListSnippet from "../components/BlogListSnippet"
  export default {
    name: "BlogList",
    components: {BlogListSnippet},
    data () {
      return {
        images: [
          'blog.jpg',
          'history.jpg',
          'tech.jpg',
          'travel.jpg',
        ],
        blogs: [
          {
            title: 'This is my blog title',
            description: 'This will be a single sentence about the blog.',
            date: '21st March 2019',
          },
          {
            title: 'This is my blog title',
            description: 'This will be a single sentence about the blog.',
            date: '21st March 2019',
          },
          {
            title: 'This is my blog title',
            description: 'This will be a single sentence about the blog.',
            date: '21st March 2019',
          },
          {
            title: 'This is my blog title',
            description: 'This will be a single sentence about the blog.',
            date: '21st March 2019',
          },

        ]
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
