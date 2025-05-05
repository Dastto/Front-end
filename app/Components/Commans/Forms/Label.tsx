import React from "react";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
  size?: "sm" | "md" | "lg";
}

const Label: React.FC<LabelProps> = ({
  htmlFor,
  children,
  className = "",
  required = false,
  size = "md",
}) => {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <label
      htmlFor={htmlFor}
      className={`
        block font-medium mb-1
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {children}
      {required && (
        <span className="text-red-500 ml-1" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
};

export default Label;
