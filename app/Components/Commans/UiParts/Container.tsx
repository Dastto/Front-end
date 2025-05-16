import React from "react";

interface ContainerPropsTypes {
  children: React.ReactNode;
}

const Container: React.FC<ContainerPropsTypes> = ({ children }) => {
  return (
    <>
      <div className={"w-[calc(100%-180px)] mx-auto"}>{children}</div>
    </>
  );
};

export default Container;
