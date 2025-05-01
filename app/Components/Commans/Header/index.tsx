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
        <div className={"flex justify-center items-center gap-4"}>
          <div className={"flex gap-5"}>
            <Button variant={"blue"} size={"small"}>
              بزن بریم
              <EmojiNormal size={24} />
            </Button>
            <Button variant={"blue"} size={"medium"}>
              بزن بریم
              <EmojiNormal size={24} />
            </Button>
            <Button variant={"blue"} size={"large"}>
              بزن بریم
              <EmojiNormal size={24} />
            </Button>
          </div>
          <div className={"flex gap-5"}>
            <Button variant={"black"} size={"small"}>
              بزن بریم
              <EmojiNormal size={24} strokeLinecap={"round"} />
            </Button>
            <Button variant={"black"} size={"medium"}>
              بزن بریم
              <EmojiNormal size={24} />
            </Button>
            <Button variant={"black"} size={"large"}>
              بزن بریم
              <EmojiNormal size={24} />
            </Button>
          </div>
          <div className={"flex gap-5"}>
            <Button variant={"white"} size={"small"}>
              بزن بریم
              <EmojiNormal size={24} />
            </Button>
            <Button variant={"white"} size={"medium"}>
              بزن بریم
              <EmojiNormal size={24} />
            </Button>
            <Button variant={"white"} size={"large"}>
              بزن بریم
              <EmojiNormal size={24} />
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Index;
