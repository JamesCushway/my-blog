<template>
  <div>
    <div class="homescreen-image">
      <swiper :options="swiperOptions" class="image-slider">
        <swiper-slide v-for="(image, index) in images" :key="index">
          <img :src="image"/>
        </swiper-slide>
      </swiper>
      <span>The Life and Travels of a Spontaneous Adventurer.</span>
    </div>
    <div class="homescreen-blogs">
      <BlogList></BlogList>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import BlogList from "./BlogList"
  export default {
    name: "HomeScreen",
    components: {
      BlogList,
      swiper,
      swiperSlide,
    },
    data () {
      return {
        images: [
          require('../assets/images/lake.jpg'),
          require('../assets/images/blogs/history.png'),
          require('../assets/images/blogs/travel.png'),
        ],
        swiperOptions: {
          loop: true,
          autoplay: {
            delay: 5000,
          },
        }
      }
    },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  }
</script>

<style scoped lang="scss">
  @import "../assets/css/homescreen";
</style>
