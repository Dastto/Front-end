import axios from "axios";
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from "~/Services/Axios/TokenService";
import toast from "react-hot-toast";

const BaseUrl = "http://127.0.0.1:8000/api/v1";

const instance = axios.create({
  baseURL: BaseUrl,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    const refreshToken = getRefreshToken();
    if (!refreshToken) {
      // window.location.href = "/auth";
      // return Promise.reject(error);
      return true;
    }

    originalRequest._retry = true;

    try {
      const res = await axios.post(`${BaseUrl}/auth/refresh`, {
        refresh_token: refreshToken,
      });

      if (res.status === 200 && res.data.success) {
        setAccessToken(res.data.data.access_token);
        setRefreshToken(res.data.data.refresh_token);
        originalRequest.headers.Authorization = `Bearer ${res.data.data.access_token}`;
        return instance(originalRequest);
      } else {
        // // window.location.href = "/auth";
        // return Promise.reject(new Error("Invalid refresh token"));
        return true;
      }
    } catch (refreshError) {
      // window.location.href = "/auth";
      // return Promise.reject(refreshError);
      return true;
    }
  },
);

const Client = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};

export default Client;
