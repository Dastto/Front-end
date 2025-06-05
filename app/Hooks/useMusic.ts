import { useContext } from "react";
import { MusicContext } from "~/Context/MusicContext";

const useMusic = () => {
  const context = useContext(MusicContext);

  if (!context) {
    throw new Error("useMusic must be used within an MusicProvider");
  }

  return context;
};

export default useMusic;
