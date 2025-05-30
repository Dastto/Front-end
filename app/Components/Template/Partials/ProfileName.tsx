import { motion } from "framer-motion";
import React, { type ChangeEvent, useEffect, useState } from "react";
import useTemplate from "~/Hooks/useTemplate";
import { FADE_UP, ToastSetting } from "~/Services/Setting";
import useAuth from "~/Hooks/useAuth";
import debounce from "~/Services/PublicFunctions/debounce";
import POST from "~/Services/Axios/Methods/POST";
import toast from "react-hot-toast";

const ProfileName = () => {
  const { profile, template } = useTemplate();
  const { user, pending } = useAuth();
  const [forMe, setForMe] = useState(false);

  useEffect(() => {
    if (!pending) {
      setForMe(user?.mobile === template?.user?.mobile);
    }
  }, [template, pending]);

  const debouncedHandleChange = debounce(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      await POST("template/profile/changeName", {
        name: value,
      });
    },
    300,
  );

  const handleChange = (e: any) => {
    if (e.target.value.trim().length < 3) {
      toast.error("نام باید حداقل 3 حرف باشه!", ToastSetting);
      return;
    }

    debouncedHandleChange(e);
  };

  return (
    <>
      {!forMe && (
        <motion.h1 {...FADE_UP} className={"font-bold text-4xl mt-6 w-full"}>
          {profile?.name}
        </motion.h1>
      )}
      {forMe && (
        <motion.input
          type={"text"}
          onInput={handleChange}
          className={
            "font-bold text-4xl mt-6 text-black focus-visible:outline-0 block w-full"
          }
          defaultValue={profile?.name}
        />
      )}
    </>
  );
};

export default ProfileName;
