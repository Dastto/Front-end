import Client from "../AxiosConfig";
import axios from "axios";
import { API_BASE_URL } from "~/Services/Setting";

const GET = async <T = any>(
  url: string,
  params: object = {},
  responseType: "pagination" | "normal" = "normal",
  instance: boolean = true,
) => {
  let response;

  if (instance) {
    response = await Client.get(url, { params, withCredentials: true });
  } else {
    response = await axios.get(API_BASE_URL + url, {
      params,
      withCredentials: true,
    });
  }

  if (responseType === "pagination") {
    return {
      ...response,
      data: {
        items: response.data.data.data,
        current_page: response.data.data.current_page,
        last_page: response.data.data.last_page,
        next_page_url: response.data.data.next_page_url,
        prev_page_url: response.data.data.prev_page_url,
      },
    };
  }

  return response;
};

export default GET;
