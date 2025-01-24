import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modalStore", () => {
  const isModalOpen = ref(false);
  const postId =  ref<number | null>(null)
  const deletePostId = ref<number | null>(null)

  const openModal = (id:number) => {
    postId.value =  id
    isModalOpen.value = true;

  };

  const closeModal = () => {
    postId.value = null
    deletePostId.value = null
    isModalOpen.value = false;
  };

  const deletePost = (id:number) => {
    deletePostId.value = id
  }

  return {
    isModalOpen,
    postId,
    deletePostId,
    openModal,
    closeModal,
    deletePost
  };
});
