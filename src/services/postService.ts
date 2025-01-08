import axios from "axios";
import type{ Post } from "@/types/Post";

const API_URL = import.meta.env.VITE_API_BASE_URL

//  GET 
const getPosts = async (userId:number): Promise<Post[]> => {
  const { data } = await axios.get<Post[]>(`${API_URL}?userId=${userId}`);
  return data;
};

// POST
const createPost = async (post: Omit<Post, "id">): Promise<Post> => {
  const { data } = await axios.post<Post>(API_URL, post);
  return data;
};

// PUT
const updatePost = async (id: number, updatedPost: { title: string; body: string }) => {
    const { data } = await axios.put<Post>(`${API_URL}/${id}`, updatedPost);
    return data;
  };

// DELETE
const deletePost = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

export default {
    getPosts,
    createPost,
    updatePost,
    deletePost,
  };