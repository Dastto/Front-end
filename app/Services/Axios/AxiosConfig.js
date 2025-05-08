import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.dastto.ir/api/v1",
});

instance.interceptors.response.use(null, (error) => {
  return true;
});

export const client = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};
