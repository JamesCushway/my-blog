<template>
  <div id="app">
    <HomeScreen></HomeScreen>
  </div>
</template>

<script>
import HomeScreen from './views/HomeScreen'

export default {
  name: 'app',
  components: {
    HomeScreen,
  }
}
</script>

<style>
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
