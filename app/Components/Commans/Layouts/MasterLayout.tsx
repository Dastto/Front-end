import { Outlet } from "react-router";
import Index from "~/Components/Commans/Header";

const MasterLayout = () => {
  return (
    <>
      <Index />
      <Outlet />
    </>
  );
};

export default MasterLayout;
