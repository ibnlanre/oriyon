import { Outlet } from "react-router";
import { Fragment } from "react";

export function Root() {
  return (
    <Fragment>
      <title>Oriyon International Ltd</title>
      <meta
        name="description"
        content="We redefine the standard of livestock (goat-breeding) with premium wholesale/retail supplies in Nigeria fit for exportation across the Globe."
      />
      <meta
        name="keywords"
        content="Oriyon, livestock, goat breeding, wholesale, retail, export, Nigeria, premium quality"
      />
      <meta name="author" content="Oriyon International Ltd" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph */}
      <meta property="og:image" content="/oriyon.jpeg" />
      <meta property="og:title" content="Oriyon International Ltd" />
      <meta
        property="og:description"
        content="We redefine the standard of livestock (goat-breeding) with premium wholesale/retail supplies in Nigeria fit for exportation across the Globe."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://oriyoninternational.com" />

      {/* Twitter Card */}
      <meta name="twitter:site" content="@Oriyon_Intl" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Oriyon International Ltd" />
      <meta
        name="twitter:description"
        content="We redefine the standard of livestock (goat-breeding) with premium wholesale/retail supplies in Nigeria fit for exportation across the Globe."
      />
      <meta name="twitter:image" content="/oriyon.jpeg" />

      <Outlet />
    </Fragment>
  );
}
