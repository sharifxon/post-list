<script lang="ts" setup>
import { usePostStore } from "@/stores/postStores";
import { computed, onMounted } from "vue";

const postStore = usePostStore();
const userId = 1
onMounted(() => {
  postStore.fetchPosts(userId);
});

const deletePost = async(id:number) => {
 await postStore.deletePost(id)
}

const postList = computed(() => postStore.posts);
</script>

<template>
  <div v-if="postStore.loading" class="loader">
    <div class="dot-spinner">
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
    </div>
  </div>
  <div class="posts">
    <div class="post" v-for="post in postList">
      <h2 class="post__card-title">
        {{ post.title }}
      </h2>
      <p class="post__card-body">
        {{ post.body }}
      </p>
      <div class="post__card-footer">
        
        <router-link :to="{ path: '/post-form', query: {id: post.id}}" >
          <span class="edit-icon fas fa-pen"> </span>
        </router-link>
        <span class="delete-icon far fa-trash-can" @click="deletePost(post.id)"> </span> 
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
  width: 48%;
  background-color: #fff;
  border-radius: 16px;
  padding: 24px;
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
    span:hover {
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

.loader{
  width: 100%;
  height: 100%;
  display: flex;
  // align-items: center;
  justify-content: center;
  margin-top: 128px;
}
.dot-spinner {
  --uib-size: 2.8rem;
  --uib-speed: .9s;
  --uib-color: #183153;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: var(--uib-size);
  width: var(--uib-size);
}

.dot-spinner__dot {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}

.dot-spinner__dot::before {
  content: '';
  height: 20%;
  width: 20%;
  border-radius: 50%;
  background-color: var(--uib-color);
  transform: scale(0);
  opacity: 0.5;
  animation: pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;
  box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
}

.dot-spinner__dot:nth-child(2) {
  transform: rotate(45deg);
}

.dot-spinner__dot:nth-child(2)::before {
  animation-delay: calc(var(--uib-speed) * -0.875);
}

.dot-spinner__dot:nth-child(3) {
  transform: rotate(90deg);
}

.dot-spinner__dot:nth-child(3)::before {
  animation-delay: calc(var(--uib-speed) * -0.75);
}

.dot-spinner__dot:nth-child(4) {
  transform: rotate(135deg);
}

.dot-spinner__dot:nth-child(4)::before {
  animation-delay: calc(var(--uib-speed) * -0.625);
}

.dot-spinner__dot:nth-child(5) {
  transform: rotate(180deg);
}

.dot-spinner__dot:nth-child(5)::before {
  animation-delay: calc(var(--uib-speed) * -0.5);
}

.dot-spinner__dot:nth-child(6) {
  transform: rotate(225deg);
}

.dot-spinner__dot:nth-child(6)::before {
  animation-delay: calc(var(--uib-speed) * -0.375);
}

.dot-spinner__dot:nth-child(7) {
  transform: rotate(270deg);
}

.dot-spinner__dot:nth-child(7)::before {
  animation-delay: calc(var(--uib-speed) * -0.25);
}

.dot-spinner__dot:nth-child(8) {
  transform: rotate(315deg);
}

.dot-spinner__dot:nth-child(8)::before {
  animation-delay: calc(var(--uib-speed) * -0.125);
}

@keyframes pulse0112 {
  0%,
  100% {
    transform: scale(0);
    opacity: 0.5;
  }

  50% {
    transform: scale(1);
    opacity: 1;
  }
}

</style>
