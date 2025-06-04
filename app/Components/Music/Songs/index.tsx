import Song from "~/Components/Music/Songs/Song";
import { useEffect, useRef, useState } from "react";
import GET from "~/Services/Axios/Methods/GET";
import useLenis from "~/Hooks/useLenis";
import useLenisScrollToEnd from "~/Hooks/useLenisScrollToEnd";
import AOS from "aos";

const Songs = () => {
  const [page, setPage] = useState(1);
  const [songs, setSongs] = useState<any>([]);
  const [paginate, setPaginate] = useState({
    current_page: 1,
    last_page: 1,
  });
  const [isLoading, setIsLoading] = useState(false);
  const wrapperRef = useRef(null);

  const fetchSongs = async () => {
    const response = await GET("/songs", { page }, "pagination");

    if (response.status === 200) {
      setPaginate({
        current_page: response.data.current_page,
        last_page: response.data.last_page,
      });

      setSongs((prev: any) => [...prev, ...response.data?.items]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, [page]);

  useLenisScrollToEnd(wrapperRef, () => {
    if (!isLoading && paginate?.current_page < paginate?.last_page) {
      setIsLoading(true);
      setPage((prev) => prev + 1);
    }
  });

  return (
    <section className={"my-8"}>
      <h2 className={"section-title"}>
        <span className={"text-sm text-dastto"}>Songs</span>
        آهنگ ها
      </h2>
      <div className="grid grid-cols-5 gap-5 mt-10" ref={wrapperRef}>
        {songs.map((song: any, index: any) => (
          <Song key={index} song={song} />
        ))}
      </div>
    </section>
  );
};

export default Songs;
