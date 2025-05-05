import React, { useEffect, useState } from "react";

const HandyAnimation: React.FC<{
  isChanging: boolean;
}> = ({ isChanging }) => {
  const [transform, setTransform] = useState(50);
  const [changing, setChanging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransform((prev) => (prev === 50 ? 100 : 50));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setChanging(isChanging);
  }, [isChanging]);

  return (
    <div className="relative size-17">
      <img src="/Images/lines.svg" alt="" />
      <img
        src="/Images/handy.svg"
        alt=""
        className="absolute top-1/2 left-0 transition-all ease-in-out duration-1000"
        style={
          changing
            ? { transform: `translateY(-${transform}%)` }
            : { transform: `translateY(-100%)` }
        }
      />
    </div>
  );
};

export default HandyAnimation;
