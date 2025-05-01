import Logo from "~/Components/Commans/Header/Logo";
import Nav from "~/Components/Commans/Header/Nav";
import Divider from "~/Components/Commans/UiParts/Divider";
import Button from "~/Components/Commans/UiParts/Button";
import { EmojiNormal } from "iconsax-reactjs";

const Index = () => {
  return (
    <>
      <header className={"h-24 flex justify-between px-10 items-center"}>
        <div className={"flex justify-center items-center gap-4"}>
          <Logo />
          <Divider />
          <Nav />
        </div>
        <div className={"flex justify-center items-center gap-4"}></div>
      </header>
    </>
  );
};

export default Index;
