<template>
  <social-sharing :url="url" :title="title" :description="description" inline-template>
    <div>
      <network network="facebook" style="cursor: pointer">
        <i class="fab fa-facebook"></i>
      </network>
      <network network="twitter" style="cursor: pointer">
        <i class="fab fa-twitter"></i>
      </network>
    </div>
  </social-sharing>
</template>

<script>
  export default {
    name: "SocialMediaLinks",
    props: {
      url: String,
      title: String,
      description: String,
    },
  }
</script>

<style scoped>

</style>
