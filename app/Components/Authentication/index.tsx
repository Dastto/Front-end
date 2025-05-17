import { Clipboard } from "iconsax-reactjs";
import CornerButton from "~/Components/Commans/UiParts/CornerButton";
import { useEffect, useState } from "react";
import Auth from "~/Components/Authentication/Auth";
import Verify from "~/Components/Authentication/Verify";
import { AnimatePresence, motion } from "framer-motion";
import GET from "~/Services/Axios/Methods/GET";

const Authentication = () => {
  const [data, setData] = useState({ mobile: "" });
  const [level, setLevel] = useState(0);

  return (
    <>
      <main
        className={
          "h-[calc(100dvh-96px)] w-full flex justify-center gap-32 pb-5"
        }
      >
        <div className="basis-1/2 flex justify-center gap-4 flex-col">
          <AnimatePresence mode="wait">
            {level === 0 ? (
              <motion.div
                key="auth"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Auth setData={setData} setLevel={setLevel} data={data} />
              </motion.div>
            ) : (
              <motion.div
                key="verify"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Verify setData={setData} setLevel={setLevel} data={data} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="basis-1/2">
          <motion.div
            key="sideImage"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
            className={"h-full"}
          >
            <div className={"relative h-full rounded-4xl overflow-hidden"}>
              <img
                src="/Images/office.webp"
                alt="dastto office"
                loading={"lazy"}
                className={"h-full object-cover"}
              />
              <CornerButton>
                ممنونم از Dino
                <Clipboard className={"track-2"} variant={"TwoTone"} />
              </CornerButton>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Authentication;
