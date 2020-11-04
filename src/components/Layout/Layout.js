import React from "react";
import Aux from "../../hoc/Auxilliary";
import classes from "./Layout.css";
import SideDrawer from "./Navigation/SiteDrawer/SiteDrawer";
import Toolbar from "./Navigation/Toolbar/Toolbar";

const layout = (props) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
