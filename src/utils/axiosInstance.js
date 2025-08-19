import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // allow cookies
});

// 🔑 Attach token if available
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken"); // or sessionStorage if you prefer
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
