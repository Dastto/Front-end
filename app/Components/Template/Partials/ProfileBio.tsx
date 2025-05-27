import { motion } from "framer-motion";
import React, { type ChangeEvent, useEffect, useState } from "react";
import useTemplate from "~/Hooks/useTemplate";
import { FADE_UP, ToastSetting } from "~/Services/Setting";
import useAuth from "~/Hooks/useAuth";
import debounce from "~/Services/PublicFunctions/debounce";
import POST from "~/Services/Axios/Methods/POST";
import toast from "react-hot-toast";

const ProfileBio = () => {
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

      if (value.trim().length < 3) {
        toast.error("نام باید حداقل 3 حرف باشه!", ToastSetting);
        return;
      }

      await POST("template/profile/changeBio", {
        bio: value,
      });
    },
    2000,
  );

  const handleChange = (e: any) => {
    debouncedHandleChange(e);
  };

  return (
    <>
      {!forMe && (
        <motion.p
          {...FADE_UP}
          className={
            "mt-4 text-lg leading-8 text-gray-500 w-full whitespace-pre"
          }
        >
          {profile?.bio}
        </motion.p>
      )}
      {forMe && (
        <motion.textarea
          onInput={handleChange}
          className={
            "mt-4 text-lg leading-8 resize-none text-gray-500 focus-visible:outline-0 block w-full"
          }
          rows={7}
        >
          {profile?.bio}
        </motion.textarea>
      )}
    </>
  );
};

export default ProfileBio;
