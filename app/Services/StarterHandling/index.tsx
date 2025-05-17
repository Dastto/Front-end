import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import useLenis from "~/Hooks/useLenis";
import { AuthProvider } from "~/Context/AuthContext";

const StarterHandling = () => {
  useLenis();

  return (
    <>
      <AuthProvider>
        {/*<RouteChangeEvent />*/}
        <Outlet />
        <Toaster />
      </AuthProvider>
    </>
  );
};

export default StarterHandling;
