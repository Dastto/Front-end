import toast from "react-hot-toast";
import { ToastSetting } from "~/Services/Setting";

const ExceptionHandlerService = (error: any, showToast: boolean) => {
  if (showToast) {
    toast.error(error.response?.data?.message, ToastSetting);
  }
  return error;
};

export default ExceptionHandlerService;
