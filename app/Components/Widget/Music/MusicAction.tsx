import useWidget from "~/Hooks/useWidget";

const MusicAction = () => {
  const { add } = useWidget();

  const handleSelectMusic = () => {};

  return (
    <>
      <button
        className={
          "cursor-pointer active:scale-95 transition-all duration-100 rounded-lg overflow-hidden"
        }
        onClick={() => handleSelectMusic}
      >
        <img
          src="/Images/actionBar/music.png"
          alt="music"
          className={"size-[30px]"}
        />
      </button>
    </>
  );
};

export default MusicAction;
