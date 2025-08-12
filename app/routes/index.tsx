import { ComingSoon } from "components/coming-soon/home";
import { ErrorElement } from "components/shared/error";
import { Root } from "components/shared/root";
import { PAGES } from "libraries";
import { createBrowserRouter } from "react-router";

import Home from "@/modules/home";
import Services from "@/modules/services";

export const router = createBrowserRouter([
  {
    path: PAGES.HOME,
    Component: Root,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        Component: process.env.NODE_ENV === "production" ? ComingSoon : Home,
      },
      {
        path: PAGES.SERVICES,
        Component: Services,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorElement is404 />,
  },
]);
