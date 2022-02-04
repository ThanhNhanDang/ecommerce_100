import React from "react";

function MobileNav() {
  return (
    <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
      <li className="nav-item">
        <a
          className="nav-link active"
          id="mobile-menu-link"
          data-toggle="tab"
          href="#mobile-menu-tab"
          role="tab"
          aria-controls="mobile-menu-tab"
          aria-selected="true"
        >
          Menu
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          id="mobile-cats-link"
          data-toggle="tab"
          href="#mobile-cats-tab"
          role="tab"
          aria-controls="mobile-cats-tab"
          aria-selected="false"
        >
          Categories
        </a>
      </li>
    </ul>
  );
}

export default MobileNav;
