import ChangeUsernameInput from "~/Components/Template/Partials/ChangeUsername/ChangeUsernameInput";
import Button from "~/Components/Commans/UiParts/Button";
import React, { useState } from "react";
import GET from "~/Services/Axios/Methods/GET";
import { useNavigate } from "react-router";
import { ToastSetting } from "~/Services/Setting";
import toast from "react-hot-toast";
import HappyConfetti from "~/Components/Commans/UiParts/HappyConfetti";

const ChangeUsername: React.FC<{
  profile: any;
  setChangeUsernameOpen: any;
  onFinish: () => void;
}> = ({ profile, setChangeUsernameOpen, onFinish }) => {
  const [ready, setReady] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const response = await GET(`/template/username/change/${username}`);

    if (response.status === 200) {
      setLoading(false);

      toast.success("با موفقیت انجام شد.", ToastSetting);
      setChangeUsernameOpen(false);
      onFinish?.();

      navigate(`/${username.trim()}`);
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
          loading={loading}
        >
          تغییر نام کاربری
        </Button>
      </form>
    </>
  );
};

export default ChangeUsername;
