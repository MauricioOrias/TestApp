import React, { Fragment } from "react";
import MiniDrawer from "./Sidebar";

export default function MainLayout(props) {
  return (
    <Fragment>
      <MiniDrawer>{props.children}</MiniDrawer>
    </Fragment>
  );
}
