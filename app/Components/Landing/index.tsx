import Left from "~/Components/Landing/Sides/Left";
import Right from "~/Components/Landing/Sides/Right";
import { useEffect, useRef, useState } from "react";
import useLenis from "~/Hooks/useLenis";

const Landing = () => {
  const [overlay, setOverlay] = useState("backdrop-blur-sm");

  useEffect(() => {
    setTimeout(() => {
      setOverlay("backdrop-blur-none");
    }, 0);
    setTimeout(() => {
      setOverlay("hidden");
    }, 2000);
  }, []);

  return (
    <>
      <div
        className={`w-full h-screen fixed top-0 right-0 transition-all duration-2000 z-40 ${overlay}`}
      ></div>
      <main className="flex justify-between w-full pt-5 mb-5">
        <div className="basis-[calc(100%-540px)]">
          <Right />
        </div>
        <div className="basis-[540px] shrink-0">
          <Left />
        </div>
      </main>
    </>
  );
};

export default Landing;
