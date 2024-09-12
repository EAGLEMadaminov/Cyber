import { newAxiosInstance } from "../utils/libs/axios";
import { UsersResponse } from "../types/user";

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
