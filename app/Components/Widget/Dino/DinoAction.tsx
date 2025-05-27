import React from "react";

const DinoAction = () => {
  return (
    <>
      <button
        className={
          "cursor-pointer active:scale-95 transition-all duration-100 rounded-lg overflow-hidden"
        }
      >
        <img
          src="/Images/actionBar/dino.png"
          alt="dino"
          className={"size-[30px]"}
        />
      </button>
    </>
  );
};

export default DinoAction;
