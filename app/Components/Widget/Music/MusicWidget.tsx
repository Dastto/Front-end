import { useEffect, useRef, useState } from "react";

const MusicWidget = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = useRef<HTMLAudioElement | null>(null);
  const contextMenu = useRef<HTMLDivElement | null>(null);
  const [contextStyle, setContextStyle] = useState({
    top: "0px",
    left: "0px",
    zIndex: "1000",
  });

  useEffect(() => {
    if (isPlaying) {
      if (audio.current?.currentTime === 0) {
        const gramophone = new Audio("/Songs/gramophone.mp3");
        gramophone.play();
        gramophone.onended = () => {
          audio?.current?.play();
        };
      } else {
        audio?.current?.play();
      }
    } else {
      audio?.current?.pause();
    }
  }, [isPlaying]);

  return (
    <>
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
          className={`${isPlaying && "animate-spin"} rounded-full overflow-hidden`}
        />
        <div
          className={
            "size-[26px] absolute cursor-pointer bottom-[10px] left-[10px] rounded-full flex justify-center items-center"
          }
          onClick={() => setIsPlaying(!isPlaying)}
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
          {!isPlaying ? (
            <img src="/Images/play.svg" alt="play" className={"scale-[1.4]"} />
          ) : (
            <img
              src="/Images/pause.svg"
              alt="pause"
              className={"scale-[1.4]"}
            />
          )}
          <audio
            src={"/Songs/vigenShane.mp3"}
            controls
            className={"hidden"}
            ref={audio}
            onEnded={(e) => setIsPlaying(false)}
          />
        </div>
      </div>
    </>
  );
};

export default MusicWidget;
