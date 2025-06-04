import Song from "~/Components/Music/Songs/Song";

const Songs = () => {
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
