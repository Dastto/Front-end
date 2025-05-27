import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import useTemplate from "~/Hooks/useTemplate";
import { ArrowCircleUp2 } from "iconsax-reactjs";
import useAuth from "~/Hooks/useAuth";
import POST from "~/Services/Axios/Methods/POST";
import { Circle } from "rc-progress";
import { FILE_BASE_URL, ToastSetting } from "~/Services/Setting";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { Tooltip } from "react-tooltip";

const ProfileImage = () => {
  const { profile, template } = useTemplate();
  const { user, pending } = useAuth();
  const [forMe, setForMe] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!pending) {
      setForMe(user?.mobile === template?.user?.mobile);
    }
  }, [template, pending]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (uploading) {
      e.preventDefault();
      return;
    }

    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const res = await POST("/template/profile/uploadAvatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent: ProgressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / (progressEvent.total || 1),
          );
          setProgress(percentCompleted);
        },
      });

      if (res.status === 200) {
        navigate(0);
      }
    } catch (error) {
      toast.error("مشکلی در اپلود عکس پیش امده!", ToastSetting);
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      {profile?.avatar !== null && !forMe && (
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src={FILE_BASE_URL + profile?.avatar}
          alt="tikrack"
          className={
            "size-48 rounded-full overflow-hidden object-cover outline-2 outline-gray-200/20 -outline-offset-2"
          }
        />
      )}
      {profile?.avatar !== null && forMe && (
        <>
          <input
            type="file"
            id={"profileImage"}
            className={"hidden"}
            onChange={handleUpload}
            accept="image/*"
            onClick={(e) => {
              if (uploading) {
                e.preventDefault();
              }
            }}
          />

          <motion.label
            htmlFor={"profileImage"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            data-tooltip-id="upload"
            data-tooltip-content="اپلود تصویر جدید"
            data-tooltip-delay-show={1000}
            className={
              "size-48 block rounded-full relative cursor-pointer hover:scale-95 flex-col active:scale-90 transition-all duration-300 overflow-hidden object-cover outline-2 outline-gray-200/20 -outline-offset-2"
            }
          >
            <img
              src={FILE_BASE_URL + profile?.avatar}
              className={"size-full object-cover"}
              alt={profile.name}
            />
            {uploading && (
              <div
                className={
                  "absolute translate-x-1/2 size-full flex items-center justify-center flex-col gap-3 bg-black/40 top-1/2 right-1/2 -translate-y-1/2 text-white"
                }
              >
                <Circle
                  percent={progress}
                  strokeWidth={6}
                  trailWidth={6}
                  className={"size-10"}
                  strokeColor="#fff"
                  trailColor="#a1a1a1"
                />
                <span className={"text-lg font-bold"}>{progress}%</span>
              </div>
            )}
          </motion.label>
          <Tooltip id="upload" style={{ fontSize: "12px" }} />
        </>
      )}

      {profile?.avatar === null && forMe && (
        <>
          <input
            type="file"
            id={"profileImage"}
            className={"hidden"}
            onChange={handleUpload}
            accept="image/*"
            onClick={(e) => {
              if (uploading) {
                e.preventDefault();
              }
            }}
          />
          <label
            htmlFor={"profileImage"}
            className={
              "size-48 rounded-full border-2 relative border-dashed flex justify-center items-center border-black/[0.08] bg-[#FAFAFA] transition-colors duration-200 ease-in-out overflow-hidden hover:bg-[#F6F6F6] cursor-pointer flex-col active:bg-[#F1F1F1] gap-2 select-none"
            }
          >
            {preview !== null && (
              <div className={"size-full absolute"}>
                <img
                  src={preview}
                  alt=""
                  className={"size-full object-cover"}
                />
                <div
                  className={
                    "absolute translate-x-1/2 size-full flex items-center justify-center flex-col gap-3 bg-black/40 top-1/2 right-1/2 -translate-y-1/2 text-white"
                  }
                >
                  <Circle
                    percent={progress}
                    strokeWidth={6}
                    trailWidth={6}
                    className={"size-10"}
                    strokeColor="#fff"
                    trailColor="#a1a1a1"
                  />
                  <span className={"text-lg font-bold"}>{progress}%</span>
                </div>
              </div>
            )}
            <ArrowCircleUp2 size="40" className={"track-2 text-[#E1E1E1]"} />
            <span className={"text-[#646464] font-semibold"}>
              اپلود پروفایل
            </span>
          </label>
        </>
      )}
    </>
  );
};

export default ProfileImage;
