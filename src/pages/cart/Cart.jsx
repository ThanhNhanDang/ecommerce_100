import React from "react";
import Breadcrumb from "../shop/shop-with-sidebar/Breadcrumb";
import CartBottom from "./CartBottom";
import CartTotal from "./CartTotal";
import TableCart from "./CartTableCart";
import { productsHome } from "../../data";
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
      <div className="page-content">
        <div className="cart">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <TableCart productsCart={productsHome}/>
                <CartBottom/>
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
