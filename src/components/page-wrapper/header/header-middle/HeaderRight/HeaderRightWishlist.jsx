import React from "react";
import { NavLink } from "react-router-dom";

function HeaderRightWishlist() {
  return (
    <div className="wishlist">
      <NavLink to="/wishlist" title="Wishlist">
        <div className="icon">
          <i className="icon-heart-o"></i>
          <span className="wishlist-count badge">3</span>
        </div>
        <p>Wishlist</p>
      </NavLink>
    </div>
  );
}

export default HeaderRightWishlist;
