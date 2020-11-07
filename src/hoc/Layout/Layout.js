import React, { Component } from "react";
import Aux from "../Auxiliary/Auxilliary";
import classes from "./Layout.css";
import SideDrawer from "../../components/Navigation/SiteDrawer/SiteDrawer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

class Layout extends Component {
  state = {
    showSideDrawer: true,
  };
  siteDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  siteDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.siteDrawerToggleHandler} />
        <SideDrawer
          closed={this.state.showSideDrawer}
          openclosed={this.siteDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
