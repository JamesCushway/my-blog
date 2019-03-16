<template>
  <div id="app">
    <div class="container">
      <Menu></Menu>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

import Menu from "./components/NavBar"
export default {
  name: 'app',
  components: {Menu},
}
</script>

<style lang="scss">
  @import 'assets/css/style.css';
  @font-face {
    font-family: serendity;
    src: url('./assets/fonts/serendity-script.woff'), url('./assets/fonts/serendity-script.woff') format('woff');
  }
  @font-face {
    font-family: Montserrat;
    src: url('./assets/fonts/Montserrat-ExtraLight.ttf'), url('./assets/fonts/Montserrat-ExtraLight.ttf') format('ttf');
  }
  #app {
    font-family: Montserrat, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

</style>
