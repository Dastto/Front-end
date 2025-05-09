import { Clipboard, Mobile } from "iconsax-reactjs";
import CornerButton from "~/Components/Commans/UiParts/CornerButton";
import HandyAnimation from "~/Components/Commans/UiParts/HandyAnimation";
import Form from "~/Components/Commans/Forms/Form";
import Label from "~/Components/Commans/Forms/Label";
import Input from "~/Components/Commans/Forms/Input";
import SubmitButton from "~/Components/Commans/Forms/SubmitButton";
import { z } from "zod";
import { useState } from "react";
import POST from "~/Services/Axios/Methods/POST";
import Auth from "~/Components/Authentication/Auth";
import Verify from "~/Components/Authentication/Verify";

const Authentication = () => {
  const [data, setData] = useState({});
  const [level, setLevel] = useState(0);

  return (
    <>
      <main
        className={
          "h-[calc(100dvh-96px)] w-full flex justify-center gap-32 pb-5"
        }
      >
        <Auth setData={setData} setLevel={setLevel} />
        <Verify setData={setData} setLevel={setLevel} />
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
