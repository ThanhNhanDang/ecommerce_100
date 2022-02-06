import React from "react";
import Breadcrumb from "../shop/shop-with-sidebar/Breadcrumb";
import CartBottom from "./CartBottom";
import CartTotal from "./CartTotal";
import TableCart from "./TableCart";

const breadcrumb = {
  item1: "Shop",
  active1: "unactive",
  item2: "Shopping Cart",
  active2: "active",
};

function Cart() {
  return (
    <>
      <Breadcrumb breadcrumb={breadcrumb} />
      <div class="page-content">
        <div class="cart">
          <div class="container">
            <div class="row">
              <div class="col-lg-9">
                <TableCart />
                <CartBottom />
              </div>
              <CartTotal/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;