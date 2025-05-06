import { Clipboard, Home, Mobile } from "iconsax-reactjs";
import CornerButton from "~/Components/Commans/UiParts/CornerButton";
import HandyAnimation from "~/Components/Commans/UiParts/HandyAnimation";
import Form from "~/Components/Commans/Forms/Form";
import Label from "~/Components/Commans/Forms/Label";
import Input from "~/Components/Commans/Forms/Input";

const Authentication = () => {
  return (
    <>
      <main
        className={
          "h-[calc(100dvh-96px)] w-full flex justify-center gap-32 pb-5"
        }
      >
        <div className="basis-1/2 flex justify-center gap-4 flex-col">
          <div>
            <HandyAnimation isChanging={true} />
            <h1 className={"text-4xl block mt-3 font-semibold"}>
              اکانت میخوام
            </h1>
          </div>
          <div>
            <Form>
              <Label htmlFor={"mobile"} required={true} size={"lg"}>
                شماره موبایل
              </Label>
              <Input>
                <Mobile className={"track-2 shrink-0"} variant={"TwoTone"} />
              </Input>
            </Form>
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
