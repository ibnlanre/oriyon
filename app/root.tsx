import { theme } from "components/shared/theme";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import { router } from "@/routes";
import { MantineProvider } from "@mantine/core";

import "@mantine/core/styles.layer.css";
import "styles/index.css";
import "styles/tailwind.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <StrictMode>
    <NuqsAdapter>
      <MantineProvider theme={theme}>
        <RouterProvider router={router} />
      </MantineProvider>
    </NuqsAdapter>
  </StrictMode>
);

if (import.meta.hot) {
  import.meta.hot.dispose(router.dispose);
}
