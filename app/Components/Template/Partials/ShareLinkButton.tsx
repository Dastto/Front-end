import React from "react";

interface ShareLinkButtonPropsTypes {
  onClick?: () => void;
}

const ShareLinkButton: React.FC<ShareLinkButtonPropsTypes> = ({ onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={
          "bg-[#55DA62]/90 active:scale-[0.95] active:bg-[#55DA62]/90 py-1.5 transition-all duration-100 px-2 rounded-lg cursor-pointer hover:bg-[#55DA62] text-white"
        }
      >
        اشتراک لینک
      </button>
    </>
  );
};

export default ShareLinkButton;
