import { ComingSoon } from "components/coming-soon/home";
import { Root } from "components/shared/root";
import { PAGES } from "libraries";
import { createBrowserRouter } from "react-router";

import Home from "@/modules/home";

export const router = createBrowserRouter([
  {
    path: PAGES.HOME,
    Component: Root,
    children: [
      {
        index: true,
        Component: process.env.NODE_ENV === "production" ? ComingSoon : Home,
      },
    ],
  },
]);
