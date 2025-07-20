import { Home } from "components/coming-soon/home";
import { Root } from "components/root";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [{ index: true, Component: Home }],
  },
]);
