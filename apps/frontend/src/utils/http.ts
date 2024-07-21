import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const http = {
  post<T>(url: string, data: T) {
    return axios.post<T>(url, data);
  },
};
