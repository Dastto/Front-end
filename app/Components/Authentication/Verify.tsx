import React, { useState } from "react";
import { ArrowRight } from "iconsax-reactjs";
import SubmitButton from "~/Components/Commans/Forms/SubmitButton";
import OtpInput from "react-otp-input";

interface AuthPropsTypes {
  setData: (value: any) => void;
  setLevel: (value: number) => void;
  data: object;
}

const Auth: React.FC<AuthPropsTypes> = ({ setData, setLevel, data }) => {
  const [error, setError] = useState([]);
  const [otp, setOtp] = useState("");

  const handleSubmit = async () => {};

  return (
    <>
      <div>
        <button onClick={() => setLevel(0)} className={"cursor-pointer mb-4"}>
          <ArrowRight className={"track-2"} size={45} />
        </button>
        <h1 className={"text-4xl block mt-3 font-semibold"}>
          دوست دارم ورود به اکانت!
        </h1>
      </div>
      <div className={"w-full max-w-[500px]"}>
        <div className={"dir-ltr flex justify-end"}>
          <OtpInput
            value={otp}
            containerStyle={{
              marginBlock: "10px",
              width: "100%",
              justifyContent: "space-between",
              paddingInline: "35px",
            }}
            onChange={setOtp}
            numInputs={5}
            renderSeparator={() => (
              <div className={"w-1.5 h-1.5 rounded-full bg-gray-100"}></div>
            )}
            inputType={"number"}
            inputStyle={{
              width: "54px",
              height: "58px",
              border: "3px solid",
              marginInline: "8px",
              borderRadius: "20px",
              fontSize: "18px",
              fontWeight: "600",
            }}
            shouldAutoFocus={true}
            renderInput={(props) => (
              <input
                {...props}
                className={
                  "focus-visible:outline-none !border-gray-200 valid:!border-green-500 transition-all duration-200"
                }
                required
              />
            )}
          />
        </div>
        <SubmitButton onClick={handleSubmit} />
      </div>
    </>
  );
};

export default Auth;
