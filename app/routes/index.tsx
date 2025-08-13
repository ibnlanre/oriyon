import { ErrorElement } from "components/shared/error";
import { Root } from "components/shared/root";
import { PAGES } from "libraries";
import { createBrowserRouter } from "react-router";

import Home from "@/modules/home";
import Products from "@/modules/products";
import Services from "@/modules/services";

export const router = createBrowserRouter([
  {
    path: PAGES.HOME,
    Component: Root,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: PAGES.SERVICES,
        Component: Services,
      },
      {
        path: PAGES.STORE,
        Component: Products,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorElement is404 />,
  },
]);
