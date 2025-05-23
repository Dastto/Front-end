import axios from "axios";
import { getAccessToken, setAccessToken } from "~/Services/Axios/TokenService";

export const BaseUrl = "http://127.0.0.1:8000/api/v1";

const instance = axios.create({
  baseURL: BaseUrl,
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

    originalRequest._retry = true;

    try {
      const res = await axios.post(
        `${BaseUrl}/auth/refresh`,
        {},
        { withCredentials: true },
      );

      if (res.status === 200 && res.data.success) {
        setAccessToken(res.data.data.access_token);
        originalRequest.headers.Authorization = `Bearer ${res.data.data.access_token}`;
        return instance(originalRequest);
      } else {
        return true;
      }
    } catch (refreshError) {
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
