<template>
  <div class="menu">
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
          'Topics',
          'Blogs',
          'About Me',
        ]
      }
    }
  }
</script>

<style scoped>
.menu {
  display: block;
  float: left;
  margin-right: 20px;
  font-family: serendity;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
