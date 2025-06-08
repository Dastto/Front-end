import React, { useEffect, useRef, useState } from "react";
import { API_BASE_URL, FILE_BASE_URL } from "~/Services/Setting";
import { Pause, Play, Repeat, VolumeHigh } from "iconsax-reactjs";
import { Range } from "react-range";
import { Tooltip } from "react-tooltip";

type Song = {
  slug: string;
  name: string;
  song: string;
  thumbnail: string;
  singer: { name: string };
};

const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
};

const SongPlayer: React.FC<{ song: Song }> = ({ song }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isLooping, setIsLooping] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const update = () => setCurrentTime(audio.currentTime);
    const setDur = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", update);
    audio.addEventListener("loadedmetadata", setDur);

    return () => {
      audio.removeEventListener("timeupdate", update);
      audio.removeEventListener("loadedmetadata", setDur);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    setIsPlaying(true);
    audioRef?.current?.play();
  }, [song]);

  return (
    <>
      <audio
        ref={audioRef}
        src={API_BASE_URL + `/songs/stream/${song?.slug}`}
        preload="metadata"
        loop={isLooping}
      />
      <div className="fixed bottom-4 right-1/2 translate-x-1/2 z-30 w-[90%] max-w-2xl">
        <div className="bg-white border border-gray-300 rounded-[30px] px-5 py-4 flex items-center justify-between">
          {/* Info */}
          <div className="flex items-center gap-4">
            <img
              src={FILE_BASE_URL + song?.thumbnail}
              alt={song?.name}
              className="w-[90px] h-[90px] rounded-[15px] object-cover"
            />
            <div className="flex flex-col gap-1">
              <div className="text-[22px] font-bold text-dastto">
                {song?.name}
              </div>
              <div className="text-[18px]">{song?.singer?.name}</div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center w-full max-w-[400px] gap-2">
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="size-[45px] flex items-center justify-center bg-purple-100 cursor-pointer rounded-full text-dastto hover:bg-purple-200"
              >
                {isPlaying ? <Pause size={22} /> : <Play size={22} />}
              </button>
              <button
                onClick={() => setIsLooping(!isLooping)}
                className={`size-[45px] flex items-center cursor-pointer justify-center rounded-full ${isLooping ? "bg-dastto text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                data-tooltip-id="upload"
                data-tooltip-content="تکرار"
                data-tooltip-delay-show={500}
              >
                <Repeat size={20} />
              </button>
              <Tooltip id="upload" style={{ fontSize: "12px" }} />

              <VolumeHigh />
              <Range
                step={0.01}
                min={0}
                rtl={true}
                max={1}
                values={[volume]}
                onChange={([val]) => setVolume(val)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "7px",
                      width: "80px",
                      background: `linear-gradient(to left, #3E7BFF 0%, #3E7BFF ${volume * 100}%, #ddd ${volume * 100}%)`,
                      borderRadius: "50px",
                      boxShadow: "5px 0px 20px -3px #3E7BFF",
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "14px",
                      width: "14px",
                      borderRadius: "50%",
                      backgroundColor: "#3E7BFF",
                    }}
                  />
                )}
              />
            </div>
            <div className="flex items-center w-full gap-3 text-sm text-gray-500">
              <span>{formatTime(currentTime)}</span>
              <Range
                step={0.1}
                min={0}
                max={duration > 0 ? duration : 1}
                values={[currentTime]}
                onChange={([val]) => {
                  if (audioRef.current) {
                    audioRef.current.currentTime = val;
                    setCurrentTime(val);
                  }
                }}
                rtl={true}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "10px",
                      width: "100%",
                      background: `linear-gradient(to left, #3E7BFF 0%, #3E7BFF ${(currentTime / (duration || 1)) * 100}%, #e5e7eb ${(currentTime / (duration || 1)) * 100}%)`,
                      borderRadius: "50px",
                      boxShadow: "5px 0px 20px -4px #3E7BFF",
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "17px",
                      width: "17px",
                      borderRadius: "50%",
                      backgroundColor: "#3E7BFF",
                    }}
                  />
                )}
              />
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SongPlayer;
