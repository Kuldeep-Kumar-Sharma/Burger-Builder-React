import React from "react";
import logoImage from "../../../../assets/images/burger-logo.png";
import "./logo.css";

const logo = (props) => (
  <div className="Logo">
    <img src={logoImage} alt="My Burger Logo"></img>
  </div>
);

export default logo;
