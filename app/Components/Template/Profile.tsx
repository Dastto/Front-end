import React, { useEffect, useState } from "react";
import { Setting4 } from "iconsax-reactjs";
import { AnimatePresence, motion } from "framer-motion";
import POST from "~/Services/Axios/Methods/POST";
import useAuth from "~/Hooks/useAuth";
import ChangeUsername from "~/Components/Template/ChangeUsername";
import HappyConfetti from "~/Components/Commans/UiParts/HappyConfetti";

const Profile: React.FC<{ template: any }> = ({ template }) => {
  const [profile, setProfile] = useState({
    name: "",
    bio: "",
    username: "",
    avatar: "",
    views: "",
  });
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [changeUsernameOpen, setChangeUsernameOpen] = useState(false);
  const [forMe, setForMe] = useState(false);
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };
  const { login, user, pending } = useAuth();
  const [happyShow, setHappyShow] = useState(false);

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
            <motion.img
              {...fadeUp}
              src="/Images/me.jpg"
              alt="tikrack"
              className={
                "size-48 rounded-full overflow-hidden object-cover outline-2 outline-gray-200/20 -outline-offset-2"
              }
            />
            <motion.h1 {...fadeUp} className={"font-bold text-4xl mt-6"}>
              {profile?.name}
            </motion.h1>
            <motion.p
              {...fadeUp}
              className={"mt-4 text-lg leading-8 text-gray-500"}
            >
              {profile?.bio}
            </motion.p>
          </div>
          {/*Information*/}
          {forMe && (
            <motion.div {...fadeUp}>
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
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </>
  );
};

export default Profile;
