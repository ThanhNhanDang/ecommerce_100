import React from "react";
import MobileNav from "./MobileNav";
import MobileSearch from "./MobileSearch";
import NavCategories from "./NavCategories";
import NavMenu from "./NavMenu";
import SocialMedia from "./SocialMedia";

function MobileMenu() {
  return (
    <div className="mobile-menu-container">
      <div className="mobile-menu-wrapper">
        <span className="mobile-menu-close">
          <i className="icon-close"></i>
        </span>
        <MobileSearch />
        <MobileNav />
        <div className="tab-content">
          <NavMenu />
          <NavCategories />
        </div>
        <SocialMedia />
      </div>
    </div>
  );
}

export default MobileMenu;
