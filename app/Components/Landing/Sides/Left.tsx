import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const Left = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className={"mb-5"}>
        <div className={"flex justify-between w-full"}>
          <img
            data-aos="fade-down-left"
            data-aos-duration="1000"
            src="/Images/widgets/big-dribbble.png"
            className={"h-[330px]"}
            alt=""
          />
          <div>
            <img
              data-aos="fade-down-right"
              data-aos-duration="1000"
              src="/Images/widgets/small-dribbble.svg"
              className={"h-[165px]"}
              alt=""
            />
            <img
              data-aos="fade-up-left"
              data-aos-duration="1000"
              src="/Images/widgets/music.png"
              className={"h-[165px] translate-y-8"}
              alt=""
              loading={"lazy"}
            />
          </div>
        </div>
        <div className={"flex justify-between w-full flex-row-reverse mt-14"}>
          <img
            src="/Images/widgets/big-telegram.png"
            className={"h-[330px]"}
            data-aos-duration="1000"
            alt=""
            data-aos="fade-up-right"
            loading={"lazy"}
          />
          <div>
            <img
              data-aos="fade-down-left"
              data-aos-duration="1000"
              src="/Images/widgets/image.png"
              className={"h-[165px] -translate-y-8"}
              alt=""
              loading={"lazy"}
            />
            <img
              data-aos="fade-up-left"
              src="/Images/widgets/small-telegram.svg"
              className={"h-[165px]"}
              data-aos-duration="1000"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Left;
