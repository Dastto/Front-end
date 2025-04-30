import toast, {Toaster} from "react-hot-toast";

const index = () => {
  const handleToast = () => {
    toast.success("سلام من به تو")
  }

  return <>
    <button onClick={handleToast}>toast</button>
  </>;
};

export default index;
