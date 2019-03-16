<template>
  <div class="container">
    <img :src="image"/>
    <p>
      {{aboutMe}}
    </p>
  </div>
</template>

<script>
  import {aboutMe} from "../assets/javascript/storage"

  export default {
    name: "AboutMe",
    data () {
      return {
        image: require('../assets/images/me.png'),
      }
    }
  }
</script>

<style scoped>
  .container img {
    width: 30%;
  }
</style>
