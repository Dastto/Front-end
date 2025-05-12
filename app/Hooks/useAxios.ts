import axios from "axios";
import { useEffect } from "react";
import useToken from "./useToken";

const useAxios = () => {
  const { getAccessToken, setAccessToken } = useToken();

  const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1",
  });

  useEffect(() => {
    const requestInterceptor = instance.interceptors.request.use((config) => {
      const token = getAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    const responseInterceptor = instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            const res = await axios.post("/auth/refresh", {
              refresh_token: localStorage.getItem("refresh_token"),
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
        return Promise.reject(error);
      },
    );

    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [getAccessToken, setAccessToken]);

  return instance;
};

export default useAxios;
