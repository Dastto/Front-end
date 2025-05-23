import toast from "react-hot-toast";

const ExceptionHandlerService = (error: any, showToast: boolean = true) => {
  if (error.response?.status === 401) {
    return Promise.reject(error);
  }
  console.log(error);

  if (showToast) {
    console.error("API Error:", error.message);
  }

  return Promise.reject(error);
};

export default ExceptionHandlerService;
