import Logo from "~/Components/Commans/Header/Logo";
import Nav from "~/Components/Commans/Header/Nav";
import Divider from "~/Components/Commans/UiParts/Divider";
import Button from "~/Components/Commans/UiParts/Button";
import { EmojiNormal } from "iconsax-reactjs";
import { Link } from "react-router";
import useAuth from "~/Hooks/useAuth";

const Header = () => {
  const { login, user } = useAuth();

  return (
    <header className={"h-24 flex justify-between px-10 items-center"}>
      <div className={"flex justify-center items-center gap-4"}>
        <Logo />
        <Divider />
        <Nav />
      </div>
      <div className={"flex justify-center items-center gap-4"}>
        {login() ? (
          <Link to={`/${user?.username}`}>
            <Button variant={"white"} size={"medium"}>
              <EmojiNormal size={24} className={"track-2"} />
              <span>دستوی من</span>
            </Button>
          </Link>
        ) : (
          <Link to={"/auth"}>
            <Button variant={"black"} size={"medium"}>
              <EmojiNormal size={24} className={"track-2"} />
              <span>لینک میخوام</span>
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
