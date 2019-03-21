<template>
  <div>
    <div class="homescreen-image">
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
    },
    created() {
      window.history.pushState({}, '', '/my-blog')
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/css/homescreen";
</style>
