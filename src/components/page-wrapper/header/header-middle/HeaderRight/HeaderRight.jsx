import React from "react";
import HeaderRightDropdown from "./HeaderRightDropdown";
import HeaderRightDropdownCart from "./HeaderRightDropdownCart";
import HeaderRightWishlist from "./HeaderRightWishlist";

function HeaderRight() {
  return (
    <div className="header-right">
      <HeaderRightDropdown />
      <HeaderRightWishlist />
      <HeaderRightDropdownCart />
    </div>
  );
}

export default HeaderRight;
