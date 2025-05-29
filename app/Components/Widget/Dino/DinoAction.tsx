import useWidget from "~/Hooks/useWidget";

const DinoAction = () => {
  const { add } = useWidget();

  return (
    <>
      <button
        className={
          "cursor-pointer active:scale-95 transition-all duration-100 rounded-lg overflow-hidden"
        }
        onClick={() => add("dino")}
      >
        <img
          src="/Images/actionBar/dino.png"
          alt="dino"
          className={"size-[30px]"}
        />
      </button>
    </>
  );
};

export default DinoAction;
