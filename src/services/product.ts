import { newAxiosInstance } from "../utils/libs/axios";

const getProduct = (id) => {
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

const getProducts = () => {
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

const addProduct = (payload) => {
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

const editProduct = (id, payload) => {
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

const deleteProduct = (id) => {
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
const getCategories = () => {
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
