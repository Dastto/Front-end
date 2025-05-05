import {
  index,
  layout,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  layout("./Services/StarterHandling/index.tsx", [
    layout("./Components/Commans/Layouts/MasterLayout.tsx", [
      index("./Routes/index.tsx"),
      route("auth", "./Routes/auth/index.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
