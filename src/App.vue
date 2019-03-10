<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="scss">
  @import 'assets/css/style.css';
  @font-face{
    font-family: serendity;
    src: url('./assets/fonts/serendity-script.woff'), url('./assets/fonts/serendity-script.woff') format('woff');
  }
  #app {
    font-family: serendity;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>
