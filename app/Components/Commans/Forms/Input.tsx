import React, { useEffect, useState } from "react";
import Divider from "~/Components/Commans/UiParts/Divider";

interface InputPropsTypes {
  type?: "text" | "password" | "email" | "number";
  icon?: boolean;
  children?: React.ReactNode;
  autoFocus?: boolean;
  name?: string;
  onInput?: (e: any) => void;
  onblur?: () => void;
  onFocus?: () => void;
  errors: Array<any>;
  defaultValue: string;
}

const Input: React.FC<InputPropsTypes> = ({
  type = "text",
  icon = true,
  children,
  autoFocus = false,
  name,
  onInput,
  onblur,
  onFocus,
  errors = [],
  defaultValue,
}) => {
  const [errs, setErrs] = useState<any>([]);
  const [animationClasses, setAnimationClasses] = useState<string>("");

  useEffect(() => {
    setErrs(errors);
  }, [errors]);

  const handleError = () => {
    const newError = errs.filter(
      (error: { name: string | undefined }) => error.name === name,
    );

    if (newError?.[0]?.error !== undefined) {
      return newError?.[0]?.error;
    } else {
      return null;
    }
  };

  useEffect(() => {
    if (handleError() !== null) {
      setAnimationClasses("rotate-[1deg] translate-x-[15px]");

      setTimeout(() => {
        setAnimationClasses("-rotate-[1deg] -translate-x-[15px]");
      }, 140);

      setTimeout(() => {
        setAnimationClasses("rotate-[1deg] translate-x-[15px]");
      }, 140 * 2);

      setTimeout(() => {
        setAnimationClasses("0");
      }, 140 * 3);
    } else {
      setAnimationClasses("");
    }
  }, [errs]);

  const handleInput = (e: any) => {
    setErrs([]);
    onInput?.(e);
  };

  return (
    <>
      <div
        className={`origin-center h-15 w-full rounded-[20px] px-4 bg-white py-3 border-2 mt-3 flex items-center transition-all duration-300 gap-4 border-[#F3F3F8] ${handleError() !== null && "border-red-500"} ${animationClasses}`}
      >
        {icon && (
          <>
            {children}
            <Divider className={"!h-6 shrink-0"} />
          </>
        )}
        <input
          type={type}
          autoFocus={autoFocus}
          name={name}
          onInput={handleInput}
          onBlur={onblur}
          onFocus={onFocus}
          className={`w-full h-full focus-visible:outline-none text-lg font-semibold placeholder-[#C5C5CF] transition-all duration-300 ${handleError() !== null && "text-red-500"}`}
          placeholder={"شماره بده!"}
          defaultValue={defaultValue}
        />
      </div>
      <span
        className={`mt-2 block font-semibold text-red-500 opacity-100 transition-all duration-300 -z-50 relative h-6 ${handleError() === null && "-translate-y-10 !h-0"}`}
      >
        {handleError()}
      </span>
    </>
  );
};

export default Input;
