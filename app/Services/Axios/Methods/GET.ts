// AxiosConfig.ts
import Client from "../AxiosConfig";

const GET = async <T = any>(
  url: string,
  params: object = {},
  responseType: "pagination" | "normal" = "normal",
) => {
  const response = await Client.get(url, { params, withCredentials: true });

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
