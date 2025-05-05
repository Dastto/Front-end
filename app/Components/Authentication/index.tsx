import { Clipboard } from "iconsax-reactjs";

const Authentication = () => {
  return (
    <>
      <main
        className={
          "h-[calc(100dvh-96px)] w-full flex justify-center gap-32 pb-5"
        }
      >
        <div className="basis-1/2"></div>
        <div className="basis-1/2">
          <div className={"relative h-full rounded-4xl overflow-hidden"}>
            <img
              src="/Images/office.webp"
              alt="dastto office"
              loading={"lazy"}
              className={"h-full object-cover"}
            />
            <div
              className={
                "bg-black/60 absolute bottom-5 flex-row-reverse gap-1.5 right-5 rounded-[55px] backdrop-blur-[5px] text-[18px] p-3 px-4 flex justify-center items-center text-white"
              }
            >
              ممنونم از Uiarshi
              <Clipboard className={"track-2"} variant={"TwoTone"} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Authentication;
