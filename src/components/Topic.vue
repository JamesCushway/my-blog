<template>
  <div class="topic">
    <img :src="imagePath"/>
    <span class="topic-text"> {{name}} </span>
    <p>{{description}}</p>
  </div>
</template>

<script>
  export default {
    name: "Topic",
    props: {
      image: String,
      description: String,
    },
    data () {
      let name = this.image.split('.')[0]
      return {
        imagePath: require(`../assets/images/${this.image}`),
        name: name.charAt(0).toUpperCase() + name.slice(1),
      }
    },
  }
</script>

<style scoped>
  .topic {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
  }
  .topic img {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    -webkit-filter: brightness(60%);
    filter: brightness(60%);
  }
  .topic-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 20px;
  }
  .topic p {
    position: absolute;
    top: 50%;
    padding: 0px 5px;
    font-size: 10px;
    font-weight: bold;
    color: white;
    visibility: hidden;
    font-family: "Courier New", Courier, monospace;
    transform: translate(-0%, -60%);
  }
  .topic:hover img {
    filter: blur(3px) brightness(30%);
    height: 110%;
    width: 110%;
    transform: translate(-5%, -5%);
  }
  .topic:hover .topic-text {
    font-size: 30px;
    top: 10%;
    transform: translate(-50%, -0%);
  }
  .topic:hover p {
    visibility: visible;
  }
</style>
