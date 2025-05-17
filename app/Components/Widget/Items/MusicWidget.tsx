import { useState } from "react";

const MusicWidget = () => {
  const [animationClass, setAnimationClass] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={"size-full flex justify-center items-center relative"}
      style={{
        borderRadius: "30px",
        background: "linear-gradient(142deg, #484848 3.12%, #282828 95.59%)",
        boxShadow: "1px 4px 12.8px 0px rgba(255, 255, 255, 0.50) inset",
      }}
    >
      <img
        src={"/Images/gramafon_arrow.svg"}
        alt="gramafon arrow"
        className="scale-[1.6] absolute -right-[21px] top-1/2 -translate-y-[30%] z-50"
      />
      <img
        src="/Images/gramafon.png"
        alt="gramafon"
        className={animationClass}
      />
      <div
        className={
          "size-[26px] absolute cursor-pointer bottom-[10px] left-[10px] rounded-full flex justify-center items-center"
        }
        onClick={() => alert("ok")}
        style={{
          backgroundColor: "#4B4B4B",
          boxShadow: "3px 4px 14.6px rgba(0, 0, 0, 0.25)",
        }}
      >
        <img
          src="/Images/play.svg"
          alt="play"
          className={"scale-[1.2] hidden"}
        />
        <img src="/Images/pause.svg" alt="play" className={"scale-[1.2]"} />
      </div>
    </div>
  );
};

export default MusicWidget;
