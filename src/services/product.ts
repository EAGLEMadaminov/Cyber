import { newAxiosInstance } from "../utils/libs/axios";
import { Product, ProductsResponse, ProductFormInputs } from "../types/product";

const getProduct = (id: number): Promise<Product> => {
  return new Promise((resolve, reject) => {
    newAxiosInstance
      .get(`/products/${id}`)
      .then((response) => {
        if (response.status === 200) resolve(response.data);
        else reject(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getProducts = (): Promise<ProductsResponse> => {
  return new Promise((resolve, reject) => {
    newAxiosInstance
      .get(`/products`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
interface ApiResponse {
  success: boolean;
  message: string;
  data?: Product; // Adjust this based on your API's response
}
const addProduct = (payload: ProductFormInputs): Promise<ApiResponse> => {
  return new Promise((resolve, reject) => {
    newAxiosInstance
      .post(`/products/add`, payload, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          resolve(response.data);
        } else {
          reject(response.data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const editProduct = (
  id: number,
  payload: ProductFormInputs
): Promise<ApiResponse> => {
  return new Promise((resolve, reject) => {
    newAxiosInstance
      .put(`/products/${id}`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) resolve(response.data);
        else reject(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const deleteProduct = (id:number) => {
  return new Promise((resolve, reject) => {
    newAxiosInstance
      .delete(`/products/${id}`)
      .then((response) => {
        if (response.status === 200) resolve(response.data);
        else reject(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const getCategories = (): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    newAxiosInstance
      .get("/products/category-list")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export {
  getProducts,
  getProduct,
  editProduct,
  deleteProduct,
  addProduct,
  getCategories,
};
