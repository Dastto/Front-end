import { Home, Music, Profile2User } from "iconsax-reactjs";
import * as process from "node:process";

const ToastSetting = {};

const NAV_ITEMS = [
  {
    to: "/",
    icon: <Home size="24" variant="TwoTone" className={"track-2"} />,
    label: "خانه",
  },
  {
    to: "/music",
    icon: <Music size="24" variant="TwoTone" className={"track-2"} />,
    label: "موزیک",
  },
];

const Config = {
  routerEvent: false,
};

const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const WIDGET_EFFECT = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

// const FILE_BASE_URL = "http://127.0.0.1:8000/storage/";
// const API_BASE_URL = "http://127.0.0.1:8000/api/v1";

const FILE_BASE_URL = process.env.REACT_APP_FILES_URL;
const API_BASE_URL = process.env.REACT_APP_API_URL;

export {
  ToastSetting,
  NAV_ITEMS,
  Config,
  FILE_BASE_URL,
  API_BASE_URL,
  FADE_UP,
  WIDGET_EFFECT,
};
