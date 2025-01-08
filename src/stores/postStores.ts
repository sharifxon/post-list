import { defineStore } from 'pinia';
import { ref, shallowRef } from 'vue';
import type{ Post } from '@/types/Post';
import postService from '@/services/postService';

export const usePostStore = defineStore('postStore', () => {
  // Reactive states
  const posts = shallowRef<Post[]>([]);  
  const error = ref<string | null>(null); 
  const loading = ref(false);

  // Function to get all posts
  const fetchPosts = async (userId:number) => {
    loading.value = true;
    error.value = null;
    try {
      const data = await postService.getPosts(userId); 
      posts.value = data; 
    } catch (err: any) {
      error.value = err.message; 
    } finally {
      loading.value = false; 
    }
  };

  // Function of adding a new post
  const addPost = async (post: { title: string; body: string; userId: number }) => {
    loading.value = true;
    error.value = null;
    try {
      const data = await postService.createPost(post); 
      posts.value.push(data); 
    } catch (err: any) {
      error.value = err.message; 
    } finally {
      loading.value = false; 
    }
  };

  // Post editing functionality
  const updatePost = async (id: number, updatedPost: { title: string; body: string }) => {
    loading.value = true;
    error.value = null;
    try {
      const data = await postService.updatePost(id, updatedPost); 
      const index = posts.value.findIndex((post: any) => post.id === id); 
      if (index !== -1) {
        posts.value[index] = data; 
      }
    } catch (err: any) {
      error.value = err.message; 
    } finally {
      loading.value = false; 
    }
  };

  // Post delete function
  const deletePost = async (id: number) => {
    loading.value = true;
    error.value = null;
    try {
      await postService.deletePost(id); 
      posts.value = posts.value.filter((post: any) => post.id !== id); 
    } catch (err: any) {
      error.value = err.message;
    } finally {
      loading.value = false; 
    }
  };

  return {
    posts,
    error,
    loading,
    fetchPosts,
    addPost,
    updatePost,
    deletePost,
  };
});

// export default usePostStore