import React from "react";
import NavItem from "~/Components/Commans/Header/Nav/NavItem";
import { Home } from "iconsax-reactjs";

const Nav = () => {
  return (
    <div className={"flex justify-center items-center gap-4"}>
      <NavItem to={"/"}>
        <Home size="24" variant="TwoTone" />
        <h3>خانه</h3>
      </NavItem>
    </div>
  );
};

export default Nav;
