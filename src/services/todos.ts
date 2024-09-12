import { newAxiosInstance } from "../utils/libs/axios";
import { TodosResponse } from "../types/todos";

const getAllTodos = (): Promise<TodosResponse> => {
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
