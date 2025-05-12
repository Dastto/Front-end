import ExceptionHandlerService from "~/Services/Axios/ExceptionHandlerService";
import Client from "../AxiosConfig";

const POST = async (url: any, params: object, config?: object) => {
  try {
    return await Client.post(url, params, config);
  } catch (error) {
    return ExceptionHandlerService(error, false);
  }
};

export default POST;
