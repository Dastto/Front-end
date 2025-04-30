import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

interface NavItemPropsTypes {
  to: string;
  children: React.ReactNode;
}

const NavItem = ({ children, to }: React.FC<NavItemPropsTypes>) => {
  const location = useLocation();
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    setActive(location.pathname === to);
  }, [location]);

  return (
    <div
      className={`cursor-pointer flex items-center justify-center gap-[10px] font-medium ${active && "text-black"}`}
    >
      {children}
    </div>
  );
};

export default NavItem;
