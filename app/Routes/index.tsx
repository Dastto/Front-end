import toast, {Toaster} from "react-hot-toast";
import {ToastSetting} from "~/Services/Setting";

const index = () => {
  const handleToast = () => {
    toast.success("سلام من به تو", ToastSetting)
  }

  return <>
    <button onClick={handleToast}>toast</button>
  </>;
};

export default index;
