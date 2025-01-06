
<script setup>
import editIcon from '../assets/Edit.png'
import deleteIcon from '../assets/Delete.png'

</script>

<template>
    <div class="post_card">
        <h2 class="post-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h2>
        <p class="post-body">
            Sed in sodales enim, quis bibendum odio. Mauris scelerisque tellus velit, a pharetra orci dapibus quis. Nulla tristique facilisis gravida. Aliquam mollis, neque vitae aliquet gravida, leo urna sagittis purus, a rhoncus libero nulla at mi. Donec quis interdum erat.
        </p>
        <div class="post_card-footer">
            <span class="edit-icon">
                <img :src="editIcon" alt="edit icon">
            </span>
            <span class="delete-icon">
                <img :src="deleteIcon" alt="delete icon">
            </span>

        </div>
        
    </div>
</template>

<style lang="scss" scoped>
.post_card{
    width: 45%;
    background-color: #fff;
    border-radius: 16px;
    padding: 24px;
    font-family: 'Mona Sans', sans-serif;

}
.post-body{
    color: #59626E;
}
.post_card-footer{
    display: flex;
    justify-content: flex-end;
    gap: 16px;

    span{
        cursor: pointer;
        transition: all 0.3s;
    }
    span:hover{
        opacity: 0.8;
        border-radius: 50%;
        border: solid 1px yellow;
    }
}

</style>