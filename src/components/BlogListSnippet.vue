<template>
  <div class="blog-snippet">
    <router-link :to="'/blogs/' + blog.name">
      <img :src="imagePath"/>
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
  .blog-snippet {
    width: 90%;
    height: 20%;
    overflow: hidden;
    margin: 10px auto;
    background-color: white;
  }
  .blog-snippet img {
    width: 100%;
    height: 10%;
  }
  .blog-snippet .information {
    padding: 10px;
    text-align: left;
    hr {
      /* Set the hr color */
      color: #ccc; /* old IE */
      background-color: #ccc; /* Modern Browsers */
    }
    .blog-description {
      margin-top: 5px;
      font-size: 12px;
    }

    .blog-title {
      font-size: 12px;
      font-weight: 600;
    }
    .blog-date {
      font-size: 10px;
    }
  }
  @media only screen and (min-width: 768px) {
    .blog-snippet {
      width: 48%;
      height: 20%;
      overflow: hidden;
      margin: 10px auto;
      background-color: white;
    }
    .blog-snippet img {
      width: 100%;
      height: 10%;
    }
  }
  @media only screen and (min-width: 950px) {
    .blog-snippet {
      width: 30%;
      margin: 1.5%;
      max-height: 400px;
    }
  }
  @media only screen and (min-width: 1360px) {
    .blog-snippet {
      width: 30%;
      height: 250px;
      margin: 1.5%;
    }
    .blog-snippet img {
      height: 150px;
    }
  }
  @media only screen and (min-width: 1900px) {
    .blog-snippet {
      height: 350px;
    }
    .blog-snippet img {
      width: 100%;
      height: 230px;
    }
  }
</style>
