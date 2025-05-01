import { useEffect, useRef } from "react";
import LoadingBar, { type LoadingBarRef } from "react-top-loading-bar";
import { useLocation } from "react-router";

const RouteChangeEvent = () => {
  const ref = useRef<LoadingBarRef>(null);
  const location = useLocation();

  ref.current?.start("continuous", 50);

  useEffect(() => {
    setTimeout(() => {
      ref.current?.complete();
    }, 100);
  }, [location]);

  return (
    <div className={"dir-ltr"}>
      <LoadingBar ref={ref} color={"#3E7BFF"} />
    </div>
  );
};

export default RouteChangeEvent;
