import React, { useEffect, useRef, useState } from "react";
import { Pause, Play, Repeat, Volume2 } from "lucide-react";
import { API_BASE_URL, FILE_BASE_URL } from "~/Services/Setting";

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

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const t = parseFloat(e.target.value);
      audioRef.current.currentTime = t;
      setCurrentTime(t);
    }
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
        <div className="bg-white border border-gray-300 rounded-[30px] px-5 py-4 flex items-center justify-between shadow-md">
          {/* Info */}
          <div className="flex items-center gap-4">
            <img
              src={FILE_BASE_URL + song?.thumbnail}
              alt={song?.name}
              className="w-[80px] h-[80px] rounded-[15px] object-cover"
            />
            <div>
              <div className="text-lg font-bold text-dastto">{song?.name}</div>
              <div className="text-sm text-gray-600">{song?.singer?.name}</div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center w-full max-w-[400px] gap-2">
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="p-3 bg-purple-100 rounded-full text-purple-700 hover:bg-purple-200"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
              <Volume2 />
              <button
                onClick={() => setIsLooping(!isLooping)}
                className={`p-3 rounded-full ${isLooping ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                title="تکرار آهنگ"
              >
                <Repeat size={20} />
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-[80px] accent-purple-500"
              />
            </div>

            <div className="flex items-center w-full gap-2 text-sm text-gray-500">
              <span>{formatTime(currentTime)}</span>
              <input
                type="range"
                min={0}
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="w-full accent-purple-500"
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
