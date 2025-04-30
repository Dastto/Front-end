import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

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
    <Link
      to={to}
      className={`cursor-pointer flex items-center justify-center gap-[10px] font-medium text-[#C5C5CF] ${active && "!text-black"}`}
    >
      {children}
    </Link>
  );
};

export default NavItem;
