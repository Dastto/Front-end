import Logo from "~/Components/Commans/Header/Logo";

const Header = () => {
  return (
    <>
      <header className={"border h-24 flex justify-between px-10 items-center"}>
        <div className={"flex justify-center items-center gap-4"}>
          <Logo />
          <span className={"h-10 w-0.5 bg-gray-200"}></span>
        </div>
      </header>
    </>
  );
};

export default Header;
