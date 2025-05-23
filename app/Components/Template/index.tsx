import Profile from "~/Components/Template/Profile";
import Widgets from "~/Components/Template/Widgets";
import React from "react";

const Template: React.FC<{ template: any }> = ({ template }) => {
  return (
    <>
      <main className="h-screen flex flex-col items-center xl:block">
        <Profile />
        <Widgets />
      </main>
    </>
  );
};

export default Template;
