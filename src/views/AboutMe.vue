<template>
  <div class="about-me">
    <div class="about-me-image">
      <img :src="aboutMe.image"/>
    </div>
    <div class="about-me-description blog-container">
      <p v-for="paragraph in aboutMe.paragraphs">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script>
  import aboutMe from '../assets/javascript/about-me'
  export default {
    name: "AboutMe",
    data () {
      return {
        aboutMe: {},
      }
    },
    created () {
      this.aboutMe = { ...aboutMe }
      this.aboutMe.image = require(`../assets/images/${this.aboutMe.image}`)
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/css/about-me.scss";
  @import "../assets/css/blog";
</style>
