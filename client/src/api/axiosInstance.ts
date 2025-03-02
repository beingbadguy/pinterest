import axios from "axios";

interface ImportMetaEnv {
  VITE_API_URL: string;
}

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});
