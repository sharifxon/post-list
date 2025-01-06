<script setup>
import Header from "./components/Header.vue";
import PostCard from "./components/PostCard.vue";
</script>

<template>
  <main class="main-body">
    <div class="container">
      <Header />
      <PostCard/>
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
  padding-bottom: 32px;
}
</style>
