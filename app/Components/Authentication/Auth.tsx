import React, { useState } from "react";
import HandyAnimation from "~/Components/Commans/UiParts/HandyAnimation";
import Form from "~/Components/Commans/Forms/Form";
import Label from "~/Components/Commans/Forms/Label";
import Input from "~/Components/Commans/Forms/Input";
import { Mobile } from "iconsax-reactjs";
import SubmitButton from "~/Components/Commans/Forms/SubmitButton";
import { z } from "zod";
import POST from "~/Services/Axios/Methods/POST";

interface AuthPropsTypes {
  setData: (value: any) => void;
  setLevel: (value: number) => void;
}

const Auth: React.FC<AuthPropsTypes> = ({ setData, setLevel }) => {
  const [errors, setErrors] = useState([]);
  const [typing, setTyping] = useState(false);

  const loginValidation = {
    mobile: z
      .string()
      .length(11, {
        message: "فک نکنم این شماره باشه!",
      })
      .regex(/^09\d{9}$/, {
        message: "فک نکنم معتبر باشه!",
      }),
  };

  const handleSubmit = async (data: any) => {
    const response = await POST("/auth", data);

    if (response?.status === 200) {
      setData(data);
      setLevel(1);
    }
  };

  return (
    <>
      <div className="basis-1/2 flex justify-center gap-4 flex-col">
        <div>
          <HandyAnimation isChanging={typing} />
          <h1 className={"text-4xl block mt-3 font-semibold"}>اکانت میخوام</h1>
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
    </>
  );
};

export default Auth;
