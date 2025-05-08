import React from "react";

interface ButtonPropsTypes {
  variant?: "white" | "black" | "blue";
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonPropsTypes> = ({
  variant = "white",
  size = "medium",
  children,
  onClick,
  className,
}) => {
  const variants = {
    white: ["bg-white", "border-[#F3F3F8]", "text-black"],
    black: [
      "bg-black",
      "border-black",
      "text-white",
      "hover:shadow-buttons",
      "hover:scale-[1.08]",
      "active:scale-[0.95]",
    ],
    blue: ["bg-dastto", "border-dastto", "text-white"],
  };
  const sizes = {
    small: ["p-2.5", "text-[12px]"],
    medium: ["p-2.5", "px-3", "text-[15px]"],
    large: ["p-2.5", "px-5", "text-[18px]"],
  };

  return (
    <>
      <button
        className={`
          ${variants[variant]?.join(" ")}
          ${sizes[size]?.join(" ")}
          border-2 gap-1.5 flex items-center justify-center
          rounded-full transition-all
          duration-300 cursor-pointer active:opacity-80
          ${className}
        `}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
