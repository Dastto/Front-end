import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.dastto.ir/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(null, (error) => {
  return true;
});

const Client = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};

export default Client;
