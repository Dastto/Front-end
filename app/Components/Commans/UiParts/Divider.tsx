import React from "react";

const Divider: React.FC<{
  className?: string;
}> = ({ className }) => (
  <span className={`h-10 w-0.5 bg-gray-200 ${className}`} />
);

export default Divider;
