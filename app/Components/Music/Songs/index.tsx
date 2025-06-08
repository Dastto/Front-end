import Song from "~/Components/Music/Songs/Song";
import { useEffect, useRef, useState } from "react";
import GET from "~/Services/Axios/Methods/GET";
import useLenisScrollToEnd from "~/Hooks/useLenisScrollToEnd";
import Loading from "~/Components/Commans/UiParts/Loading";
import SongPlayer from "~/Components/Music/Songs/SongPlayer";
import Button from "~/Components/Commans/UiParts/Button";
import { Music } from "iconsax-reactjs";

const Songs = () => {
  const page = useRef(1);
  const [songs, setSongs] = useState<any[]>([]);
  const [paginate, setPaginate] = useState({ current_page: 1, last_page: 1 });
  const [isLoading, setIsLoading] = useState(false);
  const [player, setPlayer] = useState(true);
  const [currentSong, setCurrentSong] = useState<any>(null);

  const fetchSongs = async (isMore = false) => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const response = await GET(
        "/songs",
        { page: page.current },
        "pagination",
      );
      if (response.status === 200) {
        setPaginate({
          current_page: response.data.current_page,
          last_page: response.data.last_page,
        });
        !isMore
          ? setSongs(response.data.items)
          : setSongs((prev) => [...prev, ...response.data.items]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleMore = () => {
    page.current++;
    fetchSongs(true);
  };

  useEffect(() => {
    fetchSongs();
  }, [page.current]);

  return (
    <section className={`my-8 ${player && "mb-[160px]"}`}>
      <h2 className="section-title">
        <span className="text-sm text-dastto">Songs</span>
        آهنگ ها
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-10">
        {songs.map((song, index) => (
          <Song
            key={song?.slug || index}
            song={song}
            onPlay={() => {
              setPlayer(true);
              setCurrentSong(song);
            }}
          />
        ))}
      </div>
      <div className={"flex justify-center items-center my-4"}>
        {paginate?.current_page < paginate?.last_page && (
          <Button variant={"blue"} loading={isLoading} onClick={handleMore}>
            <Music />
            دیدن بیشتر...
          </Button>
        )}
      </div>
      <SongPlayer song={currentSong} />
    </section>
  );
};

export default Songs;
