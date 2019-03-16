<template>
  <div class="navbar">
    <menu-item v-for="page in pages" :text="page" :key="page"></menu-item>
  </div>
</template>

<script>
  import MenuItem from "./MenuItem"
  export default {
    name: "Menu",
    components: {MenuItem},
    data () {
      return {
        pages: [
          'Home',
          'Blogs',
          'About Me',
        ]
      }
    }
  }
</script>

<style scoped>
.navbar {
  font-family: serendity;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 45px;
  line-height: 50px;
  overflow: hidden;
}
</style>
