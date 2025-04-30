import React from "react";
import NavItem from "~/Components/Commans/Header/Nav/NavItem";
import { Home, Profile2User } from "iconsax-reactjs";

const Nav = () => {
  return (
    <div className={"flex justify-center items-center gap-4"}>
      <NavItem to={"/"}>
        <Home size="24" variant="TwoTone" />
        <h3 className={"text-[22px]"}>خانه</h3>
      </NavItem>
      <NavItem to={"/team"}>
        <Profile2User size="24" variant="TwoTone" />
        <h3 className={"text-[22px]"}>تیممون</h3>
      </NavItem>
    </div>
  );
};

export default Nav;
