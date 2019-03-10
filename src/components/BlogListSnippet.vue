<template>
  <div class="blog-snippet">
    <img :src="imagePath"/>
    <div class="description">
      {{description}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "BlogListSnippet"
  }
</script>

<style scoped>
  .blog-snippet {
    border: 1px solid #ccc;
    border-radius: 5px;
    position: relative;
  }
</style>
