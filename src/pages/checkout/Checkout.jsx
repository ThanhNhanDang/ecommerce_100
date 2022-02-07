import React from "react";
import Breadcrumb from "../shop/shop-with-sidebar/Breadcrumb";
import CheckoutBillingDetails from "./CheckoutBillingDetails";
import CheckoutOrder from "./CheckoutOrder";

const breadcrumb = {
  item1: "Shop",
  active1: "unactive",
  item2: "Checkout",
  active2: "active",
};
function Checkout() {
  return (
    <>
      <Breadcrumb breadcrumb={breadcrumb} />
      <div className="page-content">
        <div className="checkout">
          <div className="container">
            <div className="checkout-discount">
              <form action="">
                <input
                  type="text"
                  className="form-control"
                  required
                  id="checkout-discount-input"
                />
                <label for="checkout-discount-input" className="text-truncate">
                  Have a coupon? <span>Click here to enter your code</span>
                </label>
              </form>
            </div>
            <form action="">
              <div className="row">
                <CheckoutBillingDetails />
                <CheckoutOrder />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
