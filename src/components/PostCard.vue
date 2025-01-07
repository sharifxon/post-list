<script lang="ts" setup>
import {posts} from '@/stores/postStores.ts'
// console.log(posts)
</script>

<template>
  <div class="posts">
    <div class="post" v-for="post in 8">
      <h2 class="post__card-title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h2>
      <p class="post__card-body">
        Sed in sodales enim, quis bibendum odio. Mauris scelerisque tellus
        velit, a pharetra orci dapibus quis. Nulla tristique facilisis gravida.
        Aliquam mollis, neque vitae aliquet gravida, leo urna sagittis purus, a
        rhoncus libero nulla at mi. Donec quis interdum erat.
      </p>
      <div class="post__card-footer">
        <span class="edit-icon fas fa-pen"> </span>
        <span class="delete-icon far fa-trash-can"> </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.posts {
     display: flex;
     justify-content: space-between;
     flex-wrap: wrap;
}
.post {
  width: 45%;
  background-color: #fff;
  border-radius: 16px;
  padding: 24px;
  font-family: "Mona Sans", sans-serif;
  margin-top: 16px;
  &__card-body {
    color: #59626e;
  }

  &__card-footer {
    display: flex;
    justify-content: flex-end;
    gap: 16px;

    span {
      cursor: pointer;
      border-radius: 50%;
      padding: 10px;
      font-size: 20px;
    }
    span:hover{
        opacity: 0.8;
    }
    .edit-icon {
      color: #feb23a;
      background-color: #fff7eb;
    }
    .delete-icon {
      color: #f78590;
      background-color: #feeff1;
    }
  }
}
</style>
