import { motion } from "motion/react";
import { FADE_UP } from "~/Services/Setting";
import Button from "~/Components/Commans/UiParts/Button";

const Music = () => {
  const IMG_SRC = [
    "haide.png",
    "vigen.png",
    "yas.png",
    "habib.png",
    "duaLipa.png",
    "myclejacson.png",
  ];

  return (
    <>
      <main className={"flex justify-center pt-8"}>
        <motion.div {...FADE_UP} className={"basis-1/2"}>
          <div className={"basis-1/2 flex items-start"}>
            <div className={"pt-12"}>
              <img src={"/Images/music-text.svg"} alt={"dastto music"} />
              <h2 className={"my-4 text-xl font-semibold"}>
                اینجا هیچ دسته بندی ای نداریم!
              </h2>
            </div>
          </div>
          <Button variant={"black"} size={"medium"}>
            بزن بریم گوش بدیم
          </Button>
        </motion.div>
        <motion.div {...FADE_UP} className={"basis-1/2 flex justify-end gap-8"}>
          <div className={"flex gap-8 flex-col"}>
            {IMG_SRC.slice(0, 2).map((img, index) => (
              <motion.div
                initial={{ y: 1 }}
                animate={{
                  y: [1, 1 - 10, 1 + 10, 1],
                  x: [1, 1 - 10, 1 + 10, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index === 0 ? 1.5 : 2,
                }}
                className="w-[165px] h-[165px] rounded-[30px]"
              >
                <img
                  src={`/Images/singers/${img}`}
                  alt={img.slice(0, -4)}
                  className={"size-full object-cover"}
                />
              </motion.div>
            ))}
          </div>
          <div className={"flex gap-8 flex-col pt-20"}>
            {IMG_SRC.slice(2, 4).map((img, index) => (
              <motion.div
                initial={{ y: 1 }}
                animate={{
                  y: [1, 1 - 10, 1 + 10, 1],
                  x: [1, 1 - 10, 1 + 10, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index === 0 ? 3 : 4,
                }}
                className="w-[165px] h-[165px] rounded-[30px]"
              >
                <img
                  src={`/Images/singers/${img}`}
                  alt={img.slice(0, -4)}
                  className={"size-full object-cover"}
                />
              </motion.div>
            ))}
          </div>
          <div className={"flex gap-8 flex-col"}>
            {IMG_SRC.slice(4, 6).map((img, index) => (
              <motion.div
                initial={{ y: 1 }}
                animate={{
                  y: [1, 1 - 10, 1 + 10, 1],
                  x: [1, 1 - 10, 1 + 10, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index === 0 ? 2.5 : 3,
                }}
                className="w-[165px] h-[165px] rounded-[30px]"
              >
                <img
                  src={`/Images/singers/${img}`}
                  alt={img.slice(0, -4)}
                  className={"size-full object-cover"}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <section className={"min-h-96 my-8"}></section>
    </>
  );
};

export default Music;
