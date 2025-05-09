import ExceptionHandlerService from "~/Services/Axios/ExceptionHandlerService";
import Client from "../AxiosConfig";

const GET: (
  url: string,
  params: object,
  responseType: "pagination" | "normal",
) => void = async (url, params = {}, responseType = "normal") => {
  try {
    const response = await Client.get(url, {
      params,
    });

    if (responseType === "pagination") {
      return response;
    } else {
      return response;
    }
  } catch (error) {
    return ExceptionHandlerService(error, false);
  }
};

export default GET;
