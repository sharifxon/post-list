
<script setup>

</script>

<template>
    <div class="posts-header">
        <h1 class="posts-heading">Posts</h1>
        <button class="add-post-btn">+ New post</button>
    </div>
</template>

<style lang="scss" scoped>
.posts-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.posts-heading{
    color: #343940;
}
.add-post-btn{
    background-color: #5180FD;
    color: #fff;
    border-radius: 16px;
    padding: 12px 16px;
    height: 48px;
    cursor: pointer;
    border:none
}

</style>