import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";

const Left = () => {
  const [imageBlur, setImageBlur] = useState("");

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
            data-aos-delay="1500"
            src="/Images/widgets/big-dribbble.png"
            className={`h-[330px] ${imageBlur}`}
            alt=""
            loading={"lazy"}
          />
          <div>
            <img
              data-aos="fade-down-right"
              data-aos-duration="1000"
              data-aos-delay="1500"
              data-aos-anchor-placement="top-bottom"
              src="/Images/widgets/small-dribbble.svg"
              className={`h-[165px] ${imageBlur}`}
              alt=""
              loading={"lazy"}
            />
            <img
              data-aos="fade-up-left"
              data-aos-duration="1000"
              data-aos-delay="1500"
              data-aos-anchor-placement="top-bottom"
              src="/Images/widgets/music.png"
              className={`h-[165px] translate-y-8 ${imageBlur}`}
              alt=""
              loading={"lazy"}
            />
          </div>
        </div>
        <div className={"flex justify-between w-full flex-row-reverse mt-14"}>
          <img
            src="/Images/widgets/big-telegram.png"
            className={`h-[330px] ${imageBlur}`}
            data-aos-duration="1000"
            data-aos-delay="1500"
            alt=""
            data-aos="fade-up-right"
            loading={"lazy"}
          />
          <div>
            <img
              data-aos="fade-down-left"
              data-aos-duration="1000"
              data-aos-delay="1500"
              data-aos-anchor-placement="top-bottom"
              src="/Images/widgets/image.png"
              className={`h-[165px] -translate-y-8 ${imageBlur}`}
              alt=""
              loading={"lazy"}
            />
            <img
              data-aos="fade-up-left"
              src="/Images/widgets/small-telegram.svg"
              className={`h-[165px] ${imageBlur}`}
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="1500"
              alt=""
              loading={"lazy"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Left;
