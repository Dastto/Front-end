const Left = () => {
  return (
    <>
      <div className={""}>
        <div className={"flex justify-between w-full"}>
          <img
            src="/Images/widgets/big-dribbble.png"
            className={"h-[330px]"}
            alt=""
          />
          <div>
            <img
              src="/Images/widgets/small-dribbble.svg"
              className={"h-[165px]"}
              alt=""
            />
            <img
              src="/Images/widgets/music.png"
              className={"h-[165px] translate-y-5"}
              alt=""
              loading={"lazy"}
            />
          </div>
        </div>
        <div className={"flex justify-between w-full flex-row-reverse mt-14"}>
          <img
            src="/Images/widgets/big-telegram.png"
            className={"h-[330px]"}
            alt=""
            loading={"lazy"}
          />
          <div>
            <img
              src="/Images/widgets/image.png"
              className={"h-[165px] -translate-y-8"}
              alt=""
              loading={"lazy"}
            />
            <img
              src="/Images/widgets/small-telegram.svg"
              className={"h-[165px]"}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Left;
