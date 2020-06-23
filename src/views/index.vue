<template>
  <div class="home">
    <v-navbar />
    <div class="home_area">
      <img class="home_img" src="@/assets/logo.png" alt="logo" />
      <h1 class="home_title">Hello Vue Auto 认证</h1>
    </div>
  </div>
</template>

<script>
import VNavbar from '@/components/navbar/index'

export default {
  name: 'Home',
  components: {
    VNavbar
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.home {
  .home_area {
    display: flex;
    padding: 1rem;
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
    .home_img {
      height: 300px;
      display: inline-block;
      object-fit: cover;
    }
  }
}
</style>
