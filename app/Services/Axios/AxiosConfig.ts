import axios from "axios";
import { getAccessToken, setAccessToken } from "~/Services/Axios/TokenService";
import { API_BASE_URL } from "~/Services/Setting";

export const BaseUrl = API_BASE_URL;

const instance = axios.create({
  baseURL: BaseUrl,
});

let refreshingTokenPromise: Promise<string> | null = null;

async function refreshAccessToken(): Promise<string> {
  if (!refreshingTokenPromise) {
    refreshingTokenPromise = axios
      .post(`${BaseUrl}/auth/refresh`, {}, { withCredentials: true })
      .then((res) => {
        if (res.status === 200 && res.data.success) {
          const newToken = res.data.data.access_token;
          setAccessToken(newToken);
          return newToken;
        } else {
          throw new Error("Refresh failed");
        }
      })
      .finally(() => {
        refreshingTokenPromise = null;
      });
  }

  return refreshingTokenPromise;
}

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
      const newToken = await refreshAccessToken();

      originalRequest.headers.Authorization = `Bearer ${newToken}`;
      return instance(originalRequest);
    } catch (refreshError) {
      return Promise.reject(refreshError);
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
