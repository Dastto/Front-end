import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import RouteChangeEvent from "~/Events/RouteChangeEvent";

const StarterHandling = () => {
  return (
    <>
      <RouteChangeEvent />
      <Outlet />
      <Toaster />
    </>
  );
};

export default StarterHandling;
