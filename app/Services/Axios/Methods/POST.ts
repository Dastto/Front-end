import ExceptionHandlerService from "~/Services/Axios/ExceptionHandlerService";
import Client from "../AxiosConfig";
import AxiosConfig from "../AxiosConfig";

const POST = async (url: any, params: object, config?: object) => {
  try {
    const response = await Client.post(url, params, config);

    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    return ExceptionHandlerService(response, true);
  } catch (error) {
    return ExceptionHandlerService(error, false);
  }
};

export default POST;
