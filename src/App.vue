<template>
  <div id="app">
    <div class="container">
      <Menu></Menu>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

import Menu from "./components/Menu"
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
    font-family: MontserratExtraLight;
    src: url('./assets/fonts/Montserrat-ExtraLight.ttf'), url('./assets/fonts/Montserrat-ExtraLight.ttf') format('ttf');
  }
  @font-face {
    font-family: MontserratLight;
    src: url('./assets/fonts/Montserrat-Light.ttf'), url('./assets/fonts/Montserrat-Light.ttf') format('ttf');
  }
  #app {
    font-family: MontserratExtraLight, Helvetica, sans-serif;
  }

</style>
