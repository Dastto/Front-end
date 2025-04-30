import React from "react";

interface ImagePropType extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  lazy?: boolean;
}

const Image: React.FC<ImagePropType> = ({
  src,
  alt = "Dastto",
  lazy = true,
  ...props
}) => {
  return (
    <>
      <img src={src} alt={alt} loading={lazy} {...props} />
    </>
  );
};

export default Image;
