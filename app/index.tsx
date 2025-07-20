import type { LinksFunction, MetaArgs } from "react-router";

import { RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import { router } from "./routes";

import "styles/tailwind.css";
import "styles/index.css";

const container = document.getElementById("root");
const root = createRoot(container!);

export function meta({}: MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];


root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);


if (import.meta.hot) {
  import.meta.hot.dispose(router.dispose);
}