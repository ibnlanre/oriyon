import { Outlet } from "react-router";
import { Fragment } from "react";

export function Root() {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
}
