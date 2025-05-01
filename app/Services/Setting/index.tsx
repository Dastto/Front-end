import { Home, Profile2User } from "iconsax-reactjs";

const ToastSetting = {};

const NAV_ITEMS = [
  {
    to: "/",
    icon: <Home size="24" variant="TwoTone" />,
    label: "خانه",
  },
  {
    to: "/team",
    icon: <Profile2User size="24" variant="TwoTone" />,
    label: "تیممون",
  },
];

const Config = {
  routerEvent: false,
};

export { ToastSetting, NAV_ITEMS, Config };
