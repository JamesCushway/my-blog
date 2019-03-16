<template>
  <router-link :to="{name: text}">
    <div class="menu-item menu-item--white">{{text}}</div>
  </router-link>

</template>

<script>
  export default {
    name: "MenuItem",
    props: {
      text: String,
    }
  }
</script>

<style scoped>
  .menu-item {
    float: left;
    margin: 0 10px;
    font-size: 20px;
  }

  .menu-item--white {
    color: black;
  }

</style>
