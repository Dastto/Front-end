import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const HappyConfetti = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [active, setActive] = useState<boolean | undefined>(true);

  useEffect(() => {
    const timer = setTimeout(() => setActive(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(document.documentElement.scrollWidth);
      setHeight(document.documentElement.scrollHeight);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {active && (
        <div className={"w-screen h-screen overflow-hidden fixed"}>
          <Confetti
            width={width}
            height={height}
            gravity={0.2}
            friction={1}
            recycle={false}
          />
        </div>
      )}
    </>
  );
};

export default HappyConfetti;
