import { Clipboard } from "iconsax-reactjs";
import CornerButton from "~/Components/Commans/UiParts/CornerButton";
import HandyAnimation from "~/Components/Commans/UiParts/HandyAnimation";
import { useState } from "react";

const Authentication = () => {
  const [change, setChange] = useState<boolean>(true);
  return (
    <>
      <main
        className={
          "h-[calc(100dvh-96px)] w-full flex justify-center gap-32 pb-5"
        }
      >
        <div className="basis-1/2 flex items-center">
          <div>
            <HandyAnimation isChanging={change} />
            <button onClick={() => setChange(!change)}>change</button>
            <h1 className={"text-4xl block mt-3 font-semibold"}>
              اکانت میخوام
            </h1>
          </div>
        </div>
        <div className="basis-1/2">
          <div className={"relative h-full rounded-4xl overflow-hidden"}>
            <img
              src="/Images/office.webp"
              alt="dastto office"
              loading={"lazy"}
              className={"h-full object-cover"}
            />
            <CornerButton>
              ممنونم از Uiarshi
              <Clipboard className={"track-2"} variant={"TwoTone"} />
            </CornerButton>
          </div>
        </div>
      </main>
    </>
  );
};

export default Authentication;
