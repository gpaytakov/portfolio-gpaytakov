import React from "react";
import gp from "../assets/gp.jpg";
import Navigation from "./Navigation";

function Header() {
  return (
    <div id="header">
      <h1>
        Guvanchmyrat Paytakov <span>Full Stack Developer</span>
      </h1>
      <Navigation />
      <img id="profile-photo" src={gp} alt="GP" />
    </div>
  );
}

export default Header;
