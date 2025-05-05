import React from "react";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
}

const Label: React.FC<LabelProps> = ({
  htmlFor,
  children,
  className = "",
  required = false,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`
        block font-medium mb-1 text-base
        ${className}
      `}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};

export default Label;
