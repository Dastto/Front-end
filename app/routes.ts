import { type RouteConfig, index, layout } from "@react-router/dev/routes";

export default [
    layout("./Services/StarterHandling/index.tsx", [
        index("./Routes/index.tsx"),
    ])
] satisfies RouteConfig;
