import Logo from "~/Components/Commans/Header/Logo";
import Nav from "~/Components/Commans/Header/Nav";
import Divider from "~/Components/Commans/UiParts/Divider";

const Header = () => {
  return (
    <>
      <header className={"h-24 flex justify-between px-10 items-center"}>
        <div className={"flex justify-center items-center gap-4"}>
          <Logo />
          <Divider />
          <Nav />
        </div>
      </header>
    </>
  );
};

export default Header;
