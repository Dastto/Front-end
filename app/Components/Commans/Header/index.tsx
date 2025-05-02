import Logo from "~/Components/Commans/Header/Logo";
import Nav from "~/Components/Commans/Header/Nav";
import Divider from "~/Components/Commans/UiParts/Divider";
import Button from "~/Components/Commans/UiParts/Button";
import { EmojiNormal, User } from "iconsax-reactjs";
import { Link } from "react-router";

const Index = () => {
  return (
    <header className={"h-24 flex justify-between px-10 items-center"}>
      <div className={"flex justify-center items-center gap-4"}>
        <Logo />
        <Divider />
        <Nav />
      </div>
      <div className={"flex justify-center items-center gap-4"}>
        <Link to="/">
          <Button variant={"white"} size={"medium"}>
            <User size={24} variant={"TwoTone"} className={"track-2"} />
            <span>ورود</span>
          </Button>
        </Link>
        <Link to={"/"}>
          <Button variant={"black"} size={"medium"}>
            <EmojiNormal size={24} className={"track-2"} />
            <span>لینک میخوام</span>
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Index;
