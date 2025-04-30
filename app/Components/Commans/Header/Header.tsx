import Image from "~/Components/Commans/UiParts/Image";
import Logo from "~/Components/Commans/Header/Logo";

const Header = () => {
  return (
    <>
      <header className={"border h-24 flex justify-between px-10 items-center"}>
        <Logo />
      </header>
    </>
  );
};

export default Header;
