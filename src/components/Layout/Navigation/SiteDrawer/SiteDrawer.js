import React from "react";
import Logo from "../../Logo/logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SiteDrawer.css";

const sideDrawer = (props) => {
  return (
    <div className="SiteDrawer">
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
