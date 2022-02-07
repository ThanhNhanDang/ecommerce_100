import React from "react";
import Breadcrumb from "../shop/shop-with-sidebar/Breadcrumb";
import TableWishlist from "./TableWishlist";
import WishlistShare from "./WishlistShare";
const breadcrumb = {
  item1: "Shop",
  active1: "unactive",
  item2: "Wishlist",
  active2: "active",
};
function Wishlist() {
  return (
    <>
      <Breadcrumb breadcrumb={breadcrumb} />
      <div className="page-content">
        <div className="container">
          <TableWishlist />
          <WishlistShare />
        </div>
      </div>
    </>
  );
}

export default Wishlist;
