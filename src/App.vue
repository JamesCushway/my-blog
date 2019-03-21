<template>
  <div id="app">
    <Menu></Menu>
    <div class="main-content">
      <router-view></router-view>
    </div>
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

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate3d(0, -20%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translate3d(0, 0%, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, -20%, 0);
    }
  }

  #app {
    font-family: Montserrat, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    background-color: whitesmoke;
  }

  .main-content {
    margin-top: 45px;
  }

</style>
