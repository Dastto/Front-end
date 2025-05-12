import axios from "axios";
import POST from "~/Services/Axios/Methods/POST";

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
  (response: any) => response,
  async (error: { config: any; response: { status: number } }) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const res = await POST("/auth/refresh", {
          refresh_token: localStorage?.getItem("refresh_token"),
        });
        const newAccessToken = res.data.access_token;
        setAccessToken(newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return instance(originalRequest);
      } catch (refreshError) {
        window.location.href = "/auth";
        return Promise.reject(refreshError);
      }
    }
    return true;
  },
);

const Client = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};

export default Client;
