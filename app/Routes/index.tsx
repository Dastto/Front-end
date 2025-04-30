import toast from "react-hot-toast";
import { ToastSetting } from "~/Services/Setting";
import { AddCircle } from "iconsax-reactjs";

const index = () => {
  const handleToast = () => {
    toast.success("سلام من به تو", ToastSetting);
  };

  return (
    <>
      <button onClick={handleToast}>toast</button>
      <AddCircle size="32" color="#FF8A65" />
    </>
  );
};

export default index;
