import Song from "~/Components/Music/Songs/Song";
import { useEffect, useRef, useState } from "react";
import GET from "~/Services/Axios/Methods/GET";
import useLenisScrollToEnd from "~/Hooks/useLenisScrollToEnd";
import Loading from "~/Components/Commans/UiParts/Loading";
import SongPlayer from "~/Components/Music/Songs/SongPlayer";

const Songs = () => {
  const [page, setPage] = useState(1);
  const [songs, setSongs] = useState<any[]>([]);
  const [paginate, setPaginate] = useState({ current_page: 1, last_page: 1 });
  const [isLoading, setIsLoading] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const fetchSongs = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const response = await GET("/songs", { page }, "pagination");
      if (response.status === 200) {
        setPaginate({
          current_page: response.data.current_page,
          last_page: response.data.last_page,
        });
        setSongs(response.data.items);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, [page]);

  useLenisScrollToEnd(wrapperRef, () => {
    if (!isLoading && paginate.current_page < paginate.last_page) {
      setPage((prev) => prev + 1);
    }
  });

  return (
    <section className="my-8">
      <h2 className="section-title">
        <span className="text-sm text-dastto">Songs</span>
        آهنگ ها
      </h2>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-10"
        ref={wrapperRef}
      >
        {songs.map((song, index) => (
          <Song
            key={song.id || index}
            song={song}
            onPlay={() => console.log("played")}
          />
        ))}
        {isLoading && <Loading />}
      </div>
      <SongPlayer />
    </section>
  );
};

export default Songs;
