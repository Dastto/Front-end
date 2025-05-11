import React, { useState } from "react";
import HandyAnimation from "~/Components/Commans/UiParts/HandyAnimation";
import Form from "~/Components/Commans/Forms/Form";
import Label from "~/Components/Commans/Forms/Label";
import Input from "~/Components/Commans/Forms/Input";
import { Mobile } from "iconsax-reactjs";
import SubmitButton from "~/Components/Commans/Forms/SubmitButton";
import { z } from "zod";
import POST from "~/Services/Axios/Methods/POST";
import OtpInput from "react-otp-input";

interface AuthPropsTypes {
  setData: (value: any) => void;
  setLevel: (value: number) => void;
}

const Auth: React.FC<AuthPropsTypes> = ({ setData, setLevel }) => {
  const [errors, setErrors] = useState([]);
  const [typing, setTyping] = useState(false);
  const [otp, setOtp] = useState("");

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
          <h1 className={"text-4xl block mt-3 font-semibold"}>
            دوست دارم ورود به اکانت!
          </h1>
        </div>
        <div className={"w-full max-w-[500px]"}>
          <div className={"dir-ltr flex justify-end"}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={5}
              inputType={"number"}
              inputStyle={{
                width: "50px",
                height: "40px",
                border: "2px solid lightgray",
                marginInline: "8px",
                borderRadius: "10px",
              }}
              shouldAutoFocus={true}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <SubmitButton />
        </div>
      </div>
    </>
  );
};

export default Auth;
