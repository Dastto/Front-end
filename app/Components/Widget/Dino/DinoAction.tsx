import React from "react";
import POST from "~/Services/Axios/Methods/POST";
import { useNavigate } from "react-router";

const DinoAction = () => {
  const navigate = useNavigate();

  const handleAdd = async () => {
    const response = await POST("/template/widget", {
      name: "dino",
    });

    if (response.status === 200) {
    }
  };

  return (
    <>
      <button
        className={
          "cursor-pointer active:scale-95 transition-all duration-100 rounded-lg overflow-hidden"
        }
        onClick={handleAdd}
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
