import React from "react";

interface ButtonPropsTypes {
  variant?: "white" | "black" | "blue";
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
}

const Button: React.FC<ButtonPropsTypes> = ({
  variant = "white",
  size = "medium",
  children,
}) => {
  return (
    <>
      <button
        className={`
        ${variant === "white" && "bg-white border-[#F3F3F8] text-black"}
        ${variant === "black" && "bg-black border-black text-white"}
        ${variant === "blue" && "bg-dastto border-dastto text-white"}
       border-2 gap-1.5 flex items-center justify-center rounded-full
        `}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
