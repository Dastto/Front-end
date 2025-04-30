import React from "react";

interface ImagePropType extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className: string;
  lazy?: boolean;
}

const Image: React.FC<ImagePropType> = ({
  src,
  alt = "Dastto",
  className = "",
  lazy = true,
  ...props
}) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        loading={lazy}
        {...props}
        className={className}
      />
    </>
  );
};

export default Image;
