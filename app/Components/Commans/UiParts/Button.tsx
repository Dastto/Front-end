import React from "react";

interface ButtonPropsTypes {
  variant?: "white" | "black" | "blue";
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonPropsTypes> = ({
  variant = "white",
  size = "medium",
  children,
  onClick,
  className,
  disabled,
  loading,
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
    medium: ["p-2.5", "px-3", "text-[15px]", "h-[46px]"],
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
          disabled:opacity-20
          ${className}
        `}
        disabled={disabled}
        onClick={onClick}
      >
        {loading ? (
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            className={"size-6"}
          >
            <g transform="rotate(0 50 50)">
              <rect
                x="44"
                y="0.5"
                rx="6"
                ry="6.29"
                width="12"
                height="37"
                fill="currentColor"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="0.625s"
                  begin="-0.5208333333333333s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
            </g>
            <g transform="rotate(60 50 50)">
              <rect
                x="44"
                y="0.5"
                rx="6"
                ry="6.29"
                width="12"
                height="37"
                fill="currentColor"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="0.625s"
                  begin="-0.41666666666666663s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
            </g>
            <g transform="rotate(120 50 50)">
              <rect
                x="44"
                y="0.5"
                rx="6"
                ry="6.29"
                width="12"
                height="37"
                fill="currentColor"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="0.625s"
                  begin="-0.31249999999999994s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
            </g>
            <g transform="rotate(180 50 50)">
              <rect
                x="44"
                y="0.5"
                rx="6"
                ry="6.29"
                width="12"
                height="37"
                fill="currentColor"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="0.625s"
                  begin="-0.20833333333333331s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
            </g>
            <g transform="rotate(240 50 50)">
              <rect
                x="44"
                y="0.5"
                rx="6"
                ry="6.29"
                width="12"
                height="37"
                fill="currentColor"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="0.625s"
                  begin="-0.10416666666666666s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
            </g>
            <g transform="rotate(300 50 50)">
              <rect
                x="44"
                y="0.5"
                rx="6"
                ry="6.29"
                width="12"
                height="37"
                fill="currentColor"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="0.625s"
                  begin="0s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
            </g>
          </svg>
        ) : (
          children
        )}
      </button>
    </>
  );
};

export default Button;
