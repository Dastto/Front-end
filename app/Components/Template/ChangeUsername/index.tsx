import ChangeUsernameInput from "~/Components/Template/ChangeUsername/ChangeUsernameInput";
import Button from "~/Components/Commans/UiParts/Button";
import React, { useState } from "react";
import GET from "~/Services/Axios/Methods/GET";
import { useNavigate } from "react-router";
import { ToastSetting } from "~/Services/Setting";
import toast from "react-hot-toast";

const ChangeUsername: React.FC<{ profile: any }> = ({ profile }) => {
  const [ready, setReady] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    const response = await GET(`/template/username/change/${username}`);

    if (response.status === 200) {
      toast.success("با موفقیت انجام شد.", ToastSetting);

      navigate(`/${username}`);
    }
  };

  return (
    <>
      <h3 className={"text-base font-semibold"}>تغییر نام کاربری</h3>
      <span className={"text-neutral-400 text-sm mt-1"}>
        یک نام کاربری جدید اننخاب کن!
      </span>
      <form onSubmit={(e) => e.preventDefault()}>
        <ChangeUsernameInput
          profile={profile}
          setReady={setReady}
          setUsername={setUsername}
        />
        <Button
          variant={"blue"}
          size={"medium"}
          className={"w-full"}
          disabled={!ready}
          onClick={handleClick}
        >
          تغییر نام کاربری
        </Button>
      </form>
    </>
  );
};

export default ChangeUsername;
