import React from "react";

interface ImagePropType extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  loading?: string;
}

const Image: React.FC<ImagePropType> = ({
  src,
  alt = "Dastto",
  className = "",
  loading = "lazy",
  ...props
}) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        loading={loading}
        {...props}
        className={className}
      />
    </>
  );
};

export default Image;
