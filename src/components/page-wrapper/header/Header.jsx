import React from "react";
import HeaderTop from "./header-top/HeaderTop";
import HeaderBottom from "./header-bottom/HeaderBottom";
import HeaderMiddle from "./header-middle/HeaderMiddle";

function Header() {
  return (
    <header className="header header-intro-clearance header-3">
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
    </header>
  );
}

export default Header;
