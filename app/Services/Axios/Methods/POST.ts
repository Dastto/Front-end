import ExceptionHandlerService from "~/Services/Axios/ExceptionHandlerService";
import Client from "../AxiosConfig";

const POST = async (url: any, params: object, config?: object) => {
  try {
    const res = await Client.post(url, params, config);

    if (res.status === 200) {
      return res;
    } else {
      return ExceptionHandlerService(res, true);
    }
  } catch (error) {
    return ExceptionHandlerService(error, false);
  }
};

export default POST;
