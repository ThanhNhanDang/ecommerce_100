import React from "react";

function HeaderLeft() {
  return (
    <div className="header-left">
      <button className="mobile-menu-toggler">
        <span className="sr-only">Toggle mobile menu</span>
        <i className="icon-bars"></i>
      </button>

      <a href="index.html" className="logo">
        <img
          src="assets/images/demos/demo-3/logo.png"
          alt="Molla Logo"
          width="105"
          height="25"
        />
      </a>
    </div>
  );
}

export default HeaderLeft;
