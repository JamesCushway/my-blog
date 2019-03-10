<template>
  <div class="home-screen">
    <div class="overlay">
    </div>
    <Menu></Menu>
    <Welcome></Welcome>
  </div>

</template>

<script>

  import Menu from "../components/Menu"
  import Welcome from '../components/Welcome'
  export default {
    name: "HomeScreen",
    components: {
      Welcome,
      Menu,
    }
  }
</script>

<style scoped>
  .home-screen {
    background-image: url(../assets/images/lake.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    z-index: -1;
    position: absolute;
  }
  .overlay {
    position: absolute;
    content:" ";
    top:0;
    left:0;
    width:100%;
    height:100%;
    display: block;
    z-index:0;
    background-color: rgba(0,0,0,0.5);
  }
</style>
