<script setup>
import Header from "./components/Header.vue";
import PostList from "./components/PostList"
</script>

<template>
  <main class="main-body">
    <div class="container">
      <Header />
      <PostList/>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main-body{
  background-color: #eff1f4;
}
.container {
  width: 80%;
  margin: auto;
}
</style>
