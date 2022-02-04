import React from "react";
import MobileNav from "./MobileNav";
import MobileSearch from "./MobileSearch";
import NavCategories from "./NavCategories";
import NavMenu from "./NavMenu";

function MobileMenu() {
  return (
    <div class="mobile-menu-container">
      <div class="mobile-menu-wrapper">
        <span class="mobile-menu-close">
          <i class="icon-close"></i>
        </span>
        <MobileSearch />
        <MobileNav />
        <div class="tab-content">
          <NavMenu />
          <NavCategories />
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
