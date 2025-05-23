import ExceptionHandlerService from "~/Services/Axios/ExceptionHandlerService";
import Client from "../AxiosConfig";

const PUT = async (url: string, params: object) => {
  try {
    return await Client.put(url, params, { withCredentials: true });
  } catch (error) {
    return ExceptionHandlerService(error, false);
  }
};

export default PUT;
