import React from "react";

interface ContainerPropsTypes {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerPropsTypes> = ({ children, className }) => {
  return (
    <>
      <div className={`w-[calc(100%-200px)] mx-auto ${className}`}>
        {children}
      </div>
    </>
  );
};

export default Container;
