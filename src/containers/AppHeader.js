import React from "react";
import Media from "react-media";
import HamburgerMenu from "./HamburgerMenu";
import HeaderMenu from "./HeaderMenu";
import Logo from "../components/Logo";
import "../css/appHeader.css";

const AppHeader = () => {

  return (
    <header className="app-header">
      <Logo />
      <Media query="(max-width: 900px)">
        <HamburgerMenu />
      </Media>
      <Media query="(min-width: 901px)">
        <HeaderMenu />
      </Media>
    </header>
  );
};

export default AppHeader;
