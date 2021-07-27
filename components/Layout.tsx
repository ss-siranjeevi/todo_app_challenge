import React, { Fragment, ReactNode } from "react";
import "../styles/layout.module.css";
import "@material/top-app-bar/dist/mdc.top-app-bar.css";
import "material-components-web/dist/material-components-web.min.css";
import "@material/icon-button/dist/mdc.icon-button.css";
import "@rmwc/icon/icon.css";
import AppBar from "./AppBar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => (
  <Fragment>
    <div style={{ width: "100vw", height: "100vh" }}>
      <AppBar />
      {children}
    </div>
  </Fragment>
);

export default Layout;
