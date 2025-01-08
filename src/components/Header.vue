
<script lang="ts" setup>

</script>

<template>
    
    <div class="posts">
        <h1 class="posts__heading">Posts</h1>
        <router-link class="posts__btn" to="/post-form">+ New post</router-link>
    </div>
</template>

<style lang="scss" scoped>
.posts{
    display: flex;
    justify-content: space-between;
    align-items: center;

&__heading{
    color: #343940;
}
&__btn{
    background-color: #5180FD;
    color: #fff;
    border-radius: 16px;
    padding: 12px 16px;
    height: 48px;
    cursor: pointer;
    border:none;
    text-decoration: none;
}
}
</style>
