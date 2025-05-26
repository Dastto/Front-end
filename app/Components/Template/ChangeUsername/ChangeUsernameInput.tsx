import React, { type ChangeEvent, useEffect, useState } from "react";
import GET from "~/Services/Axios/Methods/GET";
import { CloseCircle, TickCircle } from "iconsax-reactjs";

const ChangeUsernameInput: React.FC<{
  profile: any;
  setReady: any;
  setUsername: any;
}> = ({ profile, setUsername, setReady }) => {
  const [available, setAvailable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);

  function debounce(cb: any, delay: any) {
    let timeoutId: NodeJS.Timeout;
    return function (...args: any) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  }

  const debouncedHandleChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setLoading(true);
    GET(`/template/username/isAvailable/${value}`)
      .then((res) => {
        if (res.status === 200) {
          setAvailable(true);
          setReady(true);
          setUsername(value);
        }
      })
      .catch(() => {
        setAvailable(false);
        setReady(false);
      })
      .finally(() => setLoading(false));
  }, 300);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.value.trim() === "" ||
      e.target.value.trim().split(" ").length > 1 ||
      profile?.username === e.target.value.trim()
    ) {
      setEmpty(true);
      setReady(false);
      return;
    } else {
      setEmpty(false);
    }
    debouncedHandleChange(e);
  };

  useEffect(() => {
    setEmpty(true);
    setReady(false);
  }, []);

  return (
    <div
      className={`origin-center dir-ltr h-12 my-3 w-full rounded-[20px] px-4 bg-white border-2 flex items-center transition-all duration-300 gap-1 border-[#F3F3F8]`}
    >
      <span className={"text-neutral-400 mt-1 font-semibold"}>dastto.ir/</span>
      <input
        defaultValue={profile?.username}
        type="text"
        className={"h-full w-full focus-visible:outline-none"}
        onChange={handleChange}
      />
      <div className="alerts">
        {loading && (
          <svg
            height="16"
            width="16"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <g transform="rotate(0 50 50)">
              <rect
                x="44"
                y="0.5"
                rx="6"
                ry="6.29"
                width="12"
                height="37"
                fill="currentColor"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="0.625s"
                  begin="-0.5208333333333333s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
            </g>
            <g transform="rotate(60 50 50)">
              <rect
                x="44"
                y="0.5"
                rx="6"
                ry="6.29"
                width="12"
                height="37"
                fill="currentColor"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="0.625s"
                  begin="-0.41666666666666663s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
            </g>
            <g transform="rotate(120 50 50)">
              <rect
                x="44"
                y="0.5"
                rx="6"
                ry="6.29"
                width="12"
                height="37"
                fill="currentColor"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="0.625s"
                  begin="-0.31249999999999994s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
            </g>
            <g transform="rotate(180 50 50)">
              <rect
                x="44"
                y="0.5"
                rx="6"
                ry="6.29"
                width="12"
                height="37"
                fill="currentColor"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="0.625s"
                  begin="-0.20833333333333331s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
            </g>
            <g transform="rotate(240 50 50)">
              <rect
                x="44"
                y="0.5"
                rx="6"
                ry="6.29"
                width="12"
                height="37"
                fill="currentColor"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="0.625s"
                  begin="-0.10416666666666666s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
            </g>
            <g transform="rotate(300 50 50)">
              <rect
                x="44"
                y="0.5"
                rx="6"
                ry="6.29"
                width="12"
                height="37"
                fill="currentColor"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="0.625s"
                  begin="0s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
            </g>
          </svg>
        )}
        {!loading && !empty && available && (
          <>
            <TickCircle variant={"Bold"} className={"text-green-500"} />
          </>
        )}
        {!loading && !empty && !available && (
          <>
            <CloseCircle variant={"Bold"} className={"text-red-500"} />
          </>
        )}
      </div>
    </div>
  );
};

export default ChangeUsernameInput;
