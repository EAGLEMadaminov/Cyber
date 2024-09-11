import { newAxiosInstance } from "../utils/libs/axios";

const getAllTodos = () => {
  return new Promise((resolve, reject) => {
    newAxiosInstance
      .get(`/todos`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { getAllTodos };
