<template>
  <div class="container">
    <h1>Topics</h1>
    <div class="topic-grid">
      <topic v-for="(image, index) in images" :image="image" :description="descriptions[index]" :key="image"></topic>
    </div>
  </div>

</template>

<script>
  import Topic from "../components/Topic"
  export default {
    name: "Topics",
    components: {Topic},
    data () {
      return {
        images: [
          'travel.jpg',
          'tech.jpg',
          'history.jpg',
        ],
        descriptions: [
          'My personal travelling experiences from all over the world.',
          'My experience with and opinions on new technologies.',
          'History I have learnt about all of the countries and cities that I\'ve visited',
        ]
      }
    }
  }
</script>

<style scoped>
  .topic-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
  h1 {
    font-weight: 400;
  }
</style>
