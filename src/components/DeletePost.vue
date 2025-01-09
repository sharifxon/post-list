

<script setup lang="ts">
import {useModalStore} from "@/stores/modalStore"
import {usePostStore} from "@/stores/postStores"

const modalStore = useModalStore()
const postStore = usePostStore()
const deletePostId = modalStore.deletePostId

const closeModal = () => {
    modalStore.closeModal()
}

const deletePost = (id:number) => {
  postStore.deletePost(id)
  modalStore.closeModal()

}

</script>

<template>
    <h2>Do you want to delete this post?</h2>
    <div class="delete__btn">
        <button class="delete__btn-cancel" @click="closeModal">cancel</button>
        <button class="delete__btn-delete" @click="deletePost(deletePostId!)">delete</button>
    </div>
</template>

<style  lang="scss" scoped>
.delete__btn{
    display: flex;
    justify-content: space-between;

    button{
        width: 48%;
        padding: 12px 16px;
        border-radius: 12px;
        border: none;
        cursor: pointer;
    }
    button:hover{
        opacity: 0.8;
    }
    &-cancel{
        background-color: #DEE2E9;
        
    }
    &-delete{
        background-color: red;

    }
}

</style>