import { newAxiosInstance } from "../utils/libs/axios";

const getAllPosts = () => {
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
