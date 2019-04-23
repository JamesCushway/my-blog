<template>
  <router-link :to="{name: text}">
    <div class="menu-item" :class="{ selected, }">
      <i :class="`fa ${faMap[text]}`"></i>
      {{text}}
    </div>
  </router-link>

</template>

<script>
  export default {
    name: "MenuItem",
    props: {
      text: String,
    },
    data () {
      return {
        faMap: {
          Home: 'fa-home',
          Blogs: 'fa-book-open',
          'About Me': 'fa-user',
        }
      }
    },
    computed: {
      selected () { return this.$route.name === this.text }
    },
  }
</script>

<style scoped lang="scss">
  @import "../assets/css/navbar";
</style>
