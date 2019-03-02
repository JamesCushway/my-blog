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
          'One',
          'Two',
        ]
      }
    }
  }
</script>

<style scoped>
.menu {
  position: relative;
  display: inline-block;
  left: 30px;
  top: 20px;
  float: left;
}
</style>
