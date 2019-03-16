<template>
  <div class="container">
    {{$route.params.blog}}
    <img :src="image"/>
  </div>
</template>

<script>
  export default {
    name: "Blog",
    data () {
      return {
        image: require('../assets/images/' + this.$route.params.blogName + '.jpg')
      }
    }
  }
</script>

<style scoped>

</style>
