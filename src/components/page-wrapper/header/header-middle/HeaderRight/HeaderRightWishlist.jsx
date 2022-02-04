import React from "react";
import { Link } from "react-router-dom";

function HeaderRightWishlist() {
  return (
    <div className="wishlist">
      <Link to="/wishlist" title="Wishlist">
        <div className="icon">
          <i className="icon-heart-o"></i>
          <span className="wishlist-count badge">3</span>
        </div>
        <p>Wishlist</p>
      </Link>
    </div>
  );
}

export default HeaderRightWishlist;
