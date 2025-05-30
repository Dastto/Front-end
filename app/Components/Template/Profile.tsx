import React, { useEffect, useState } from "react";
import { Link21, Login, Setting4 } from "iconsax-reactjs";
import { AnimatePresence, motion } from "framer-motion";
import POST from "~/Services/Axios/Methods/POST";
import useAuth from "~/Hooks/useAuth";
import ChangeUsername from "app/Components/Template/Partials/ChangeUsername";
import HappyConfetti from "~/Components/Commans/UiParts/HappyConfetti";
import ProfileImage from "~/Components/Template/Partials/ProfileImage";
import useTemplate from "~/Hooks/useTemplate";
import ProfileName from "~/Components/Template/Partials/ProfileName";
import { FADE_UP } from "~/Services/Setting";
import ProfileBio from "~/Components/Template/Partials/ProfileBio";
import Divider from "~/Components/Commans/UiParts/Divider";
import Button from "~/Components/Commans/UiParts/Button";
import { Link } from "react-router";

const Profile = () => {
  const [profile, setProfile] = useState<any>();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [changeUsernameOpen, setChangeUsernameOpen] = useState(false);
  const [forMe, setForMe] = useState(false);
  const { user, pending, login } = useAuth();
  const [happyShow, setHappyShow] = useState(false);
  const { template } = useTemplate();

  useEffect(() => {
    setProfile(template?.profile);
  }, [template]);

  useEffect(() => {
    if (!pending) {
      setForMe(user?.mobile === template?.user?.mobile);
    }
  }, [template, pending]);

  const handleFinishChange = () => {
    setHappyShow(true);

    setTimeout(() => setHappyShow(false), 10000);
  };

  const handleLogout = async () => {
    const response = await POST("/auth/logout", {});
    if (response.status === 200) {
      location.href = `/${profile.username}`;
    }
  };

  return (
    <>
      {happyShow && <HappyConfetti />}

      <AnimatePresence>
        <div
          className={
            "w-[35%] p-[70px] pl-0 xl:fixed xl:top-0 xl:h-screen xl:right-0 z-50 flex flex-col justify-between"
          }
        >
          {/*Profile*/}
          <div>
            <ProfileImage />
            <ProfileName />
            <ProfileBio />
          </div>
          {/*Information*/}
          {login() && forMe && (
            <motion.div className={"flex items-center gap-3"} {...FADE_UP}>
              <div className={"w-fit relative"}>
                <button
                  className={`size-8 flex items-center justify-center hover:bg-gray-100 cursor-pointer active:scale-95 transition-all duration-200 rounded-full ${subMenuOpen && "!bg-gray-100"}`}
                  onClick={() => setSubMenuOpen((prev) => !prev)}
                >
                  <Setting4
                    className={`track-3 text-gray-400 ${subMenuOpen && "!text-black transition-all duration-200"}`}
                    size={18}
                  />
                </button>

                {subMenuOpen && (
                  <>
                    <div
                      className={"w-screen z-[9] right-0 top-0 h-screen fixed "}
                      onClick={() => {
                        setSubMenuOpen(false);
                        setChangeUsernameOpen(false);
                      }}
                    ></div>
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0,
                        transformOrigin: "bottom right",
                      }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className={
                        "w-[210px] bg-white shadow-modal absolute bottom-12 rounded-[20px] z-[10] right-0 p-2"
                      }
                    >
                      <div>
                        <button
                          onClick={() => setChangeUsernameOpen((prev) => !prev)}
                          className={
                            "w-full rounded-xl transition-all duration-200 hover:bg-[rgb(248,248,248)] cursor-pointer text-[14px] flex flex-col items-start p-3"
                          }
                        >
                          تغییر نام کاربری
                          <span className={"text-neutral-400 text-sm mt-1"}>
                            {profile?.username}/
                          </span>
                        </button>
                      </div>
                      {changeUsernameOpen && (
                        <>
                          <motion.div
                            initial={{
                              opacity: 0,
                              rotate: "-20deg",
                              x: 30,
                              transformOrigin: "bottom right",
                            }}
                            animate={{ opacity: 1, rotate: 0, x: 0 }}
                            exit={{ opacity: 0, rotate: "-20deg", x: 20 }}
                            className={
                              "w-[300px] bg-white shadow-modal absolute top-[40px] -translate-y-1/2 rounded-[20px] z-[12] -left-[290px] p-5"
                            }
                          >
                            <ChangeUsername
                              profile={profile}
                              setChangeUsernameOpen={setChangeUsernameOpen}
                              onFinish={handleFinishChange}
                            />
                          </motion.div>
                        </>
                      )}
                      <div className="px-2 py-3">
                        <hr
                          className={
                            "h-[1px] w-full rounded-sm border-0 bg-[#EFEFEF]"
                          }
                        />
                      </div>
                      <div>
                        <button
                          onClick={handleLogout}
                          className={
                            "w-full rounded-xl transition-all duration-200 hover:bg-[rgb(248,248,248)] cursor-pointer text-[14px] flex items-center p-3 justify-start"
                          }
                        >
                          خروج از حساب
                        </button>
                      </div>
                    </motion.div>
                  </>
                )}
              </div>
              <Divider className={"!h-6"} />
              <span className={"text-sm text-gray-400"}>
                {profile?.views} بازدید
              </span>
            </motion.div>
          )}
          {login() && !forMe && (
            <motion.div className={"flex items-center gap-3"} {...FADE_UP}>
              <Link to={`/${user?.username}`}>
                <Button variant={"white"} size={"small"}>
                  <Link21 className={"track-2"} size={17} />
                  دستوی من
                </Button>
              </Link>
              <Divider className={"!h-6"} />
              <span className={"text-sm text-gray-400"}>
                {profile?.views} بازدید
              </span>
            </motion.div>
          )}
          {!login() && (
            <motion.div className={"flex items-center gap-3"} {...FADE_UP}>
              <Link to={`/auth`}>
                <Button variant={"white"} size={"small"}>
                  <Login className={"track-2"} size={17} />
                  برای خودت بساز!
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </>
  );
};

export default Profile;
