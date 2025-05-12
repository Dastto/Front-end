import React from "react";

interface SubmitButtonProps {
  onClick?: (data: any) => Promise<void>;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
  return (
    <>
      <button
        type="submit"
        onClick={async (e) => {
          await onClick?.(e);
        }}
        className={`h-[60px] w-full custom-hover cursor-pointer bg-black text-white rounded-full text-xl mt-5 flex justify-center items-center`}
      >
        بزن بریم
      </button>
    </>
  );
};

export default SubmitButton;
