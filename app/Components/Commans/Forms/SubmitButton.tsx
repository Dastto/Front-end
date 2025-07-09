import React from "react";

interface SubmitButtonProps {
  onClick?: (data: any) => Promise<void>;
  loading?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, loading }) => {
  return (
    <>
      <button
        type="submit"
        onClick={onClick}
        className={`h-[60px] w-full custom-hover cursor-pointer bg-black text-white rounded-full text-xl mt-5 flex justify-center items-center`}
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
          "بزن بریم"
        )}
      </button>
    </>
  );
};

export default SubmitButton;
