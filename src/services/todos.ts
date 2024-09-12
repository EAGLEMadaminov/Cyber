import { newAxiosInstance } from "../utils/libs/axios";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  // Add other properties specific to your product
}

// Define the interface for the API response
interface TodosResponse {
  total: number; // Total number of products
  todos: Todo[]; // Array of products
}

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
