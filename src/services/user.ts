import { newAxiosInstance } from "../utils/libs/axios";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
}

// Define the interface for the API response
interface UsersResponse {
  total: number; // Total number of products
  users: User[]; // Array of products
}
const getAllUser = (): Promise<UsersResponse> => {
  return new Promise((resolve, reject) => {
    newAxiosInstance
      .get("/users")
      .then((res) => {
        if (res.status === 200) resolve(res.data);
        else reject(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { getAllUser };
