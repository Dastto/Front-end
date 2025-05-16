// AxiosConfig.ts
import Client from "../AxiosConfig";

interface ApiResponse<T = any> {
  data: T;
  status: number;
}

const GET = async <T = any>(
  url: string,
  params: object = {},
  responseType: "pagination" | "normal" = "normal",
): Promise<ApiResponse<T>> => {
  const response = await Client.get<T>(url, { params });

  if (responseType === "pagination") {
    return response;
  }

  return response;
};

export default GET;
