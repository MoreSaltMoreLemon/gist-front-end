import React from "react";
import { HamburgerMenu } from "./HamburgerMenu";
import HeaderMenu from "./HeaderMenu";
import Logo from "../components/Logo";
import "../css/appHeader.css";

const AppHeader = () => {
  const isHamburger = false;

  return (
    <header className="app-header">
      <Logo />
      {isHamburger ? <HamburgerMenu /> : <HeaderMenu />}
    </header>
  );
};

export default AppHeader;
