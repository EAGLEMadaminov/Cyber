import { newAxiosInstance } from "../utils/libs/axios";

interface Post {
  id: number;
  title: string;
  body: string;
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

interface PostsResponse {
  total: number; // Total number of products
  posts: Post[]; // Array of products
}
const getAllPosts = (): Promise<PostsResponse> => {
  return new Promise((resolve, reject) => {
    newAxiosInstance
      .get(`/posts`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { getAllPosts };
