import ExceptionHandlerService from "~/Services/Axios/ExceptionHandlerService";
import Client from "../AxiosConfig";

const DELETE = async (url: string, params: object) => {
  try {
    return await Client.delete(url, { withCredentials: true });
  } catch (error) {
    return ExceptionHandlerService(error, false);
  }
};

export default DELETE;
