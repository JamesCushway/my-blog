<template>
  <div>
    <div class="navbar">
      <div class="container">
        <img class="menu-image" src="../assets/images/menu.png" v-on:click="toggleMenu"/>
        <div class="menu">
          <menu-item v-for="page in pages" :text="page" :key="page"></menu-item>
        </div>
      </div>
    </div>
    <div class="mobile-menu" :class="{ 'fade-out': !menuVisible }" v-if="menuVisible">
      <i class="close-menu fa fa-times" v-on:click="toggleMenu"></i>
      <menu-item v-for="page in pages" :text="page" :key="page"></menu-item>
    </div>
  </div>
</template>

<script>
  import MenuItem from "./MenuItem"
  export default {
    name: "Menu",
    components: {MenuItem},
    data() {
      return {
        pages: [
          'Home',
          'Blogs',
          'About Me',
        ],
        menuVisible: false,
      }
    },
    methods: {
      toggleMenu() {
        this.menuVisible = !this.menuVisible
      }
    },
    watch: {
      '$route' () {
        if (this.menuVisible) {
        this.toggleMenu()
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/css/navbar";
</style>
