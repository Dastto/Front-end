// AxiosConfig.ts
import Client from "../AxiosConfig";

const GET = async <T = any>(
  url: string,
  params: object = {},
  responseType: "pagination" | "normal" = "normal",
) => {
  const response = await Client.get(url, { withCredentials: true });

  if (responseType === "pagination") {
    return response;
  }

  return response;
};

export default GET;
