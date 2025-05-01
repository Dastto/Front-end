import React from "react";
import NavItem from "~/Components/Commans/Header/Nav/NavItem";
import { NAV_ITEMS } from "~/Services/Setting";

const Nav = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      {NAV_ITEMS.map((item) => (
        <NavItem key={item.to} to={item.to}>
          {item.icon}
          <h3 className="text-[20px]">{item.label}</h3>
        </NavItem>
      ))}
    </div>
  );
};

export default Nav;
