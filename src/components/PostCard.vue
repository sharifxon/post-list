<script lang="ts" setup>
import { usePostStore } from "@/stores/postStores";
import { computed, onMounted } from "vue";
import Loader from "./Loader.vue";
import Modal from "@/components/Modal.vue";
import PostForm from "@/components/PostForm.vue";
import DeletePost from "@/components/DeletePost.vue";
import { useModalStore } from "@/stores/modalStore";

const postStore = usePostStore();
const modalStore = useModalStore();
const userId = 1;
const isDelete = computed(() => !!modalStore.deletePostId);

onMounted(() => {
  postStore.fetchPosts(userId);
});

const deletePost = (id: number) => {
  modalStore.openModal(id);
  modalStore.deletePost(id);
};

const openModal = (id: number) => {
  modalStore.openModal(id);
};

const postList = computed(() => postStore.posts);
</script>

<template>
  <div v-if="postStore.loading" class="loader">
    <Loader />
  </div>
  <div class="posts">
    <div class="postt" v-for="post in postList">
      <h2 class="postt__card-title">
        {{ post.title }}
      </h2>
      <p class="postt__card-body">
        {{ post.body }}
      </p>
      <div class="postt__card-footer">
        <span class="edit-icon fas fa-pen" @click="openModal(post.id)"></span>
        <span class="delete-icon far fa-trash-can" @click="deletePost(post.id)">
        </span>
      </div>
    </div>
  </div>
  <Modal>
    <DeletePost v-if="isDelete" />
    <PostForm v-else />
  </Modal>
</template>

<style lang="scss" scoped>
.posts {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.postt {
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

.loader {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 128px;
}
</style>
