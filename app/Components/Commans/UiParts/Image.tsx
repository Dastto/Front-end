import React, { type ImgHTMLAttributes } from "react";

interface ImagePropType extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  className?: string;
  loading?: "lazy" | "eager";
}

const CustomImage: React.FC<ImagePropType> = ({
  src,
  alt = "",
  className = "",
  loading = "lazy",
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      {...props}
      className={className}
    />
  );
};

export default CustomImage;
