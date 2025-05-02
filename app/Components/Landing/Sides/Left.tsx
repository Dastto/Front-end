const Left = () => {
  const Images = [
    {
      src: "/Images/widgets/big-telegram.png",
      alt: "",
      className: "h-[330px]",
    },
    {
      src: "/Images/widgets/big-dribbble.png",
      alt: "",
      className: "h-[330px]",
    },
    {
      src: "/Images/widgets/music.png",
      alt: "",
      className: "h-[165px]",
    },
    {
      src: "/Images/widgets/image.png",
      alt: "",
      className: "h-[165px]",
    },
    {
      src: "/Images/widgets/small-dribbble.svg",
      alt: "",
      className: "h-[165px]",
    },
    {
      src: "/Images/widgets/small-telegram.svg",
      alt: "",
      className: "h-[165px]",
    },
  ];

  return (
    <>
      <div className={""}>
        {Images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`${image.className} cursor-pointer`}
            loading={"lazy"}
          />
        ))}
      </div>
    </>
  );
};

export default Left;
