<script lang="ts" setup>
import type { Post } from "@/types/Post";
import { reactive, shallowReactive } from "vue";
import { usePostStore } from "@/stores/postStores";
import { useRoute, useRouter } from "vue-router";

const postStore = usePostStore();
const route = useRoute();
const router = useRouter();

const isEditing = !!route.query.id;
const postData = shallowReactive({
  title: "",
  body: "",
  userId: 12,
});

if (isEditing) {
  const existingPost = postStore.posts.find((p) => p.id === +route.query.id);
  if (existingPost) {
    postData.title = existingPost.title;
    postData.body = existingPost.body;
  }
}

const sendPostData = async () => {
  await postStore.addPost(postData);
  router.push("/");
};

const updatePost = async () => {
  if (isEditing && route.query.id) {
    await postStore.updatePost(+route.query.id, postData);
    router.push("/");
  }
};

const handleSubmit = async () => {
  if (isEditing) {
    await updatePost();
  } else {
    await sendPostData();
  }
};
</script>

<template>
  <div class="post">
    <h1 class="post__title">{{ isEditing ? "Postni Tahrirlash" : "Post Qo'shish" }}</h1>
    <div class="post__form">
      <form @submit.prevent="handleSubmit">
        <div class="post__form-title">
          <label for="title">title:</label>
          <input type="text" name="" id="title" v-model="postData.title" />
        </div>
        <div class="post__form-body">
          <label for="body">post body:</label>
          <textarea name="body" id="body" v-model="postData.body"></textarea>
        </div>
        <div class="post__form-btn">
          <button class="post__form-submit" type="submit">
            {{ isEditing ? "Update Post" : "Send Post" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post {
  width: 60%;
  margin: auto;
  &__form {
    background: #f8f8f8;
    padding: 8px;
    input {
      width: 100%;
      padding: 12px;
      font-size: 20px;
      border-radius: 16px;
      border: #57b846 solid 2px;
    }
    label {
      font-size: 20px;
    }
    input:focus,
    textarea:focus {
      outline: none;
    }
    textarea {
      width: 100%;
      height: 120px;
      border: solid #57b846 2px;
      border-radius: 16px;
      padding: 12px;
      overflow-y: auto;
    }
    &-body {
      margin-top: 32px;
    }
    &-btn {
      margin-top: 32px;
      display: flex;
      justify-content: center;
    }
    &-submit {
      color: #fff;
      background-color: #57b846;
      font-weight: 500;
      padding: 12px 24px;
      border-radius: 1rem;
      width: 256px;
      font-size: 20px;
      margin: auto;
      cursor: pointer;
      border: none;
    }
    &-submit:hover {
      opacity: 0.8;
    }
  }
}
</style>
