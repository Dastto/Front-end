import Song from "~/Components/Music/Songs/Song";
import { useEffect } from "react";
import GET from "~/Services/Axios/Methods/GET";

const Songs = () => {
  const fetchSongs = async () => {
    const response = await GET("/songs", {}, "pagination");

    console.log(response.data);
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <>
      <section className={"my-8"}>
        <h2 className={"section-title"}>
          <span className={"text-sm text-dastto"}>Songs</span>
          آهنگ ها
        </h2>
        <div className="grid grid-cols-5 gap-5 mt-10"></div>
      </section>
    </>
  );
};

export default Songs;
