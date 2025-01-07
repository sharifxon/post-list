import axios from "axios";
import { Post } from "@/types/Post";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async (): Promise<Post[]> => {
  const { data } = await axios.get<Post[]>(API_URL);
  return data;
};

export const addPost = async (post: Omit<Post, "id">): Promise<Post> => {
  const { data } = await axios.post<Post>(API_URL, post);
  return data;
};

export const updatePost = async (post: Post): Promise<Post> => {
  const { data } = await axios.put<Post>(`${API_URL}/${post.id}`, post);
  return data;
};

export const deletePost = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};