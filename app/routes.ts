import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  //root pages
  index("routes/root/Home.tsx"),

  //auth pages
  route("sign-in", "./routes/auth/Sign-in.tsx"),
  route("sign-up", "./routes/auth/Sign-up.tsx"),
] satisfies RouteConfig;
