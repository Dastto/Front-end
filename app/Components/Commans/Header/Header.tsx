import Image from "~/Components/Commans/UiParts/Image";

const Header = () => {
  return (
    <>
      <header className={"border h-24 flex justify-between px-10 items-center"}>
        <div className={"flex justify-center items-center gap-2"}>
          <h2 className={"text-3xl font-medium"}>Dastto</h2>
          <Image src={"/Images/dastto-logo-1.svg"} className={"w-12"} />
        </div>
      </header>
    </>
  );
};

export default Header;
