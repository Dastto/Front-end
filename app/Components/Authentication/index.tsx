import { Clipboard, Mobile } from "iconsax-reactjs";
import CornerButton from "~/Components/Commans/UiParts/CornerButton";
import HandyAnimation from "~/Components/Commans/UiParts/HandyAnimation";
import Form from "~/Components/Commans/Forms/Form";
import Label from "~/Components/Commans/Forms/Label";
import Input from "~/Components/Commans/Forms/Input";
import SubmitButton from "~/Components/Commans/Forms/SubmitButton";
import { z } from "zod";
import { useState } from "react";

const Authentication = () => {
  const [errors, setErrors] = useState([]);
  const [typing, setTyping] = useState(false);

  const loginValidation = {
    mobile: z
      .string()
      .length(11, {
        message: "باید 11 رقم باشه!",
      })
      .regex(/^09\d{9}$/, {
        message: "شماره موبایلت معتبر نیست!",
      }),
  };

  const handleSubmit = () => {};

  return (
    <>
      <main
        className={
          "h-[calc(100dvh-96px)] w-full flex justify-center gap-32 pb-5"
        }
      >
        <div className="basis-1/2 flex justify-center gap-4 flex-col">
          <div>
            <HandyAnimation isChanging={typing} />
            <h1 className={"text-4xl block mt-3 font-semibold"}>
              اکانت میخوام
            </h1>
          </div>
          <div>
            <Form
              className={"w-full max-w-[500px]"}
              onSubmit={handleSubmit}
              validate={loginValidation}
              setError={setErrors}
            >
              <Label htmlFor={"mobile"} required={true} size={"lg"}>
                شماره موبایل
              </Label>
              <Input
                autoFocus={true}
                name={"mobile"}
                type={"number"}
                onFocus={() => {
                  setTyping(true);
                }}
                onblur={() => {
                  setTyping(false);
                }}
                errors={errors}
              >
                <Mobile className={"track-2 shrink-0"} variant={"TwoTone"} />
              </Input>
              <SubmitButton />
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
