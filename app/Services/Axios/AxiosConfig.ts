import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// instance.interceptors.response.use(null, (error) => {
//   return true;
// });

const Client = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};

export default Client;
