import axios from "axios";
import type{ Post } from "@/types/Post";

const apiURL = import.meta.env.VITE_API_BASE_URL


//  GET 
const getPosts = async (userId:number): Promise<Post[]> => {
  const { data } = await axios.get<Post[]>(`${apiURL}?userId=${userId}`);
  return data;
};

// POST
const createPost = async (post: Omit<Post, "id">): Promise<Post> => {
  const { data } = await axios.post<Post>(apiURL, post);
  return data;
};

// PUT
const updatePost = async (id: number, updatedPost: { title: string; body: string }) => {
    const { data } = await axios.put<Post>(`${apiURL}/${id}`, updatedPost);
    return data;
  };

// DELETE
const deletePost = async (id: number): Promise<void> => {
  await axios.delete(`${apiURL}/${id}`);
};

export default {
    getPosts,
    createPost,
    updatePost,
    deletePost,
  };