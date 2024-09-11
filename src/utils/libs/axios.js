import axios from "axios";
const url = "http://localhost:4000";

const axiosIntancefrom = axios.create({
  baseURL: url,
  withCredentials: false,
});

const getToken = () => localStorage.getItem("access_token");

const newAxiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  withCredentials: false,
});

// Request Interceptor: Attach token to headers if available
newAxiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken(); // Get token from localStorage

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Handle token expiration or absence
newAxiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    const originalConfig = err.config;

    // Check for 401 errors or missing token
    if (originalConfig.url !== "/auth/sign-in" && err.response) {
      if (err.response.status === 401 || !getToken()) {
        // Clear any stored tokens
        localStorage.removeItem("access_token");

        // Redirect to the sign-in page
        window.location.href = "/auth/sign-in"; // Full page reload to /auth/sign-in
      }
    }

    return Promise.reject(err);
  }
);

export { axiosIntancefrom, newAxiosInstance };
