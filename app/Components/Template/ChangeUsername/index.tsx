import ChangeUsernameInput from "~/Components/Template/ChangeUsername/ChangeUsernameInput";
import Button from "~/Components/Commans/UiParts/Button";
import React, { useState } from "react";

const ChangeUsername: React.FC<{ profile: any }> = ({ profile }) => {
  const [ready, setReady] = useState(false);
  return (
    <>
      <h3 className={"text-base font-semibold"}>تغییر نام کاربری</h3>
      <span className={"text-neutral-400 text-sm mt-1"}>
        یک نام کاربری جدید اننخاب کن!
      </span>
      <ChangeUsernameInput profile={profile} setReady={setReady} />
      <Button
        variant={"blue"}
        size={"medium"}
        className={"w-full"}
        disabled={!ready}
      >
        تغییر نام کاربری
      </Button>
    </>
  );
};

export default ChangeUsername;
