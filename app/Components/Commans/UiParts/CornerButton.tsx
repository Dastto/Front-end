import React from "react";

const CornerButton: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <div
        className={
          "bg-black/60 absolute scale-90 bottom-5 flex-row-reverse gap-1.5 right-5 rounded-[55px] backdrop-blur-[5px] text-[18px] p-3 px-4 flex justify-center items-center text-white"
        }
      >
        {children}
      </div>
    </>
  );
};

export default CornerButton;
