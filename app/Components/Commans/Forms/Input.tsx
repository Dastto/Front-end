import React from "react";
import Divider from "~/Components/Commans/UiParts/Divider";

interface InputPropsTypes {
  type?: "text" | "password" | "email" | "number";
  icon?: boolean;
  children?: React.ReactNode;
  autoFocus?: boolean;
  name?: string;
  onInput?: () => void;
  onblur?: () => void;
  onFocus?: () => void;
  errors: Array<any>;
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
}) => {
  return (
    <>
      <div
        className={
          "h-15 w-full rounded-[20px] px-4 py-3 border-[#F3F3F8] border-2 mt-3 flex items-center gap-4"
        }
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
          onInput={onInput}
          onBlur={onblur}
          onFocus={onFocus}
          className={
            "w-full h-full focus-visible:outline-none text-lg font-semibold placeholder-[#C5C5CF]"
          }
          placeholder={"شماره بده!"}
        />
        {errors.map((error) => {
          return <>ok</>;
        })}
      </div>
    </>
  );
};

export default Input;
