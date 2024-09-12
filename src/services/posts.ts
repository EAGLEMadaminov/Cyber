import { newAxiosInstance } from "../utils/libs/axios";
import { PostsResponse } from "../types/post";

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
