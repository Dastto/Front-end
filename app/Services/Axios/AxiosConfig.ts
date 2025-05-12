import axios from "axios";
import POST from "~/Services/Axios/Methods/POST";
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from "~/Services/Axios/TokenService";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
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
      window.location.href = "/auth";
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      const res = await POST("/auth/refresh", {
        refresh_token: refreshToken,
      });

      if (res.status === 200) {
        const newAccessToken = res.data.data.access_token;
        const newRefreshToken = res.data.data.refresh_token;

        setAccessToken(newAccessToken);
        setRefreshToken(newRefreshToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return instance(originalRequest);
      }
    } catch (refreshError) {
      window.location.href = "/auth";
      return Promise.reject(refreshError);
    }

    return Promise.reject(error);
  },
);

const Client = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};

export default Client;
