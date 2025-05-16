const DinoWidget = () => {
  return (
    <div
      className={"size-full flex justify-center items-center"}
      style={{
        borderRadius: "30px",
        border: "3px solid rgba(0, 0, 0, 0.13)",
        background: "#E5E1D4",
        boxShadow:
          "0px -3px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 5px 4px 0px rgba(255, 255, 255, 0.50) inset",
      }}
    >
      <div
        className={
          "size-[135px] group rounded-[20px] flex justify-center items-center"
        }
        style={{
          backgroundImage:
            "linear-gradient(122deg, #000 33.24%, #575757 51.2%, #000 69.71%)",
          filter:
            "drop-shadow(0px 4px 4px rgba(255, 255, 255, 0.3)) drop-shadow(0px -4px 4px rgba(0, 0, 0, 0.3))",
        }}
      >
        <img
          src="/Images/dino1.png"
          alt="dino"
          className={"group-hover:hidden"}
        />
        <img
          src="/Images/dino2.png"
          alt="dino"
          className={"group-hover:inline hidden"}
        />
      </div>
    </div>
  );
};

export default DinoWidget;
