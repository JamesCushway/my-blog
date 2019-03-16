<template>
  <div style="background-color: whitesmoke">
    <div class="homescreen-image">
      <span>The life and travels of a spontanious adventurer.</span>
      <img :src="image"/>
      <span>The Life and Travels of a Spontaneous Adventurer.</span>
    </div>
    <div class="homescreen-blogs">
      <BlogList></BlogList>
    </div>
  </div>
</template>

<script>

  import BlogList from "./BlogList"
  export default {
    name: "HomeScreen",
    components: {
      BlogList,
    },
    data () {
      return {
        image: require('../assets/images/lake.jpg')
      }
    }
  }
</script>

<style scoped lang="scss">
  .homescreen-image {
    width: 100%;
    height: 70vh;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    position: relative;

    img {
      height: 100%;
      width: 100%;
      z-index: 0;
      position: relative;
      filter: brightness(50%);
    }

    span {
      font-family: serendity;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 30px;
    }
  }
  .homescreen-blogs {
    margin-top: 30px;
  }
</style>
