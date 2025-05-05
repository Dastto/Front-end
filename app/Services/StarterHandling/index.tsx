import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import useLenis from "~/Hooks/useLenis";

const StarterHandling = () => {
  useLenis();

  return (
    <>
      {/*<RouteChangeEvent />*/}
      <Outlet />
      <Toaster />
    </>
  );
};

export default StarterHandling;
