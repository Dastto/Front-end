import { Home, Profile2User } from "iconsax-reactjs";

const ToastSetting = {};

const NAV_ITEMS = [
  {
    to: "/",
    icon: <Home size="24" variant="TwoTone" className={"track-2"} />,
    label: "خانه",
  },
  {
    to: "/team",
    icon: <Profile2User size="24" variant="TwoTone" className={"track-2"} />,
    label: "تیممون",
  },
];

const Config = {
  routerEvent: false,
};

export { ToastSetting, NAV_ITEMS, Config };
