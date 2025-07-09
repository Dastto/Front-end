import React, { useState } from "react";
import { ArrowRight } from "iconsax-reactjs";
import SubmitButton from "~/Components/Commans/Forms/SubmitButton";
import OtpInput from "react-otp-input";
import POST from "~/Services/Axios/Methods/POST";
import toast from "react-hot-toast";
import { ToastSetting } from "~/Services/Setting";
import { useNavigate } from "react-router";
import { setAccessToken } from "~/Services/Axios/TokenService";

interface VerifyPropsTypes {
  setData: (value: any) => void;
  setLevel: (value: number) => void;
  data: { mobile: string };
}

const Verify: React.FC<VerifyPropsTypes> = ({ setData, setLevel, data }) => {
  const [error, setError] = useState<string>("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (otp.length < 5 || otp.length > 5) {
      setError("اگه میشه کامل وارد کن!");
      return;
    }

    setLoading(true);

    const response = await POST("/auth/verify", {
      mobile: data.mobile,
      otp: otp,
    });

    if (response?.status === 200 && response.data.success === true) {
      setAccessToken(response.data.data.access_token);
      navigate("/");
    } else {
      toast.error(response.response?.data?.message, ToastSetting);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <button
          type={"button"}
          onClick={() => setLevel(0)}
          className={"cursor-pointer mb-4"}
        >
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
              marginTop: "20px",
              width: "100%",
              justifyContent: "space-between",
              paddingInline: "35px",
            }}
            onChange={(otp) => {
              setError("");
              setOtp(otp);
            }}
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
                className={`focus-visible:outline-none !border-gray-200 valid:!border-green-500 transition-all duration-200 ${error !== "" && "!border-red-500"}`}
                required
              />
            )}
          />
        </div>
        <span
          className={`mt-2 block font-semibold text-red-500 opacity-100 transition-all duration-300 -z-50 relative h-6 ${error === "" && "-translate-y-10 !h-0"}`}
        >
          {error}
        </span>
        <SubmitButton loading={loading} onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default Verify;
