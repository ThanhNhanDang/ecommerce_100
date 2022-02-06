import React from "react";
import Breadcrumb from "../shop/shop-with-sidebar/Breadcrumb";
import TableWishlist from "./TableWishlist";
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
      <div class="page-content">
        <div class="container">
          <TableWishlist />
        </div>
      </div>
    </>
  );
}

export default Wishlist;
