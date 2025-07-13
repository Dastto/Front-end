import React from "react";

const MusicAction: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <>
      <button
        className={
          "cursor-pointer active:scale-95 transition-all duration-100 rounded-lg overflow-hidden"
        }
        onClick={handleClick}
      >
        <img
          src="/Images/actionBar/music.png"
          alt="music"
          className={"size-[30px]"}
        />
      </button>
    </>
  );
};

export default MusicAction;
