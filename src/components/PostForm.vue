<script lang="ts" setup>
import type { Post } from "@/types/Post";
import { reactive, shallowReactive } from "vue";
import { usePostStore } from "@/stores/postStores";
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { useRoute, useRouter } from "vue-router";
import { useModalStore } from "@/stores/modalStore";

const postStore = usePostStore();
const route = useRoute();
const router = useRouter();
const modalStore = useModalStore();
const postId = modalStore.postId

const isEditing = !!postId;
const postData = shallowReactive({
  title: "",
  body: "",
  userId: 1,
});

const rules = {
  title: { required, minLength: minLength(2) },
  body: { required, minLength: minLength(5) },
};

const v$ = useVuelidate(rules, postData);
if (isEditing && postId) {
  const existingPost = postStore.posts.find((p) => p.id === +postId!);
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
  if (isEditing) {
    await postStore.updatePost(+postId, postData);
    router.push("/");
  }
};

const handleSubmit = async () => {
    v$.value.$touch();
  if (v$.value.$invalid) {
    return; 
  }
  try {
      if (isEditing) {
        await updatePost();

      } else {
        await sendPostData();
      }
      modalStore.closeModal();
  } catch (error) {
    console.error("error:", error);
  }
};

const closeModal = () => {
  modalStore.closeModal();
}
</script>

<template>
  <div class="post">
    <h2 class="post__title">{{ isEditing ? "Edit post" : "Add post" }}</h2>
    <div class="post__form">
      <form @submit.prevent="handleSubmit">
        <div class="post__form-title">
          <label for="title">title:</label>
          <input type="text" name="" id="title" v-model="postData.title" :class="{ invalid: v$.title.$error }" />
          <span v-if="v$.title.$error" class="error">
              {{ v$.title.$errors[0]?.$message || "Title is wrong!" }}
          </span>
        </div>
        <div class="post__form-body">
          <label for="body">post body:</label>
          <textarea name="body" id="body" v-model="postData.body" :class="{ invalid: v$.body.$error }">
          </textarea>
          <span v-if="v$.body.$error" class="error">
              {{ v$.body.$errors[0]?.$message || "Text is incorrect!" }}
          </span>
        </div>
          <button class="post__form-submit" type="submit">
            {{ isEditing ? "Update Post" : "Send Post" }}
          </button>
          <button class="post__form-cancel" type="button" @click="closeModal">
            cancel
          </button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post {
  width: 100%;
  margin: auto;
  &__form {
    // background: #f8f8f8;
    // padding: 0 40px 40px 40px;
    input {
      width: 100%;
      padding: 12px 16px;
      border-radius: 12px;
      border: none;
      background-color: #EFF1F4;
    }
    
    input:focus,
    textarea:focus {
      outline: none;
    }
    textarea {
      width: 100%;
      height: 120px;
      border-radius: 12px;
      padding: 12px 16px;
      overflow-y: auto;
      border: none;
      background-color: #EFF1F4;
    }
    &-body {
      margin-top: 32px;
    }
    // &-btn {
    //   margin-top: 32px;
    //   display: flex;
    //   justify-content: center;
    // }
    &-submit {
      margin-top: 24px;
      color: #fff;
      background-color: #5180FD;
      font-weight: 500;
      padding: 14px 16px;
      border-radius: 1rem;
      width: 100%;
      cursor: pointer;
      border: none;
    }
    &-cancel{
      background:#DEE2E9;
      margin-top: 12px;
      font-weight: 500;
      padding: 14px 16px;
      border-radius: 1rem;
      width: 100%;
      cursor: pointer;
      border: none;

    }
    &-submit:hover, &-cancel:hover {
      opacity: 0.8;
    }
  }
}

.error {
  color: red;
  font-size: 14px;
}
.invalid {
  border-color: red;
}
</style>
