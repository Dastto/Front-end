import Song from "~/Components/Music/Songs/Song";
import { useEffect, useState } from "react";
import GET from "~/Services/Axios/Methods/GET";

const Songs = () => {
  const [page, setPage] = useState(1);
  const [songs, setSongs] = useState([]);

  const fetchSongs = async () => {
    const response = await GET(
      "/songs",
      {
        page: page,
      },
      "pagination",
    );

    if (response.status === 200) {
      setSongs(response.data?.items);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, [page]);

  return (
    <>
      <section className={"my-8"}>
        <h2 className={"section-title"}>
          <span className={"text-sm text-dastto"}>Songs</span>
          آهنگ ها
        </h2>
        <div className="grid grid-cols-5 gap-5 mt-10">
          {songs.map((song: any, index) => (
            <Song key={index} song={song} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Songs;
